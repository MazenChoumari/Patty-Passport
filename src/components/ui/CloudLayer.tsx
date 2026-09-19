export function CloudLayer({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const fill = tone === "light" ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.12)";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="absolute top-[6%] left-[-15%] w-[150%] animate-drift-slow opacity-70 blur-[1px]">
        <CloudRow fill={fill} scale={0.8} />
      </div>
      <div className="absolute top-[22%] left-[-15%] w-[150%] animate-drift opacity-90">
        <CloudRow fill={fill} scale={1.1} />
      </div>
    </div>
  );
}

function CloudRow({ fill, scale }: { fill: string; scale: number }) {
  return (
    <svg
      viewBox="0 0 1600 200"
      className="inline-block w-1/2"
      style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[80, 420, 760, 1100, 1400].map((x, i) => (
        <g key={x} opacity={0.55 + (i % 3) * 0.15}>
          <ellipse cx={x} cy={100} rx="100" ry="38" fill={fill} />
          <ellipse cx={x + 65} cy={82} rx="65" ry="30" fill={fill} />
          <ellipse cx={x - 65} cy={88} rx="60" ry="27" fill={fill} />
          <ellipse cx={x + 15} cy={65} rx="45" ry="24" fill={fill} />
        </g>
      ))}
    </svg>
  );
}
