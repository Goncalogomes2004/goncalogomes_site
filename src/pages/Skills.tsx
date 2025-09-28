import { useEffect, useRef, useState } from "react";
import "../skills.css";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SkillCardProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function SkillCard({ title, children, defaultOpen = true }: SkillCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="card big">
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
          overflow: "hidden",
          transition: "max-height 0.6s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section>
      {window.innerWidth <= 768 ? (
        <div className="header-phone">
          <h1 className="icon-title">💻</h1>
          <h1>Skills</h1>
        </div>
      ) : (
        <h1>💻 Skills</h1>
      )}
      <SkillCard title="Linguagens">
        <div className="skills-grid">
          <a
            href="https://en.cppreference.com/w/c"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-block skill-c"
          >
            <img src="/images/c.png" alt="C" />
            <span>C</span>
          </a>
          <a
            href="https://www.java.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-block skill-java"
          >
            <img src="/images/java.png" alt="Java" />
            <span>Java</span>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-block skill-html"
          >
            <img src="/images/js.png" alt="HTML/CSS/JS" />
            <span>JavaScript</span>
          </a>
          <a
            href="https://en.cppreference.com/w/cpp"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-block skill-cpp"
          >
            <img src="/images/cpp.png" alt="C++" />
            <span>C++</span>
          </a>
        </div>
      </SkillCard>

      <SkillCard title="Frameworks / Bibliotecas">
        <div className="skills-grid">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-block skill-react"
          >
            <img src="/images/react.png" alt="React" />
            <span>React</span>
          </a>
          <a
            href="https://nestjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-block skill-nest"
          >
            <img src="/images/nest.png" alt="NestJS" />
            <span>NestJS</span>
          </a>
          <a
            href="https://angular.io/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-block skill-angular"
          >
            <img src="/images/angular.png" alt="Angular" />
            <span>Angular</span>
          </a>
        </div>
      </SkillCard>

      <SkillCard title="Bancos de Dados">
        <div className="skills-grid">
          <a
            href="https://www.postgresql.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-block skill-sql"
          >
            <img src="/images/sql.png" alt="SQL" />
            <span>MySQL</span>
          </a>
          <a
            href="https://www.postgresql.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-block skill-postgres"
          >
            <img src="/images/postgres.png" alt="Postgres" />
            <span>Postgres</span>
          </a>
        </div>
      </SkillCard>

      <SkillCard title="Ferramentas">
        <div className="skills-grid">
          <a
            href="https://www.docker.com/resources/what-container"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-block skill-docker"
          >
            <img src="/images/docker.png" alt="Docker" />
            <span>Docker</span>
          </a>
          <a
            href="https://www.microsoft.com/en-us/windows"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-block skill-windows"
          >
            <img src="/images/windows.png" alt="Windows" />
            <span>Windows</span>
          </a>
          <a
            href="https://www.linux.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="skill-block skill-linux"
          >
            <img src="/images/linux.png" alt="Linux" />
            <span>Linux</span>
          </a>
        </div>
      </SkillCard>
    </section>
  );
}

export default Skills;
