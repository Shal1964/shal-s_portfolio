type StampProps = {
  className?: string;
};

const WIDTH = 84;
const HEIGHT = 100;
const BITE = 5;
const CARD_BG = "#FFF8E7";

function perforationHoles() {
  const holes: { cx: number; cy: number }[] = [];

  const stepX = WIDTH / 7;
  for (let i = 0; i <= 7; i++) {
    holes.push({ cx: i * stepX, cy: 0 });
    holes.push({ cx: i * stepX, cy: HEIGHT });
  }

  const stepY = HEIGHT / 8;
  for (let i = 1; i < 8; i++) {
    holes.push({ cx: 0, cy: i * stepY });
    holes.push({ cx: WIDTH, cy: i * stepY });
  }

  return holes;
}

function Stamp({ className = "" }: StampProps) {
  const holes = perforationHoles();

  return (
    <svg
      viewBox={`-6 -6 ${WIDTH + 12} ${HEIGHT + 12}`}
      className={className}
      aria-hidden="true"
    >
      <rect
        x={0}
        y={0}
        width={WIDTH}
        height={HEIGHT}
        fill="#EEF8FF"
        stroke="#000097"
        strokeOpacity="0.25"
        strokeWidth="1"
      />

      {holes.map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r={BITE / 2} fill={CARD_BG} />
      ))}

      <circle cx={WIDTH / 2} cy={HEIGHT / 2} r="14" fill="#FFE066" stroke="#F59E0B" strokeWidth="1.5" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 8;
        const x1 = WIDTH / 2 + Math.cos(a) * 18;
        const y1 = HEIGHT / 2 + Math.sin(a) * 18;
        const x2 = WIDTH / 2 + Math.cos(a) * 24;
        const y2 = HEIGHT / 2 + Math.sin(a) * 24;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export default Stamp;
