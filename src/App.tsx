import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AIDevelopment from "./pages/AIDevelopment";
import GameDevelopment from "./pages/GameDevelopment";
import MobileApps from "./pages/MobileApps";
import CloudSolutions from "./pages/CloudSolutions";
import ECommerce from "./pages/ECommerce";
import IoT from "./pages/IoT";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/ai-development" element={<AIDevelopment />} />
          <Route path="/services/game-development" element={<GameDevelopment />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/ecommerce" element={<ECommerce />} />
          <Route path="/services/iot" element={<IoT />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
