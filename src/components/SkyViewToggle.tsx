"use client";

import { MagicButton } from "@/components/MagicButton";

type SkyView = "earthSky" | "solarSystem";

type SkyViewToggleProps = {
  value: SkyView;
  onChange: (view: SkyView) => void;
};

export function SkyViewToggle({ value, onChange }: SkyViewToggleProps) {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-2xl border border-rose-100/20 bg-[#140d27]/70 p-2">
      <MagicButton
        type="button"
        variant={value === "earthSky" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => onChange("earthSky")}
        aria-pressed={value === "earthSky"}
        className="w-full"
      >
        Cielo desde la Tierra
      </MagicButton>
      <MagicButton
        type="button"
        variant={value === "solarSystem" ? "secret" : "ghost"}
        size="sm"
        onClick={() => onChange("solarSystem")}
        aria-pressed={value === "solarSystem"}
        className="w-full"
      >
        Sistema Solar
      </MagicButton>
    </div>
  );
}
