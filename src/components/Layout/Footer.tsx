import { Shield, BookOpen, AlertTriangle, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      icon: BookOpen,
      label: 'Methodology',
      description: 'Learn about our approach',
    },
    {
      icon: AlertTriangle,
      label: 'Risk Disclosure',
      description: 'Important information',
    },
    {
      icon: Shield,
      label: 'Security',
      description: 'Data protection practices',
    },
    {
      icon: Mail,
      label: 'Contact',
      description: 'Get in touch',
    },
  ];

  return (
    <footer className="bg-primary-900 border-t border-primary-800 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {footerLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <button
                key={index}
                className="flex flex-col items-start p-4 rounded-lg hover:bg-primary-800/50 transition-colors group text-left"
              >
                <Icon className="w-5 h-5 text-accent-500 mb-2 group-hover:text-accent-400 transition-colors" />
                <span className="text-sm font-medium text-primary-200 mb-1">
                  {link.label}
                </span>
                <span className="text-xs text-primary-400">
                  {link.description}
                </span>
              </button>
            );
          })}
        </div>

        <div className="border-t border-primary-800 pt-8">
          <div className="bg-primary-800/30 border border-primary-700 rounded-lg p-4 mb-6">
            <h4 className="text-xs font-semibold text-primary-200 mb-2 flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2 text-risk" />
              Important Disclaimer
            </h4>
            <p className="text-xs text-primary-400 leading-relaxed">
              This platform provides AI-assisted market intelligence for educational and analytical purposes.
              All data, strategies, and insights are for informational use only and do not constitute financial advice.
              Past performance does not guarantee future results. Trading involves substantial risk of loss.
              Consult with qualified financial professionals before making investment decisions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-xs text-primary-500">
              © {currentYear} AlphaEdge AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <div className="px-2 py-1 bg-primary-800 rounded text-xs text-primary-400">
                Mock Data Mode
              </div>
              <div className="px-2 py-1 bg-primary-800 rounded text-xs text-primary-400">
                v1.0.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
