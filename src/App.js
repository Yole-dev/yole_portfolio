import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// imported pages
import Layout from "./components/layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import QuickaashProject from "./pages/QuickaashProject";
import BloomProject from "./pages/BloomProject";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    const timer = setTimeout(() => setIsLoading(false), 5000);
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
        </Routes>
      </Router>
    </div>
  );
}

function LoadingComponent() {
  return (
    <div className="loading-page">
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}
