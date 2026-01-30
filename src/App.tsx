import { useState, useEffect } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import Strategies from "./pages/Strategies";
import Fundamental from "./pages/Fundamental";
import News from "./pages/News";
import { getPositions } from "./components/api";
type VcpResult = {
  symbol: string;
  isVcp: boolean;
};
type ApiResponse = {
  results: VcpResult[];
  last_run: number;
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [results, setResults] = useState<VcpResult[]>([]);
  const [lastRun, setLastRun] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPositions();
        const data = res.data as ApiResponse;
        console.log("data:", data.results);
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

  const renderPage = () => {
    switch (currentPage) {
      case "strategies":
        return <Strategies />;
      case "fundamental":
        return <Fundamental />;
      case "news":
        return <News />;
      default:
        return <Home />;
    }
  };
  // console.log("all stocks: ", results);
  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
