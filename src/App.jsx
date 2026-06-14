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
  const [activeTab, setActiveTab] = useState("work");
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (tab, scrollToId = null, caseStudyId = null) => {
    if (tab === "contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    
    if (tab === activeTab) {
      if (scrollToId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (scrollToId) {
        document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    
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
        ? "w-full h-screen overflow-hidden px-6 md:px-12 py-6" 
        : "max-w-[1200px] px-6 md:px-12 py-6 border-x border-[#EAE9E4] shadow-[0_0_32px_rgba(0,0,0,0.02)]"
    }`}>
      <CustomCursor />
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
