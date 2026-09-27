import { useEffect, useState } from "react";
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

type PageId = "home" | "category" | "product" | "review" | "compare" | "about";

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
  const [page, setPage] = useState<PageId>(getRoute);

  useEffect(() => {
    const onHashChange = () => {
      setPage(getRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const renderPage = () => {
    switch (page) {
      case "category":
        return <CategoryPage />;
      case "product":
        return <ProductPage />;
      case "review":
        return <ReviewPage />;
      case "compare":
        return <ComparePage />;
      case "about":
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">{renderPage()}</main>
        <NewsletterCTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
