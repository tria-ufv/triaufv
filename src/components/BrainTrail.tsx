/**
 * Grafismo da marca: pontos conectados que sugerem o "cérebro" e a trilha.
 * Os pontos aparecem suavemente ao carregar (animação curta).
 */
const nos = [
  [40, 120],
  [95, 60],
  [150, 105],
  [205, 45],
  [250, 110],
  [120, 175],
  [200, 165],
  [60, 205],
  [165, 235],
  [255, 200],
];

export function BrainTrail({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 280"
      role="img"
      aria-label="Grafismo de pontos conectados representando a trilha da TrIA"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.55">
        {nos.slice(0, -1).map(([x, y], i) => {
          const [nx, ny] = nos[i + 1];
          return <line key={`l-${i}`} x1={x} y1={y} x2={nx} y2={ny} />;
        })}
        <polyline className="tria-linha" points={nos.map(([x, y]) => `${x},${y}`).join(" ")} />
      </g>
      {nos.map(([x, y], i) => (
        <circle
          key={`c-${i}`}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 7 : 4.5}
          fill={i % 3 === 0 ? "var(--cor-amarelo)" : "currentColor"}
          className="tria-no"
          style={{ animationDelay: `${i * 60}ms` }}
        />
      ))}
    </svg>
  );
}
