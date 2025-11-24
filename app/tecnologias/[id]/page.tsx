import tecnologias from "@/app/data/tecnologias.json";
import TecnologiaDetailsCard from "@/components/TecnologiaDetailsCard/TecnologiaDetailsCard";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

export default function TecnologiaPage({ params }: Props) {
  const index = Number(params.id);
  const tecnologia = tecnologias[index];

  if (!tecnologia) {
    return <p className="p-8 text-red-600">Tecnologia não encontrada.</p>;
  }

  return (
    <div className="p-8">
      <TecnologiaDetailsCard
        title={tecnologia.title}
        image={tecnologia.image}
        description={tecnologia.description}
        rating={tecnologia.rating}
      />

      <Link
        href="/tecnologias"
        className="mt-6 block text-blue-600 underline text-center"
      >
        Voltar
      </Link>
    </div>
  );
}