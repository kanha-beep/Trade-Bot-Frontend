import { useEffect, useState } from "react";
import {
  TrendingUp,
  Activity,
  BarChart2,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import Card from "../components/UI/Card";
import Badge from "../components/UI/Badge";
import { getPositions, getStatus } from "../components/api.js";

type ApiResponse = {
  results: string[];
  last_run: number;
};
export default function Strategies() {
  const [activeStrategy, setActiveStrategy] = useState<"crossover" | "vcp">(
    "crossover",
  );

  const crossoverResults = [
    {
      symbol: "RELIANCE",
      entry: "2,420.50",
      target: "2,580.00",
      stop: "2,360.00",
      rr: "2.7:1",
      volume: "High",
    },
    {
      symbol: "TCS",
      entry: "3,480.00",
      target: "3,680.00",
      stop: "3,380.00",
      rr: "2.0:1",
      volume: "Medium",
    },
    {
      symbol: "INFY",
      entry: "1,445.00",
      target: "1,560.00",
      stop: "1,395.00",
      rr: "2.3:1",
      volume: "High",
    },
    {
      symbol: "HDFCBANK",
      entry: "1,640.00",
      target: "1,780.00",
      stop: "1,580.00",
      rr: "2.3:1",
      volume: "Medium",
    },
  ];

  const vcpResults = [
    {
      symbol: "TITAN",
      entry: "3,245.00",
      target: "3,580.00",
      stop: "3,115.00",
      rr: "2.6:1",
      contraction: "78%",
    },
    {
      symbol: "BAJFINANCE",
      entry: "6,780.00",
      target: "7,480.00",
      stop: "6,510.00",
      rr: "2.6:1",
      contraction: "82%",
    },
    {
      symbol: "MARUTI",
      entry: "10,450.00",
      target: "11,680.00",
      stop: "10,050.00",
      rr: "3.1:1",
      contraction: "85%",
    },
  ];
  const [results, setResults] = useState<string[]>([]);
  const [lastRun, setLastRun] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <Badge variant="accent" size="sm">
            Rule-Based Strategies
          </Badge>
          <h1 className="text-3xl font-bold text-primary-50 mt-3 mb-3">
            Systematic Trading Strategies
          </h1>
          <p className="text-primary-300 max-w-3xl">
            Each strategy is built on quantifiable patterns with defined entry,
            exit, and risk parameters. These are not predictions, but
            probability-based frameworks for disciplined execution.
          </p>
        </div>

        <div className="flex space-x-2 mb-8 border-b border-primary-800">
          <button
            onClick={() => setActiveStrategy("crossover")}
            className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
              activeStrategy === "crossover"
                ? "border-accent-500 text-accent-400"
                : "border-transparent text-primary-400 hover:text-primary-200"
            }`}
          >
            Crossover Strategy
          </button>
          <button
            onClick={() => setActiveStrategy("vcp")}
            className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
              activeStrategy === "vcp"
                ? "border-accent-500 text-accent-400"
                : "border-transparent text-primary-400 hover:text-primary-200"
            }`}
          >
            VCP Strategy
          </button>
        </div>

        {activeStrategy === "crossover" && (
          <div className="space-y-8 animate-fade-in">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent-900/20 rounded-lg">
                  <TrendingUp className="w-7 h-7 text-accent-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-primary-50 mb-3">
                    Moving Average Crossover Strategy
                  </h2>
                  <p className="text-primary-300 leading-relaxed mb-4">
                    This strategy identifies momentum shifts when short-term
                    moving averages cross above longer-term averages, signaling
                    potential trend changes. It combines price action with
                    volume confirmation to filter high-probability setups.
                  </p>

                  <div className="bg-primary-800/30 border border-primary-700 rounded-lg p-4 mb-4">
                    <h3 className="text-sm font-semibold text-primary-200 mb-3">
                      Optimal Market Conditions
                    </h3>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-primary-300">
                          Trending markets with clear direction
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-primary-300">
                          Increasing volume on breakouts
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-primary-300">
                          Strong sector momentum
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-primary-100 mb-6">
                Strategy Logic Flow
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  {
                    icon: Activity,
                    title: "Scan",
                    desc: "Monitor 50 & 200 day MAs across universe",
                  },
                  {
                    icon: TrendingUp,
                    title: "Identify",
                    desc: "Flag bullish crossovers with volume surge",
                  },
                  {
                    icon: BarChart2,
                    title: "Validate",
                    desc: "Confirm with RSI and trend strength",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Signal",
                    desc: "Generate entry with R:R parameters",
                  },
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="relative">
                      <div className="bg-primary-800/50 rounded-lg p-4 text-center h-full">
                        <div className="inline-flex p-2 bg-accent-900/20 rounded-md mb-3">
                          <Icon className="w-5 h-5 text-accent-500" />
                        </div>
                        <h4 className="text-sm font-semibold text-primary-100 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-xs text-primary-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                      {index < 3 && (
                        <ArrowRight className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 w-4 h-4 text-primary-600" />
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card hover={false}>
              <h3 className="text-lg font-semibold text-primary-100 mb-4">
                Sample Filtered Results
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-primary-800">
                      <th className="text-left py-3 px-4 text-xs font-semibold text-primary-400 uppercase">
                        Symbol
                      </th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase">
                        Entry
                      </th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase">
                        Target
                      </th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase">
                        Stop Loss
                      </th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase">
                        R:R Ratio
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-primary-400 uppercase">
                        Volume
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary-800">
                    {crossoverResults.map((result, index) => (
                      <tr
                        key={index}
                        className="hover:bg-primary-800/30 transition-colors"
                      >
                        <td className="py-4 px-4 font-semibold text-primary-100">
                          {result.symbol}
                        </td>
                        <td className="py-4 px-4 text-right text-primary-200">
                          ₹{result.entry}
                        </td>
                        <td className="py-4 px-4 text-right text-success">
                          ₹{result.target}
                        </td>
                        <td className="py-4 px-4 text-right text-risk">
                          ₹{result.stop}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <Badge variant="success" size="sm">
                            {result.rr}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <Badge
                            variant={
                              result.volume === "High" ? "accent" : "neutral"
                            }
                            size="sm"
                          >
                            {result.volume}
                          </Badge>
                        </td>
                      </tr>
                    ))}

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
                    {/* <div style={{ padding: 20 }}>
                      <h2>VCP Stocks</h2>
                      {error && <p style={{ color: "red" }}>{error}</p>}
                      <p>
                        Last Scan:{" "}
                        {lastRun
                          ? new Date(lastRun * 1000).toLocaleString()
                          : "—"}
                      </p>
                      {results.length === 0 ? (
                        <p>No VCP stocks found</p>
                      ) : (
                        <ul>
                          {results.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      )}
                    </div> */}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="bg-risk-light/10 border border-risk-dark/30 rounded-lg p-5">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-risk flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-primary-200 mb-2">
                    Risk Considerations
                  </h4>
                  <p className="text-sm text-primary-300 leading-relaxed">
                    This strategy performs best in trending markets. During
                    choppy, range-bound conditions, false signals may occur.
                    Always respect stop losses and avoid over-leveraging.
                    Historical performance does not guarantee future results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeStrategy === "vcp" && (
          <div className="space-y-8 animate-fade-in">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent-900/20 rounded-lg">
                  <Activity className="w-7 h-7 text-accent-500" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-primary-50 mb-3">
                    Volatility Contraction Pattern (VCP)
                  </h2>
                  <p className="text-primary-300 leading-relaxed mb-4">
                    VCP identifies stocks undergoing a series of tightening
                    price contractions, indicating accumulation by informed
                    participants. This pattern often precedes significant
                    breakouts when accompanied by volume expansion and relative
                    strength.
                  </p>

                  <div className="bg-primary-800/30 border border-primary-700 rounded-lg p-4 mb-4">
                    <h3 className="text-sm font-semibold text-primary-200 mb-3">
                      Optimal Market Conditions
                    </h3>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-primary-300">
                          Consolidation after uptrend
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-primary-300">
                          Declining volatility over time
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-primary-300">
                          Strong fundamentals
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-primary-100 mb-6">
                Strategy Logic Flow
              </h3>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  {
                    icon: TrendingUp,
                    title: "Identify",
                    desc: "Locate stocks in uptrend with consolidation",
                  },
                  {
                    icon: Activity,
                    title: "Measure",
                    desc: "Track volatility contraction percentage",
                  },
                  {
                    icon: BarChart2,
                    title: "Confirm",
                    desc: "Verify volume drying up then expanding",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Execute",
                    desc: "Enter on breakout with volume",
                  },
                ].map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="relative">
                      <div className="bg-primary-800/50 rounded-lg p-4 text-center h-full">
                        <div className="inline-flex p-2 bg-accent-900/20 rounded-md mb-3">
                          <Icon className="w-5 h-5 text-accent-500" />
                        </div>
                        <h4 className="text-sm font-semibold text-primary-100 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-xs text-primary-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                      {index < 3 && (
                        <ArrowRight className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 w-4 h-4 text-primary-600" />
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card hover={false}>
              <h3 className="text-lg font-semibold text-primary-100 mb-4">
                Sample Filtered Results
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-primary-800">
                      <th className="text-left py-3 px-4 text-xs font-semibold text-primary-400 uppercase">
                        Symbol
                      </th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase">
                        Entry
                      </th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase">
                        Target
                      </th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase">
                        Stop Loss
                      </th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase">
                        R:R Ratio
                      </th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-primary-400 uppercase">
                        Contraction
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary-800">
                    {vcpResults.map((result, index) => (
                      <tr
                        key={index}
                        className="hover:bg-primary-800/30 transition-colors"
                      >
                        <td className="py-4 px-4 font-semibold text-primary-100">
                          {result.symbol}
                        </td>
                        <td className="py-4 px-4 text-right text-primary-200">
                          ₹{result.entry}
                        </td>
                        <td className="py-4 px-4 text-right text-success">
                          ₹{result.target}
                        </td>
                        <td className="py-4 px-4 text-right text-risk">
                          ₹{result.stop}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <Badge variant="success" size="sm">
                            {result.rr}
                          </Badge>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <Badge variant="accent" size="sm">
                            {result.contraction}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="bg-risk-light/10 border border-risk-dark/30 rounded-lg p-5">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-risk flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-primary-200 mb-2">
                    Risk Considerations
                  </h4>
                  <p className="text-sm text-primary-300 leading-relaxed">
                    VCP patterns require patience and precise execution. False
                    breakouts can occur, especially in weak market conditions.
                    This strategy is most effective when combined with
                    fundamental strength and sector leadership. Position sizing
                    and risk management are critical.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
