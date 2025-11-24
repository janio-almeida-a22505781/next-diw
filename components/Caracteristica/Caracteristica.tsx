import Link from "next/link";

interface CaracteristicaProps {
  caracteristica: string;
  index: number;
}

export default function Caracteristica({ caracteristica, index }: CaracteristicaProps) {
  return (
    <Link href={`/caracteristicas/${index}`} className="block">
      <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition text-center">
        <p className="font-semibold">{caracteristica}</p>
      </div>
    </Link>
  );
}