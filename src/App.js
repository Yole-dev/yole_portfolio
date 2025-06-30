import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// imported pages
import Layout from "./components/layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import QuickaashProject from "./pages/QuickaashProject";
import BloomProject from "./pages/BloomProject";
import SpaceTourismProject from "./pages/SpaceTourismProject";
import TherapifyMeProject from "./pages/TherapifyMeProject";

//imported component
import TextAnimation from "./components/TextAnimation";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    const timer = setTimeout(() => setIsLoading(false), 5500);
    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <LoadingComponent /> : <AppComponent />}</>;
}

function AppComponent() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route
            path="/projects"
            element={
              <Layout>
                <Projects />
              </Layout>
            }
          />

          <Route
            path="/quickaash_project"
            element={
              <Layout>
                <QuickaashProject />
              </Layout>
            }
          />

          <Route
            path="/bloom_project"
            element={
              <Layout>
                <BloomProject />
              </Layout>
            }
          />

          <Route
            path="/space_tourism_project"
            element={
              <Layout>
                <SpaceTourismProject />
              </Layout>
            }
          />

          <Route
            path="/therapifyme_project"
            element={
              <Layout>
                <TherapifyMeProject />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

function LoadingComponent() {
  return (
    <div className="loading-page">
      <div className="loading-container">
        <TextAnimation text="Welcome" duration={2} animationType="typing" />
        <div className="loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}
