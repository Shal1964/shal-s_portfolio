type StemProps = {
  height: string;
  flip?: boolean;
};

const STEM_COLOR = "#A9C4B8";

function Stem({ height, flip = false }: StemProps) {
  return (
    <svg
      viewBox="0 0 40 200"
      aria-hidden="true"
      style={{
        height,
        aspectRatio: "40 / 200",
        display: "block",
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    >
      <path
        d="M20 0 C 18 60, 22 120, 20 200"
        stroke={STEM_COLOR}
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M20 90 C 8 85, 2 100, 0 115 C 12 113, 20 102, 20 92 Z" fill={STEM_COLOR} />
      <path d="M20 140 C 32 136, 38 150, 40 165 C 28 163, 20 152, 20 142 Z" fill={STEM_COLOR} />
    </svg>
  );
}

export default Stem;
