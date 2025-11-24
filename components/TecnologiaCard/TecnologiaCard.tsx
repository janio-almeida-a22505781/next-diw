import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TecnologiaCardProps {
    title: string;
    image: string;
    index: number;
}

const TecnologiaCard: React.FC<TecnologiaCardProps> = ({ title, image, index }) => {
    return (
        <Link href={`/tecnologias/${index}`} className="block">
            <div className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-center items-center w-48 h-48 hover:scale-105 transition-transform">
                <Image
                    src={image}
                    alt={title}
                    width={60}
                    height={60}
                    className="mb-3"
                />
                <h3 className="text-lg font-semibold text-center">{title}</h3>
            </div>
        </Link>
    );
};

export default TecnologiaCard;