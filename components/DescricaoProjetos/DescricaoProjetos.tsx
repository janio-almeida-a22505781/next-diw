import React from "react";
import Projeto from "@/components/Projeto/Projeto";

const DescricaoProjetos: React.FC = () => {
  return (
    <section className="px-8 py-10 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Projetos Desenvolvidos</h2>

      <p className="mb-4">
        Ao longo da disciplina, desenvolvi vários projetos práticos utilizando
        diferentes tecnologias. Podes consultar todos os meus projetos na minha
        homepage:
        <br />
        <a
          href="https://janio-almeida-a22505781.github.io/janioalmeidaa.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          https://janio-almeida-a22505781.github.io/janioalmeidaa.github.io/
        </a>
      </p>

      <h3 className="text-xl font-semibold mb-3">Projetos em destaque:</h3>

      <div className="ml-4">
        <Projeto
          nome="Lab 1"
          url="https://janio-almeida-a22505781.github.io/janioalmeidaa.github.io/lab1/cidades/index.html"
        />

        <Projeto
          nome="Lab 2"
          url="https://janio-almeida-a22505781.github.io/janioalmeidaa.github.io/lab2/cidades/index.html"
        />

        <Projeto
          nome="Lab 3"
          url="https://janio-almeida-a22505781.github.io/janioalmeidaa.github.io/lab3/cidades/index.html"
        />

        <Projeto
          nome="Lab 4"
          url="https://janio-almeida-a22505781.github.io/janioalmeidaa.github.io/lab4/cidades/index.html"
        />

        <Projeto
          nome="Lab 5"
          url="https://janio-almeida-a22505781.github.io/janioalmeidaa.github.io/lab5/index.html"
        />

        <Projeto
          nome="Lab 7 - Loja"
          url="https://janio-almeida-a22505781.github.io/janioalmeidaa.github.io/lab7/index.html"
        />
      </div>
    </section>
  );
};

export default DescricaoProjetos;