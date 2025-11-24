import tecnologias from "@/app/data/tecnologias.json";
import TecnologiaCard from "@/components/TecnologiaCard/TecnologiaCard";

export default function TecnologiasPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Tecnologias</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {tecnologias.map((tec, index) => (
          <TecnologiaCard
            key={index}
            index={index}
            title={tec.title}
            image={tec.image}
          />
        ))}
      </div>
    </div>
  );
}