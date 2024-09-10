interface ProductCardProps {
    icon: string;
    title: string;
    description: string;
}

export default function ProductCard({ icon, title, description }: ProductCardProps) {
    return (
        <div className="border border-gray-600 rounded p-4 hover:bg-gray-800 cursor-pointer">
            <div className="text-3xl mb-2">{icon}</div>
            <h3 className="font-bold mb-1">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
        </div>
    );
}
