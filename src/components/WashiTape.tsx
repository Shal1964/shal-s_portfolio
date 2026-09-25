type WashiTapeColor = "purple" | "pink" | "orange" | "yellow" | "blue" | "green";

type WashiTapeProps = {
  color: WashiTapeColor;
  className?: string;
  rotate?: number;
  width?: number;
  height?: number;
};

const tapeColorClasses: Record<WashiTapeColor, string> = {
  purple: "bg-purple-300/60",
  pink: "bg-pink-300/60",
  orange: "bg-orange-300/60",
  yellow: "bg-[#FFE066]/60",
  blue: "bg-[#000097]/40",
  green: "bg-green-300/60",
};

function WashiTape({ color, className = "", rotate = -6, width = 96, height = 32 }: WashiTapeProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none shadow-sm ${tapeColorClasses[color]} ${className}`}
      style={{
        width,
        height,
        transform: `rotate(${rotate}deg)`,
        clipPath: "polygon(4% 0%, 100% 6%, 96% 100%, 0% 94%)",
      }}
    />
  );
}

export default WashiTape;
