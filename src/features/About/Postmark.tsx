type PostmarkProps = {
  className?: string;
};

function Postmark({ className = "" }: PostmarkProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <path id="postmark-ring" d="M 60,14 A 46,46 0 1 1 59.9,14" fill="none" />
      </defs>

      <circle cx="60" cy="60" r="46" fill="none" stroke="#000097" strokeOpacity="0.55" strokeWidth="2" />
      <circle cx="60" cy="60" r="40" fill="none" stroke="#000097" strokeOpacity="0.35" strokeWidth="1" />

      <text fontSize="9" fontWeight="700" letterSpacing="2" fill="#000097" opacity="0.65">
        <textPath href="#postmark-ring" startOffset="2%">
          BINUS · 2026 · BINUS · 2026 ·
        </textPath>
      </text>

      <path
        d="M 8,50 Q 20,42 32,50 T 56,50 T 80,50 T 104,50"
        fill="none"
        stroke="#000097"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
      <path
        d="M 8,60 Q 20,52 32,60 T 56,60 T 80,60 T 104,60"
        fill="none"
        stroke="#000097"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
      <path
        d="M 8,70 Q 20,62 32,70 T 56,70 T 80,70 T 104,70"
        fill="none"
        stroke="#000097"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default Postmark;
