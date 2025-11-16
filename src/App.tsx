import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Enquiry from "./pages/Enquiry";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";
// import { ThemeProvider } from "./components/ui/themeContext";
import LoadingSpinner from "./components/LoadingSpinner";
import { Analytics } from '@vercel/analytics/react';

import { ThemeProvider } from "./components/ui/themeContext";

const queryClient = new QueryClient();


const App = () => (
  <ThemeProvider>
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <LoadingSpinner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/enquiry" element={<Enquiry />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </LanguageProvider>
    <Analytics />
  </QueryClientProvider>
  </ThemeProvider>
  
);

export default App;
