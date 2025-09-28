import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import "../perfil.css"; // mantém só se houver outros estilos específicos

interface CardProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

function Card({ title, children, defaultOpen = true }: CardProps) {
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
          transition: "max-height 0.6s ease",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Perfil() {
  return (
    <section>
      <h1>👤 Perfil</h1>

      <Card title="👤 Informações Pessoais">
        <p>
          <strong>Nome:</strong> Gonçalo Cardoso Gomes
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:goncalocarodosogomes@gmail.com" className="email">
            goncalocarodosogomes@gmail.com
          </a>
        </p>
        <p>
          <strong>Telemóvel:</strong>{" "}
          <a href="tel:+351912345678" className="phone">
            +351 912 345 678
          </a>
        </p>
        <p>
          <strong>Cidade:</strong> Águeda, Aveiro, Portugal
        </p>
        <p>
          <button className="sidebar-btn btn-center">
            📄 Transferir Currículo
          </button>
        </p>
      </Card>

      <Card title="💼 Experiência Profissional">
        <div className="experience-item">
          <h3>Estágio Profissional</h3>
          <p className="place">
            <a
              href="https://streamline.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="social"
            >
              Streamline
            </a>
          </p>
          <p className="date">Início: Agosto 2025</p>
        </div>
      </Card>

      <Card title="🎓 Percurso Académico">
        <div className="experience-item">
          <h3>Licenciatura em Engenharia Informática</h3>
          <p className="place">
            Instituto Superior de Engenharia de Coimbra (ISEC)
          </p>
          <p className="date">Set 2022 – Jul 2025</p>
          <p className="details">Ramo de Desenvolvimento de Aplicações</p>
          <span className="badge">Média: 14 valores</span>
        </div>

        <div className="experience-item">
          <h3>Ensino Secundário</h3>
          <p className="place">Escola Secundária Adolfo Portela (ESAP)</p>
          <p className="date">Set 2019 – Jun 2022</p>
          <p className="details">Curso de Ciências e Tecnologias</p>
          <span className="badge">Média: 16 valores</span>
        </div>
      </Card>

      <Card title="🌐 Redes Sociais">
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/goncalo"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
          >
            linkedin.com/in/goncalo
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Goncalogomes2004"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
          >
            github.com/Goncalogomes2004
          </a>
        </p>
        <p>
          <strong>Instagram:</strong>{" "}
          <a
            href="https://www.instagram.com/goncalo"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
          >
            @goncalo._.gomes
          </a>
        </p>
      </Card>
    </section>
  );
}

export default Perfil;
