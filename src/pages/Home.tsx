import {
  TrendingUp,
  Filter,
  Brain,
  Shield,
  BarChart3,
  Activity,
  Target,
} from "lucide-react";
import Card from "../components/UI/Card";
import Badge from "../components/UI/Badge";
import MetricCard from "../components/UI/MetricCard";
import MiniChart from "../components/UI/MiniChart";
import { getPositions, getStatus } from "../components/api.js";
import { useState } from "react";

type ApiResponse = {
  results: string[];
  last_run: number;
};
export default function Home() {
  const capabilities = [
    {
      icon: Filter,
      title: "Strategy-Based Filtering",
      description:
        "Rule-driven stock screening based on proven technical patterns and market structure.",
    },
    {
      icon: Brain,
      title: "AI Market Intelligence",
      description:
        "Machine learning models interpret market regime and probability-weighted outcomes.",
    },
    {
      icon: BarChart3,
      title: "Technical + Fundamental",
      description:
        "Convergence analysis combining price action with company fundamentals.",
    },
    {
      icon: Shield,
      title: "Risk-Aware Framework",
      description:
        "Built-in risk parameters and position sizing guidance for disciplined execution.",
    },
  ];

  const mockMarketData = [45, 52, 48, 55, 58, 54, 60, 58, 62, 65, 63, 68];
  const mockPerformanceData = [
    100, 102, 98, 105, 108, 106, 110, 115, 112, 118, 120, 125,
  ];

  const topStocks = [
    {
      symbol: "RELIANCE",
      price: "2,456.30",
      change: "+2.4%",
      signal: "Crossover",
      strength: 8.2,
    },
    {
      symbol: "TCS",
      price: "3,542.80",
      change: "+1.8%",
      signal: "VCP",
      strength: 7.8,
    },
    {
      symbol: "INFY",
      price: "1,456.90",
      change: "-0.5%",
      signal: "Crossover",
      strength: 7.5,
    },
    {
      symbol: "HDFC",
      price: "1,678.20",
      change: "+3.2%",
      signal: "VCP",
      strength: 8.5,
    },
    {
      symbol: "ICICI",
      price: "945.60",
      change: "+1.2%",
      signal: "Crossover",
      strength: 7.2,
    },
  ];
  const [results, setResults] = useState<string[]>([]);
  const [lastRun, setLastRun] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useState(() => {
    const fetchData = async () => {
      try {
        const res = await getPositions();
        const data = res.data as ApiResponse;

        setResults(data.results || []);
        setLastRun(data.last_run);
        setError(null);
      } catch {
        // setError("Failed to fetch data");
      }
    };

    fetchData();
    const id = setInterval(fetchData, 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="animate-fade-in">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="accent" size="sm">
            Institutional-Grade Platform
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-50 mt-4 mb-6 tracking-tight">
            AI-Driven Market Intelligence
            <br />
            <span className="text-accent-500">
              for High-Probability Decisions
            </span>
          </h1>
          <p className="text-lg text-primary-300 max-w-3xl mx-auto leading-relaxed">
            A rule-based platform combining technical analysis, fundamental
            research, and artificial intelligence to identify high-conviction
            opportunities while managing risk systematically.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card key={index} className="text-center">
                <div className="inline-flex p-3 bg-accent-900/20 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-accent-500" />
                </div>
                <h3 className="text-base font-semibold text-primary-100 mb-2">
                  {capability.title}
                </h3>
                <p className="text-sm text-primary-400 leading-relaxed">
                  {capability.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary-50 mb-2">
            Market Overview
          </h2>
          <p className="text-sm text-primary-400">
            Real-time indicators and performance metrics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <MetricCard
            icon={Activity}
            label="Market Regime"
            value="Bullish"
            subtitle="Trend strength: Strong"
          />
          <MetricCard
            icon={TrendingUp}
            label="Active Signals"
            value="247"
            change={{ value: "12.3%", positive: true }}
          />
          <MetricCard
            icon={Target}
            label="Avg. Signal Strength"
            value="7.8"
            subtitle="Out of 10"
          />
          <MetricCard
            icon={BarChart3}
            label="Filtered Stocks"
            value="1,847"
            subtitle="NSE + BSE"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-primary-100">
                Market Trend
              </h3>
              <Badge variant="success" size="sm">
                +8.2%
              </Badge>
            </div>
            <div className="mb-4">
              <MiniChart data={mockMarketData} positive={true} height={120} />
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-primary-800">
              <div>
                <p className="text-xs text-primary-500 mb-1">High</p>
                <p className="text-sm font-semibold text-primary-200">68.2</p>
              </div>
              <div>
                <p className="text-xs text-primary-500 mb-1">Low</p>
                <p className="text-sm font-semibold text-primary-200">45.0</p>
              </div>
              <div>
                <p className="text-xs text-primary-500 mb-1">Current</p>
                <p className="text-sm font-semibold text-primary-200">68.0</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-primary-100">
                Strategy Performance
              </h3>
              <Badge variant="success" size="sm">
                +25%
              </Badge>
            </div>
            <div className="mb-4">
              <MiniChart
                data={mockPerformanceData}
                positive={true}
                height={120}
              />
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-primary-800">
              <div>
                <p className="text-xs text-primary-500 mb-1">30 Days</p>
                <p className="text-sm font-semibold text-success">+12.5%</p>
              </div>
              <div>
                <p className="text-xs text-primary-500 mb-1">90 Days</p>
                <p className="text-sm font-semibold text-success">+18.7%</p>
              </div>
              <div>
                <p className="text-xs text-primary-500 mb-1">YTD</p>
                <p className="text-sm font-semibold text-success">+25.2%</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary-50 mb-2">
            Today's Shortlist
          </h2>
          <p className="text-sm text-primary-400">
            High-conviction opportunities based on active strategies
          </p>
        </div>

        <Card hover={false}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary-800">
                  <th className="text-left py-3 px-4 text-xs font-semibold text-primary-400 uppercase tracking-wider">
                    Symbol
                  </th>
                  <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase tracking-wider">
                    Change
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-primary-400 uppercase tracking-wider">
                    Signal
                  </th>
                  <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase tracking-wider">
                    Strength
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary-800">
                {results.map((result, index) => (
                  <tr
                    key={index}
                    className="hover:bg-primary-800/30 transition-colors"
                  >
                    <td className="py-4 px-4 font-semibold text-primary-100">
                      {result}
                    </td>
                  </tr>
                ))}
                {topStocks.map((stock, index) => (
                  <tr
                    key={index}
                    className="hover:bg-primary-800/30 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <span className="font-semibold text-primary-100">
                        {stock.symbol}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right text-primary-200 font-medium">
                      ₹{stock.price}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span
                        className={
                          stock.change.startsWith("+")
                            ? "text-success"
                            : "text-risk"
                        }
                      >
                        {stock.change}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant="accent" size="sm">
                        {stock.signal}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <div className="w-16 bg-primary-800 rounded-full h-1.5">
                          <div
                            className="bg-accent-500 h-1.5 rounded-full"
                            style={{ width: `${(stock.strength / 10) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-primary-200">
                          {stock.strength}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="mt-4 p-4 bg-primary-900/50 border border-primary-800 rounded-lg">
          <p className="text-xs text-primary-400 leading-relaxed">
            <span className="font-semibold text-primary-300">
              Data Freshness:
            </span>{" "}
            Market data updated every 5 minutes during trading hours. Signal
            strength is calculated using proprietary algorithms combining
            technical indicators, volume analysis, and market structure.
          </p>
        </div>
      </section>
    </div>
  );
}
