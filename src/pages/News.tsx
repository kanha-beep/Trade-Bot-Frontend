import { useState } from 'react';
import { Newspaper, TrendingUp, Building2, Globe, Clock } from 'lucide-react';
import Card from '../components/UI/Card';
import Badge from '../components/UI/Badge';

type NewsCategory = 'all' | 'macro' | 'sector' | 'company';
type Sentiment = 'positive' | 'neutral' | 'negative';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  category: 'macro' | 'sector' | 'company';
  sentiment: Sentiment;
  timestamp: string;
  source: string;
  tags: string[];
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>('all');

  const newsData: NewsItem[] = [
    {
      id: 1,
      title: 'RBI Maintains Repo Rate at 6.5%, Signals Neutral Stance',
      summary: 'The Reserve Bank of India kept the benchmark lending rate unchanged, focusing on growth while monitoring inflation dynamics.',
      category: 'macro',
      sentiment: 'neutral',
      timestamp: '2 hours ago',
      source: 'Economic Times',
      tags: ['RBI', 'Policy', 'Rates'],
    },
    {
      id: 2,
      title: 'IT Sector Shows Strong Q4 Revenue Growth Amid Global Demand',
      summary: 'Major IT companies report double-digit growth driven by cloud adoption and digital transformation projects.',
      category: 'sector',
      sentiment: 'positive',
      timestamp: '4 hours ago',
      source: 'Business Standard',
      tags: ['IT', 'Earnings', 'Growth'],
    },
    {
      id: 3,
      title: 'Reliance Industries Announces Expansion in Renewable Energy',
      summary: 'RIL commits ₹75,000 crore investment towards solar and hydrogen projects over the next three years.',
      category: 'company',
      sentiment: 'positive',
      timestamp: '6 hours ago',
      source: 'Mint',
      tags: ['RELIANCE', 'Energy', 'Sustainability'],
    },
    {
      id: 4,
      title: 'FII Inflows Strengthen Rupee Against Dollar',
      summary: 'Foreign institutional investors continue equity purchases, supporting currency appreciation and market sentiment.',
      category: 'macro',
      sentiment: 'positive',
      timestamp: '8 hours ago',
      source: 'Bloomberg Quint',
      tags: ['FII', 'Currency', 'Markets'],
    },
    {
      id: 5,
      title: 'Banking Sector NPAs Decline to Decade Low',
      summary: 'Improved asset quality and resolution mechanisms drive non-performing asset ratios down across public and private banks.',
      category: 'sector',
      sentiment: 'positive',
      timestamp: '10 hours ago',
      source: 'Financial Express',
      tags: ['Banking', 'NPA', 'Credit'],
    },
    {
      id: 6,
      title: 'TCS Wins Multi-Year Digital Transformation Contract',
      summary: 'Tata Consultancy Services secures major engagement with European financial institution worth $500 million.',
      category: 'company',
      sentiment: 'positive',
      timestamp: '12 hours ago',
      source: 'Reuters',
      tags: ['TCS', 'Contract', 'Digital'],
    },
    {
      id: 7,
      title: 'Manufacturing PMI Indicates Moderate Expansion',
      summary: 'Latest purchasing managers index data suggests steady industrial activity with new orders showing resilience.',
      category: 'macro',
      sentiment: 'neutral',
      timestamp: '14 hours ago',
      source: 'Economic Times',
      tags: ['PMI', 'Manufacturing', 'Economy'],
    },
    {
      id: 8,
      title: 'Pharma Exports Face Headwinds from Regulatory Scrutiny',
      summary: 'Increased compliance requirements in key markets challenge Indian pharmaceutical companies operating margins.',
      category: 'sector',
      sentiment: 'negative',
      timestamp: '18 hours ago',
      source: 'Business Line',
      tags: ['Pharma', 'Exports', 'Regulation'],
    },
  ];

  const filteredNews = activeCategory === 'all'
    ? newsData
    : newsData.filter(item => item.category === activeCategory);

  const getSentimentColor = (sentiment: Sentiment) => {
    switch (sentiment) {
      case 'positive':
        return 'success';
      case 'negative':
        return 'risk';
      default:
        return 'neutral';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'macro':
        return Globe;
      case 'sector':
        return TrendingUp;
      case 'company':
        return Building2;
      default:
        return Newspaper;
    }
  };

  return (
    <div className="animate-fade-in">
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <Badge variant="accent" size="sm">Market Intelligence</Badge>
          <h1 className="text-3xl font-bold text-primary-50 mt-3 mb-3">
            News & Insights
          </h1>
          <p className="text-primary-300 max-w-3xl">
            Curated market news and analysis categorized by impact level. Information is presented for context,
            not as actionable trading signals.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'all', label: 'All News', icon: Newspaper },
            { id: 'macro', label: 'Macro', icon: Globe },
            { id: 'sector', label: 'Sector', icon: TrendingUp },
            { id: 'company', label: 'Company', icon: Building2 },
          ].map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as NewsCategory)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-accent-600 text-white'
                    : 'bg-primary-800 text-primary-300 hover:bg-primary-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{category.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {filteredNews.map((news) => {
              const CategoryIcon = getCategoryIcon(news.category);
              return (
                <Card key={news.id} className="hover:border-accent-700">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary-800 rounded-md flex-shrink-0">
                      <CategoryIcon className="w-5 h-5 text-accent-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="text-base font-semibold text-primary-100 mb-2 leading-snug">
                            {news.title}
                          </h3>
                        </div>
                        <Badge
                          variant={getSentimentColor(news.sentiment)}
                          size="sm"
                        >
                          {news.sentiment}
                        </Badge>
                      </div>
                      <p className="text-sm text-primary-300 leading-relaxed mb-3">
                        {news.summary}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-primary-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{news.timestamp}</span>
                        </div>
                        <span>•</span>
                        <span>{news.source}</span>
                        <span>•</span>
                        <div className="flex flex-wrap gap-1">
                          {news.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-0.5 bg-primary-800 rounded text-primary-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="space-y-6">
            <Card>
              <h3 className="text-lg font-semibold text-primary-100 mb-4">Sentiment Overview</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-success-light/10 border border-success-dark/30 rounded-lg">
                  <span className="text-sm text-primary-300">Positive</span>
                  <span className="text-lg font-bold text-success">
                    {newsData.filter(n => n.sentiment === 'positive').length}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary-800/50 border border-primary-700 rounded-lg">
                  <span className="text-sm text-primary-300">Neutral</span>
                  <span className="text-lg font-bold text-primary-200">
                    {newsData.filter(n => n.sentiment === 'neutral').length}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-risk-light/10 border border-risk-dark/30 rounded-lg">
                  <span className="text-sm text-primary-300">Negative</span>
                  <span className="text-lg font-bold text-risk">
                    {newsData.filter(n => n.sentiment === 'negative').length}
                  </span>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-primary-100 mb-4">Category Breakdown</h3>
              <div className="space-y-3">
                {[
                  { label: 'Macro', count: newsData.filter(n => n.category === 'macro').length, icon: Globe },
                  { label: 'Sector', count: newsData.filter(n => n.category === 'sector').length, icon: TrendingUp },
                  { label: 'Company', count: newsData.filter(n => n.category === 'company').length, icon: Building2 },
                ].map((cat, index) => {
                  const Icon = cat.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-primary-800/30 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-accent-500" />
                        <span className="text-sm text-primary-300">{cat.label}</span>
                      </div>
                      <span className="text-sm font-semibold text-primary-100">{cat.count}</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            <div className="bg-primary-900/50 border border-primary-800 rounded-lg p-4">
              <p className="text-xs text-primary-400 leading-relaxed">
                News items are aggregated from trusted sources and analyzed for sentiment using natural language processing.
                This information is contextual and should not be the sole basis for trading decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
