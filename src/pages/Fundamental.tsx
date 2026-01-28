import { Building2, TrendingUp, DollarSign, PieChart, BarChart3, Activity } from 'lucide-react';
import Card from '../components/UI/Card';
import Badge from '../components/UI/Badge';
import MetricCard from '../components/UI/MetricCard';

export default function Fundamental() {
  const sampleCompany = {
    name: 'Reliance Industries',
    symbol: 'RELIANCE',
    sector: 'Energy & Petrochemicals',
    marketCap: '₹17,85,432 Cr',
    price: '2,456.30',
    change: '+2.4%',
  };

  const financialMetrics = [
    { label: 'Revenue (TTM)', value: '₹7,92,755 Cr', growth: '+12.4%', positive: true },
    { label: 'Net Profit (TTM)', value: '₹67,845 Cr', growth: '+8.7%', positive: true },
    { label: 'EPS (TTM)', value: '₹101.25', growth: '+9.2%', positive: true },
    { label: 'ROE', value: '9.8%', growth: '+0.4%', positive: true },
    { label: 'Debt/Equity', value: '0.42', growth: '-0.08', positive: true },
    { label: 'Current Ratio', value: '0.87', growth: '+0.12', positive: true },
  ];

  const valuationMetrics = [
    { label: 'P/E Ratio', value: '24.3', benchmark: 'Industry: 28.5', status: 'undervalued' },
    { label: 'P/B Ratio', value: '2.4', benchmark: 'Industry: 3.2', status: 'undervalued' },
    { label: 'Div Yield', value: '0.38%', benchmark: 'Industry: 0.45%', status: 'neutral' },
    { label: 'PEG Ratio', value: '1.8', benchmark: 'Fair: <2.0', status: 'neutral' },
  ];

  const sectorComparison = [
    { company: 'RELIANCE', roe: 9.8, pe: 24.3, growth: 12.4, score: 8.2 },
    { company: 'ONGC', roe: 12.5, pe: 18.7, growth: 8.9, score: 7.8 },
    { company: 'IOC', roe: 6.2, pe: 15.3, growth: 5.4, score: 6.5 },
    { company: 'BPCL', roe: 8.9, pe: 21.2, growth: 9.8, score: 7.3 },
  ];

  const growthData = [
    { period: '2020', revenue: 539, profit: 39 },
    { period: '2021', revenue: 486, profit: 53 },
    { period: '2022', revenue: 721, profit: 60 },
    { period: '2023', revenue: 792, profit: 67 },
    { period: '2024E', revenue: 875, profit: 74 },
  ];

  return (
    <div className="animate-fade-in">
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <Badge variant="accent" size="sm">Long-Term Analysis</Badge>
          <h1 className="text-3xl font-bold text-primary-50 mt-3 mb-3">
            Fundamental Analysis
          </h1>
          <p className="text-primary-300 max-w-3xl">
            Quantitative assessment of company strength, financial health, and valuation metrics
            to support informed long-term investment decisions.
          </p>
        </div>

        <Card className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-start space-x-4 mb-4 md:mb-0">
              <div className="p-3 bg-accent-900/20 rounded-lg">
                <Building2 className="w-7 h-7 text-accent-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-50">{sampleCompany.name}</h2>
                <div className="flex items-center space-x-3 mt-2">
                  <Badge variant="neutral" size="sm">{sampleCompany.symbol}</Badge>
                  <span className="text-sm text-primary-400">{sampleCompany.sector}</span>
                </div>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-3xl font-bold text-primary-100">₹{sampleCompany.price}</p>
              <p className="text-success font-medium mt-1">{sampleCompany.change}</p>
              <p className="text-xs text-primary-500 mt-1">MCap: {sampleCompany.marketCap}</p>
            </div>
          </div>
        </Card>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary-50 mb-2">Company Strength Overview</h2>
          <p className="text-sm text-primary-400 mb-6">Key financial indicators and performance metrics</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <MetricCard
              icon={TrendingUp}
              label="Overall Score"
              value="8.2"
              subtitle="Out of 10"
            />
            <MetricCard
              icon={Activity}
              label="Growth Rating"
              value="Strong"
              subtitle="Above sector avg"
            />
            <MetricCard
              icon={DollarSign}
              label="Profitability"
              value="Healthy"
              subtitle="Consistent margins"
            />
            <MetricCard
              icon={PieChart}
              label="Financial Health"
              value="Stable"
              subtitle="Low debt burden"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <h3 className="text-lg font-semibold text-primary-100 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2 text-accent-500" />
              Financial Metrics
            </h3>
            <div className="space-y-3">
              {financialMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-primary-800/30 rounded-lg">
                  <span className="text-sm text-primary-300">{metric.label}</span>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-primary-100 mr-3">{metric.value}</span>
                    <Badge
                      variant={metric.positive ? 'success' : 'risk'}
                      size="sm"
                    >
                      {metric.growth}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-primary-100 mb-4 flex items-center">
              <PieChart className="w-5 h-5 mr-2 text-accent-500" />
              Valuation Metrics
            </h3>
            <div className="space-y-3">
              {valuationMetrics.map((metric, index) => (
                <div key={index} className="p-3 bg-primary-800/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary-300">{metric.label}</span>
                    <span className="text-sm font-semibold text-primary-100">{metric.value}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary-500">{metric.benchmark}</span>
                    <Badge
                      variant={metric.status === 'undervalued' ? 'success' : 'neutral'}
                      size="sm"
                    >
                      {metric.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="mb-8">
          <h3 className="text-lg font-semibold text-primary-100 mb-4">Revenue & Profit Growth Trend</h3>
          <div className="overflow-x-auto">
            <div className="flex items-end space-x-8 min-w-max pb-4">
              {growthData.map((data, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex items-end space-x-2 mb-2">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-12 bg-accent-600 rounded-t transition-all duration-300 hover:bg-accent-500"
                        style={{ height: `${(data.revenue / 10)}px` }}
                      ></div>
                      <span className="text-xs text-primary-400 mt-2">{data.revenue}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div
                        className="w-12 bg-success rounded-t transition-all duration-300 hover:bg-success-dark"
                        style={{ height: `${(data.profit / 0.8)}px` }}
                      ></div>
                      <span className="text-xs text-primary-400 mt-2">{data.profit}</span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-primary-300 mt-2">{data.period}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-primary-800">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent-600 rounded"></div>
              <span className="text-xs text-primary-400">Revenue (₹ Thousands Cr)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded"></div>
              <span className="text-xs text-primary-400">Net Profit (₹ Thousands Cr)</span>
            </div>
          </div>
        </Card>

        <Card hover={false}>
          <h3 className="text-lg font-semibold text-primary-100 mb-4">Sector Comparison</h3>
          <p className="text-sm text-primary-400 mb-6">Comparative analysis within the Energy & Petrochemicals sector</p>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary-800">
                  <th className="text-left py-3 px-4 text-xs font-semibold text-primary-400 uppercase">Company</th>
                  <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase">ROE %</th>
                  <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase">P/E Ratio</th>
                  <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase">Growth %</th>
                  <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase">Overall Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary-800">
                {sectorComparison.map((company, index) => (
                  <tr key={index} className={`hover:bg-primary-800/30 transition-colors ${index === 0 ? 'bg-accent-900/10' : ''}`}>
                    <td className="py-4 px-4">
                      <span className={`font-semibold ${index === 0 ? 'text-accent-400' : 'text-primary-100'}`}>
                        {company.company}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right text-primary-200">{company.roe}%</td>
                    <td className="py-4 px-4 text-right text-primary-200">{company.pe}</td>
                    <td className="py-4 px-4 text-right">
                      <span className="text-success">+{company.growth}%</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <div className="w-16 bg-primary-800 rounded-full h-1.5">
                          <div
                            className="bg-accent-500 h-1.5 rounded-full"
                            style={{ width: `${(company.score / 10) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-primary-200">{company.score}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="mt-6 p-4 bg-primary-900/50 border border-primary-800 rounded-lg">
          <p className="text-xs text-primary-400 leading-relaxed">
            <span className="font-semibold text-primary-300">Methodology Note:</span> Fundamental scores are calculated using
            a proprietary weighted model considering growth, profitability, valuation, and financial health metrics.
            All data is illustrative and for demonstration purposes. Actual investment decisions should involve
            comprehensive due diligence and professional consultation.
          </p>
        </div>
      </section>
    </div>
  );
}
