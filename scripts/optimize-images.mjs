import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const jobs = [
  { dir: "public/images/wedding", width: 1600, quality: 80 },
  { dir: "public/images/cats", width: 1200, quality: 80 },
  { dir: "public/images/couple", width: 1400, quality: 80 },
  { dir: "public/images/memories", width: 1400, quality: 80 },
  { dir: "public/images/sky", width: 1600, quality: 82 },
];

const validExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        files.push(...(await walk(fullPath)));
      } else {
        files.push(fullPath);
      }
    }

    return files;
  } catch {
    return [];
  }
}

async function optimizeJob({ dir, width, quality }) {
  const files = await walk(dir);
  const processedOutputs = new Set();

  for (const inputPath of files) {
    const ext = path.extname(inputPath).toLowerCase();

    if (!validExtensions.has(ext)) continue;
    if (inputPath.endsWith(".tmp")) continue;

    const parsed = path.parse(inputPath);
    const outputPath = path.join(parsed.dir, `${parsed.name.toLowerCase()}.webp`);
    const normalizedOutput = path.resolve(outputPath).toLowerCase();

    if (processedOutputs.has(normalizedOutput)) {
      console.log(`Skipped duplicate output: ${outputPath}`);
      continue;
    }

    processedOutputs.add(normalizedOutput);

    const tempPath = `${outputPath}.tmp`;

    try {
      const beforeSize = (await fs.stat(inputPath)).size;

      await sharp(inputPath)
        .rotate()
        .resize({
          width,
          withoutEnlargement: true,
        })
        .webp({
          quality,
          effort: 6,
        })
        .toFile(tempPath);

      if (await exists(outputPath)) {
        await fs.rm(outputPath, { force: true });
      }

      await fs.rename(tempPath, outputPath);

      const afterSize = (await fs.stat(outputPath)).size;

      console.log(
        `Optimized: ${inputPath} -> ${outputPath} | ${(beforeSize / 1024).toFixed(1)} KB -> ${(afterSize / 1024).toFixed(1)} KB`
      );
    } catch (error) {
      console.warn(`Could not optimize ${inputPath}: ${error.message}`);

      if (await exists(tempPath)) {
        await fs.rm(tempPath, { force: true });
      }
    }
  }
}

for (const job of jobs) {
  await optimizeJob(job);
}