interface MiniChartProps {
  data: number[];
  positive?: boolean;
  height?: number;
}

export default function MiniChart({ data, positive = true, height = 40 }: MiniChartProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = ((max - value) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg
      width="100%"
      height={height}
      className="overflow-visible"
      preserveAspectRatio="none"
    >
      <polyline
        points={points}
        fill="none"
        stroke={positive ? '#5a9e6f' : '#c5727a'}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        className="transition-all duration-300"
      />
    </svg>
  );
}
