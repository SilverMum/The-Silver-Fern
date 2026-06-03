interface HeroProps {
  image: string;
}

export function Hero({ image }: HeroProps) {
  return (
    <section className="relative bg-stone-100">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl text-stone-900 mb-6">
              Handcrafted Art for Your Space
            </h1>
            <p className="text-lg text-stone-600 mb-8">
              Welcome to Silver Fern Studio, where nature meets creativity. Each piece is thoughtfully designed and lovingly created to bring warmth and character to your home.
            </p>
            <div className="flex gap-4">
              <button className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition-colors">
                Shop All Art
              </button>
              <button className="border-2 border-stone-300 text-stone-700 px-6 py-3 rounded-lg hover:border-emerald-700 hover:text-emerald-700 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={image} 
                alt="Artist workspace at Silver Fern Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg hidden md:block">
              <p className="text-sm text-stone-600 mb-1">Trusted by</p>
              <p className="text-stone-900">500+ Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
