import React from 'react'
import tecnologias from "@/app/data/tecnologias.json";
import Image from 'next/image';

export default function page() {

    const listaTecnologias = JSON.parse(JSON.stringify(tecnologias));

  return (
    <section className="px-8 py-12">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Tecnologias Exploradas
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listaTecnologias.map((tech: any, index: number) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center border hover:scale-105 transition-all"
          >
            <Image
              src={tech.image}
              alt={tech.title}
              width={80}
              height={80}
              className="mb-4"
            />

            <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>

            <p className="text-gray-600 text-sm mb-4">{tech.description}</p>

            <p className="font-medium">
              ⭐ Rating: <span className="font-bold">{tech.rating}/5</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
