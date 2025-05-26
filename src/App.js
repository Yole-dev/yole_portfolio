import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// imported pages
import Layout from "./components/layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import QuickaashProject from "./pages/QuickaashProject";

export default function App() {
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
                <Projects />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
