import FlowerHead from "./FlowerHead";
import Stem from "./Stem";
import "./FlowerSway.css";

type FlowerClusterProps = {
  side: "left" | "right";
  count?: number;
  anchorClassName?: string;
  align?: "start" | "end";
};

const PETAL_COLORS = ["#F4B8CB", "#D8C4EC", "#E08CA0", "#F6D488", "#F7C9D8"];

type FlowerDef = {
  stemMax: number;
  headMax: number;
  rotation: number;
  swayDuration: number;
  swayDelay: number;
  hideOnMobile?: boolean;
};

const FLOWER_DEFS: FlowerDef[] = [
  { stemMax: 50, headMax: 42, rotation: -4, swayDuration: 4, swayDelay: -1 },
  { stemMax: 75, headMax: 55, rotation: 3, swayDuration: 5, swayDelay: -2.5, hideOnMobile: true },
  { stemMax: 115, headMax: 70, rotation: -2, swayDuration: 6, swayDelay: -3, hideOnMobile: false },
  { stemMax: 90, headMax: 62, rotation: 5, swayDuration: 4.5, swayDelay: -0.5, hideOnMobile: true },
  { stemMax: 62, headMax: 46, rotation: -6, swayDuration: 5.5, swayDelay: -1.8 },
  { stemMax: 105, headMax: 75, rotation: 2, swayDuration: 6.5, swayDelay: -3.5, hideOnMobile: true },
];

function sizeClamp(maxPx: number, vwFactor: number) {
  const minPx = Math.round(maxPx * 0.55);
  return `clamp(${minPx}px, ${vwFactor}vw, ${maxPx}px)`;
}

function FlowerCluster({ side, count = 6, anchorClassName = "bottom-20", align = "end" }: FlowerClusterProps) {
  const isRight = side === "right";
  const flowers = FLOWER_DEFS.slice(0, count);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 ${anchorClassName} ${isRight ? "right-1 sm:right-4" : "left-1 sm:left-4"}`}
      style={isRight ? { transform: "scaleX(-1)" } : undefined}
    >
      <div className={`flex ${align === "start" ? "items-start" : "items-end"}`}>
        {flowers.map((flower, index) => (
          <div
            key={index}
            className={flower.hideOnMobile ? "hidden sm:block" : undefined}
            style={{ marginLeft: index === 0 ? 0 : "-22px" }}
          >
            <div
              style={{
                transform: `rotate(${flower.rotation}deg)`,
                transformOrigin: "bottom center",
              }}
            >
              <div
                className="flower-sway flex flex-col items-center"
                style={{
                  transformOrigin: "bottom center",
                  animationDuration: `${flower.swayDuration}s`,
                  animationDelay: `${flower.swayDelay}s`,
                }}
              >
                <div style={{ marginBottom: "-8px" }}>
                  <FlowerHead
                    size={sizeClamp(flower.headMax, flower.headMax * 0.09)}
                    petalColor={PETAL_COLORS[index % PETAL_COLORS.length]}
                  />
                </div>
                <Stem
                  height={sizeClamp(flower.stemMax, flower.stemMax * 0.1)}
                  flip={index % 2 === 1}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlowerCluster;
