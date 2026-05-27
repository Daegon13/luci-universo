"use client";

type SkyView = "earthSky" | "solarSystem";

type SkyViewToggleProps = {
  value: SkyView;
  onChange: (view: SkyView) => void;
};

export function SkyViewToggle({ value, onChange }: SkyViewToggleProps) {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-2xl border border-rose-100/20 bg-[#140d27]/70 p-2">
      <button
        type="button"
        onClick={() => onChange("earthSky")}
        className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
          value === "earthSky"
            ? "border border-rose-200/50 bg-rose-300/20 text-rose-50"
            : "border border-transparent text-violet-100/85 hover:border-violet-100/30"
        }`}
        aria-pressed={value === "earthSky"}
      >
        Cielo desde la Tierra
      </button>
      <button
        type="button"
        onClick={() => onChange("solarSystem")}
        className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
          value === "solarSystem"
            ? "border border-amber-200/55 bg-amber-300/20 text-amber-50"
            : "border border-transparent text-violet-100/85 hover:border-violet-100/30"
        }`}
        aria-pressed={value === "solarSystem"}
      >
        Sistema Solar
      </button>
    </div>
  );
}
