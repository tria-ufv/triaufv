/**
 * Grafismo da marca: pontos conectados que sugerem o "cérebro" e a trilha.
 * Os pontos aparecem suavemente ao carregar (animação curta).
 */
const nos: Array<{ x: number; y: number }> = [
  { x: 40, y: 120 },
  { x: 95, y: 60 },
  { x: 150, y: 105 },
  { x: 205, y: 45 },
  { x: 250, y: 110 },
  { x: 120, y: 175 },
  { x: 200, y: 165 },
  { x: 60, y: 205 },
  { x: 165, y: 235 },
  { x: 255, y: 200 },
];

const linhas = nos.slice(1).map((no, i) => ({ de: nos[i]!, para: no }));

export function BrainTrail({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 280"
      role="img"
      aria-label="Grafismo de pontos conectados representando a trilha da TrIA"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.55">
        {linhas.map((l, i) => (
          <line key={`l-${i}`} x1={l.de.x} y1={l.de.y} x2={l.para.x} y2={l.para.y} />
        ))}
        <polyline className="tria-linha" points={nos.map((n) => `${n.x},${n.y}`).join(" ")} />
      </g>
      {nos.map((n, i) => (
        <circle
          key={`c-${i}`}
          cx={n.x}
          cy={n.y}
          r={i % 3 === 0 ? 7 : 4.5}
          fill={i % 3 === 0 ? "var(--cor-amarelo)" : "currentColor"}
          className="tria-no"
          style={{ animationDelay: `${i * 60}ms` }}
        />
      ))}
    </svg>
  );
}
