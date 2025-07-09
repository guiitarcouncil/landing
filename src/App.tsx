import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CookieConsent from "@/components/ui/cookie-consent"
import { Analytics } from "@vercel/analytics/react"
import ScrollToTop from "./pages/ScrollToTop"
import Index from "./pages/Index"
import About from "./pages/About"
import Funding from "./pages/Funding"
import Events from "./pages/Events"
import Contact from "./pages/Contact"
import Careers from "./pages/Careers"
import NotFound from "./pages/NotFound"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsConditions from "./pages/TermsConditions"
import Resources  from "./pages/resources"
// import Resources from "./pages/Resources" // ✅ Fixed import

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/funding" element={<Funding />} />
            {/* <Route path="/resources" element={<Resources />} /> */}
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
             <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<Resources />} />
           
            {/* <Route path="/resources/:slug" element={<Resources />} /> ✅ Added dynamic route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
        <Analytics />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
