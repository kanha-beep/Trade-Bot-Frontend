import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  change?: {
    value: string;
    positive: boolean;
  };
  subtitle?: string;
}

export default function MetricCard({ icon: Icon, label, value, change, subtitle }: MetricCardProps) {
  return (
    <div className="stat-card">
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 bg-primary-800 rounded-md">
          <Icon className="w-5 h-5 text-accent-500" />
        </div>
        {change && (
          <span
            className={`text-xs font-medium ${
              change.positive ? 'text-success' : 'text-risk'
            }`}
          >
            {change.positive ? '+' : ''}{change.value}
          </span>
        )}
      </div>
      <p className="text-xs text-primary-400 mb-1 font-medium">{label}</p>
      <p className="text-2xl font-semibold text-primary-100">{value}</p>
      {subtitle && <p className="text-xs text-primary-500 mt-1">{subtitle}</p>}
    </div>
  );
}
