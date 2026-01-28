import { TrendingUp } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Dashboard' },
    { id: 'strategies', label: 'Strategies' },
    { id: 'fundamental', label: 'Fundamental' },
    { id: 'news', label: 'News & Insights' },
  ];

  return (
    <header className="bg-primary-900 border-b border-primary-800 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => onNavigate?.('home')}
            className="flex items-center space-x-2 group"
          >
            <div className="bg-accent-600 p-2 rounded-md group-hover:bg-accent-700 transition-colors">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-primary-50 tracking-tight">
              AlphaEdge AI
            </span>
          </button>

          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate?.(item.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-primary-800 text-accent-400'
                    : 'text-primary-300 hover:text-primary-100 hover:bg-primary-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-primary-800 rounded-md">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-xs text-primary-300 font-medium">Live</span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden border-t border-primary-800">
        <nav className="flex overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex-1 px-4 py-3 text-xs font-medium transition-all duration-200 border-b-2 ${
                currentPage === item.id
                  ? 'border-accent-500 text-accent-400 bg-primary-800/30'
                  : 'border-transparent text-primary-400 hover:text-primary-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
