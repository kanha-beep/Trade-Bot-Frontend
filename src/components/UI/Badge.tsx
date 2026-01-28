interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'risk' | 'neutral' | 'accent';
  size?: 'sm' | 'md';
}

export default function Badge({ children, variant = 'neutral', size = 'md' }: BadgeProps) {
  const variants = {
    success: 'bg-success-light/20 text-success border-success-dark/30',
    risk: 'bg-risk-light/20 text-risk border-risk-dark/30',
    neutral: 'bg-primary-800 text-primary-300 border-primary-700',
    accent: 'bg-accent-900/30 text-accent-400 border-accent-700/50',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center rounded border font-medium ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </span>
  );
}
