import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PortfolioBebio from "./pages/PortfolioBebio";
import PortfolioNaryBaby from "./pages/PortfolioNaryBaby";
import WinningProject from "./pages/WinningProject";
import AboutUs from "./pages/AboutUs";
import Insight from "./pages/Insight";
import InsightDetail from "./pages/InsightDetail";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/winning-project" element={<WinningProject />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/insight/:slug" element={<InsightDetail />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/portfolio/bebio" element={<PortfolioBebio />} />
          <Route path="/portfolio/nary-babywear" element={<PortfolioNaryBaby />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
