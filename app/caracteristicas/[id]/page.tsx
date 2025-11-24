import caracteristicas from "@/app/data/caracteristicas.json";
import Link from "next/link";

interface Props {
  params: {
    id: number;
  };
}

export default async function CaracteristicaPage({ params }: Props) {
  const { id } = await params;
  const caracteristica = caracteristicas[id];

  console.log(params)
  console.log(id)
  console.log(caracteristica)
  console.log(caracteristicas)

  if (!caracteristica) {
    return <p className="p-8 text-red-600">Característica não encontrada.</p>;
  }

  return (
    <div className="p-8 flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{caracteristica}</h1>

        <Link
          href="/caracteristicas"
          className="text-blue-600 underline text-lg"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}