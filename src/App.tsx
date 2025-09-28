import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import "./App.css";
import Perfil from "./pages/Perfil";
import Projetos from "./pages/Projetos";
import Skills from "./pages/Skills";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Router>
      <div className="dashboard">
        {/* Sidebar */}

        <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
          <div className="sidebar-header">
            <h2>Dashboard</h2>
          </div>

          <nav>
            <NavLink
              to="/perfil"
              onClick={() => {
                if (window.innerWidth <= 768) setIsOpen(false); // fecha no mobile
              }}
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              Perfil
            </NavLink>
            <NavLink
              to="/skills"
              onClick={() => {
                if (window.innerWidth <= 768) setIsOpen(false); // fecha no mobile
              }}
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              Skills
            </NavLink>
            <NavLink
              onClick={() => {
                if (window.innerWidth <= 768) setIsOpen(false); // fecha no mobile
              }}
              to="/projetos"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              Projetos
            </NavLink>
          </nav>

          {/* Botão de Currículo fixo no fundo */}
          <a
            href="/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-btn"
          >
            📄 Currículo
          </a>
        </aside>
        <div className="sidebar-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "«" : "»"}
        </div>

        {/* Área principal */}
        <div className={`main-area ${isOpen ? "open" : ""}`}>
          <main className="content ">
            {
              <button className="open-btn" onClick={() => setIsOpen(!isOpen)}>
                ☰
              </button>
            }
            <Routes>
              <Route path="/" element={<Perfil />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projetos" element={<Projetos />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
