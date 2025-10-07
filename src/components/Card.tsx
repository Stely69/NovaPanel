interface CardProps {
  title: string;
  value: string | number;
  description?: string;
}

export default function Card({ title, value, description }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
      {description && (
        <span className="text-xs text-gray-400">{description}</span>
      )}
    </div>
  );
}
