import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const jobs = [
  {
    inputDir: "public/images/wedding",
    outputDir: "public/images/wedding",
    width: 1600,
    quality: 80,
  },
  {
    inputDir: "public/images/cats",
    outputDir: "public/images/cats",
    width: 1200,
    quality: 80,
  },
  {
    inputDir: "public/images/couple",
    outputDir: "public/images/couple",
    width: 1400,
    quality: 80,
  },
  {
    inputDir: "public/images/memories",
    outputDir: "public/images/memories",
    width: 1400,
    quality: 80,
  },
  {
    inputDir: "public/images/sky",
    outputDir: "public/images/sky",
    width: 1600,
    quality: 82,
  },
];

const validExtensions = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"];

async function optimizeFolder(job) {
  try {
    const files = await fs.readdir(job.inputDir);

    for (const file of files) {
      const ext = path.extname(file);

      if (!validExtensions.includes(ext)) continue;

      const inputPath = path.join(job.inputDir, file);
      const outputName = `${path.basename(file, ext).toLowerCase()}.webp`;
      const outputPath = path.join(job.outputDir, outputName);

      await sharp(inputPath)
        .rotate()
        .resize({
          width: job.width,
          withoutEnlargement: true,
        })
        .webp({
          quality: job.quality,
          effort: 6,
        })
        .toFile(outputPath);

      console.log(`Optimized: ${inputPath} -> ${outputPath}`);
    }
  } catch (error) {
    console.warn(`Skipping ${job.inputDir}:`, error.message);
  }
}

for (const job of jobs) {
  await optimizeFolder(job);
}