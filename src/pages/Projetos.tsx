import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import "../projects.css";

interface ProjectCardProps {
  title: string;
  description: string;
  children?: ReactNode;
  defaultOpen?: boolean;
}

function ProjectCard({
  title,
  description,
  children,
  defaultOpen = true,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="card">
      <div
        className="card-header"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <h2>{title}</h2>
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </div>

      <div
        ref={contentRef}
        className="card-content"
        style={{
          maxHeight: height,
          transition: "max-height 0.6s ease",
          overflow: "hidden",
        }}
      >
        <p>{description}</p>
        {children}
      </div>
    </div>
  );
}

function Projetos() {
  return (
    <section>
      {window.innerWidth <= 768 ? (
        <div className="header-phone">
          <h1 className="icon-title">📂</h1>
          <h1>Projetos</h1>
        </div>
      ) : (
        <h1>📂 Projetos</h1>
      )}
      <div className="projects-grid">
        <ProjectCard
          title="🍽️ Random Restaurant"
          description="Um site que ajuda a escolher um restaurante de acordo com a cidade onde vais comer."
        >
          <div className="project-links">
            <a
              href="https://github.com/Goncalogomes2004/randomreastaurant"
              className="code"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 Ver código
            </a>
            <a
              href="https://web.randomrestaurante.pt/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 Ver site
            </a>
          </div>
        </ProjectCard>
      </div>
    </section>
  );
}

export default Projetos;
