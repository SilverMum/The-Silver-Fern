interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  imageAlt?: string;
}

export function ProductCard({ image, title, description, price, imageAlt }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-200">
      <div className="aspect-square overflow-hidden bg-stone-100">
        <img 
          src={image} 
          alt={imageAlt || title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h3 className="text-stone-900 mb-2">{title}</h3>
        <p className="text-stone-600 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-emerald-700">${price}</span>
          <button className="bg-emerald-700 text-white px-4 py-2 rounded-lg hover:bg-emerald-800 transition-colors text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
