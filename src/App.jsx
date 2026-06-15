import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Playground from "./components/Playground";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import TransitionLayer from "./components/TransitionLayer";
import CaseStudy from "./components/CaseStudy";

function App() {
  const [activeTab, setActiveTab] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") || "work";
  });
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("id") || null;
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (tab, scrollToId = null, caseStudyId = null) => {
    if (tab === "contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    
    if (tab === activeTab && caseStudyId === activeCaseStudyId) {
      if (scrollToId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (scrollToId) {
        document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    
    const url = new URL(window.location);
    url.searchParams.set("page", tab);
    if (caseStudyId) {
      url.searchParams.set("id", caseStudyId);
    } else {
      url.searchParams.delete("id");
    }
    window.history.pushState({}, "", url);

    setIsTransitioning(true);
    
    // Wait for animation to cover screen
    setTimeout(() => {
      setActiveTab(tab);
      if (caseStudyId) {
        setActiveCaseStudyId(caseStudyId);
      }
      
      // Let the new content render, then fade out transition
      setTimeout(() => {
        setIsTransitioning(false);
        
        if (scrollToId === "top") {
          window.scrollTo(0, 0);
        } else if (scrollToId) {
          // Add a tiny delay to ensure the DOM has updated
          setTimeout(() => {
            document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
          }, 50);
        }
      }, 500);
    }, 600);
  };

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setActiveTab(params.get("page") || "work");
      setActiveCaseStudyId(params.get("id") || null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Scroll to top when active tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const isPlayground = activeTab === "playground";
  const isCaseStudy = activeTab === "casestudy";
  const hideFooter = isPlayground;

  return (
    <div className={`min-h-screen flex flex-col mx-auto relative bg-[#FAF9F6] ${
      isPlayground 
        ? "w-full h-[100dvh] overflow-hidden px-6 md:px-12 py-6" 
        : "max-w-[1200px] w-full px-6 md:px-12 py-6"
    }`}>
      <CustomCursor isPlayground={isPlayground} />
      <TransitionLayer isTransitioning={isTransitioning} />
      <Navbar handleNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className={`flex-grow page-fade-in ${isPlayground ? "relative overflow-hidden" : ""}`} key={activeTab}>
        {activeTab === "work" && (
          <div>
            <Hero />
            <Work handleNavigate={handleNavigate} />
          </div>
        )}

        {activeTab === "about" && <About />}

        {activeTab === "playground" && <Playground />}

        {activeTab === "casestudy" && <CaseStudy caseStudyId={activeCaseStudyId} />}
      </main>

      {!hideFooter && <Contact />}
    </div>
  );
}

export default App;
