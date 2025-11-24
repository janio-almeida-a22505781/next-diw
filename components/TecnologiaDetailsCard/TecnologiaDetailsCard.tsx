interface TecnologiaDetailsProps {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export default function TecnologiaDetailsCard({ title, image, description, rating }: TecnologiaDetailsProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
      <img src={image} alt={title} className="w-24 h-24 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>

      <p className="font-semibold">
        Rating: {"⭐".repeat(rating)}
      </p>
    </div>
  );
}