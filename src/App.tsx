import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ai-development-services-company" element={<AIDevelopment />} />
            <Route path="/game-development-company" element={<GameDevelopment />} />
            <Route path="/mobile-app-development" element={<MobileApps />} />
            <Route path="/cloud-solutions-services-company" element={<CloudSolutions />} />
            <Route path="/ecommerce-solutions-services-company" element={<ECommerce />} />
            <Route path="/iot-solutions-services-company" element={<IoT />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
