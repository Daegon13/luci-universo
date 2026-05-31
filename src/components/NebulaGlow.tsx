import type { PerformanceMode } from "@/hooks/usePerformanceMode";

export function NebulaGlow({ performanceMode = "full" }: { performanceMode?: PerformanceMode }) {
  if (performanceMode === "lite") {
    return (
      <>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(233,189,255,0.07),transparent_36%),radial-gradient(circle_at_82%_74%,rgba(255,196,214,0.06),transparent_38%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_86%_at_50%_120%,rgba(0,0,0,0.46),transparent_52%)]" />
      </>
    );
  }

  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(233,189,255,0.12),transparent_40%),radial-gradient(circle_at_76%_8%,rgba(140,206,255,0.11),transparent_35%),radial-gradient(circle_at_82%_74%,rgba(255,196,214,0.1),transparent_42%),radial-gradient(circle_at_36%_78%,rgba(110,78,189,0.16),transparent_44%)]" />
      {performanceMode === "full" ? <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(78,41,135,0.12),transparent_55%)] mix-blend-screen" /> : null}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_86%_at_50%_120%,rgba(0,0,0,0.52),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_22%,rgba(4,2,12,0.36)_100%)]" />
    </>
  );
}
