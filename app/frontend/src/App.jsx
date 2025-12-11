import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import DoctorsPage from "./pages/DoctorsPage";
import BookingPage from "./pages/BookingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import VisionTestPage from "./pages/VisionTestPage";
import InsurancePage from "./pages/InsurancePage";
import GalleryPage from "./pages/GalleryPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/doctors" element={<DoctorsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/book-appointment" element={<BookingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blogs" element={<BlogPage />} />
                <Route path="/vision-test" element={<VisionTestPage />} />
                <Route path="/insurance" element={<InsurancePage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
