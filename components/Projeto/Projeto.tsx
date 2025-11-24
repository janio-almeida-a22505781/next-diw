import React from "react";

interface ProjetoProps {
  nome: string;
  url: string;
}

const Projeto: React.FC<ProjetoProps> = ({ nome, url }) => {
  return (
    <p className="mb-2">
      Projeto: <strong>{nome}</strong> —{" "}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Aceder ao projeto
      </a>
    </p>
  );
};

export default Projeto;
