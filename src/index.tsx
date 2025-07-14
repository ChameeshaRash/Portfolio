import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { LinkTree } from "./pages/LinkTree";
import AiGalleryPage from './pages/ai-gallery';

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linktree" element={<LinkTree />} />
        <Route path="/ai-gallery" element={<AiGalleryPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);
