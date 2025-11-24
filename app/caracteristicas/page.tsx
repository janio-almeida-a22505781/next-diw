import React from 'react'
import Caracteristica from "@/components/Caracteristica/Caracteristica";
import caracteristicas from "@/app/data/caracteristicas.json"

export default function CaracteristicasPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Características</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caracteristicas.map((car, index) => (
          <Caracteristica key={index} caracteristica={car} index={index} />
        ))}
      </div>
    </div>
  );
}
