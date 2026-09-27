import { useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import { HomePage } from "@/pages/HomePage";
import { CategoryPage } from "@/pages/CategoryPage";
import { ProductPage } from "@/pages/ProductPage";
import { ReviewPage } from "@/pages/ReviewPage";
import { ComparePage } from "@/pages/ComparePage";
import { AboutPage } from "@/pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollObserver } from "@/shared/ScrollObserver";
import { CatalogPage } from "@/pages/CatalogPage"; // Nova importação

type PageId = "home" | "category" | "product" | "review" | "compare" | "about";

// Função para mapear hash para página (mantida para compatibilidade)
function getRoute(): PageId {
  const hash = window.location.hash.replace(/^#\/?/, "");
  const map: Record<string, PageId> = {
    "": "home",
    home: "home",
    category: "category",
    product: "product",
    review: "review",
    compare: "compare",
    about: "about",
  };
  return map[hash] ?? "home";
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen flex-col bg-background">
          <Header />
          <ScrollObserver />
          <main className="flex-1">
            <Routes>
              <Route path="/category" element={<CategoryPage />} />
              <Route path="/catalog" element={<CatalogPage />} />{" "}
              {/* Nova rota */}
              <Route path="/products/:slug" element={<ProductPage />} />
              <Route path="/review" element={<ReviewPage />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <NewsletterCTA />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
