import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCarousel } from './components/ProductCarousel';
import { ProductCard } from './components/ProductCard';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

const featuredArt = [
  {
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMHBhaW50aW5nJTIwY29sb3JmdWx8ZW58MXx8fHwxNzgwNDkwOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Abstract Waves',
    description: 'Bold and vibrant abstract composition with flowing colors',
    price: '45.00'
  },
  {
    image: 'https://images.unsplash.com/photo-1605013547670-e0d98161754d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwYm90YW5pY2FsJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc4MDUyODg3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Botanical Watercolor',
    description: 'Delicate hand-painted botanical illustration in soft hues',
    price: '38.00'
  },
  {
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBwcmludCUyMHdhbGx8ZW58MXx8fHwxNzgwNTI4ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Modern Minimalist',
    description: 'Clean lines and neutral tones for contemporary spaces',
    price: '52.00'
  },
  {
    image: 'https://images.unsplash.com/photo-1700405495207-3f87da07c1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBuYXR1cmUlMjBwYWludGluZ3xlbnwxfHx8fDE3ODA1Mjg4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Mountain Landscape',
    description: 'Serene mountain vista capturing natural beauty',
    price: '48.00'
  },
  {
    image: 'https://images.unsplash.com/photo-1763373538716-a792047741d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZ2VvbWV0cmljJTIwYXJ0fGVufDF8fHx8MTc4MDQ5NjA2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Geometric Balance',
    description: 'Minimalist geometric shapes in harmonious arrangement',
    price: '42.00'
  },
  {
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBhcnR3b3JrJTIwbW9kZXJufGVufDF8fHx8MTc4MDUyODg4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Pastel Dreams',
    description: 'Soft pastel artwork with dreamy, ethereal quality',
    price: '40.00'
  }
];

const stickers = [
  {
    image: 'https://images.unsplash.com/photo-1633533452206-8ab246b00e30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwc3RpY2tlciUyMGRlc2lnbnxlbnwxfHx8fDE3ODA1Mjg4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Nature Sticker Pack',
    description: 'Set of 10 adorable nature-themed vinyl stickers',
    price: '12.00'
  },
  {
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmZXJuJTIwbGVhdmVzJTIwZ3JlZW58ZW58MXx8fHwxNzgwNTI4ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Fern Collection',
    description: 'Beautiful fern leaf designs in various sizes',
    price: '8.00'
  },
  {
    image: 'https://images.unsplash.com/photo-1727525895934-ae4350538c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwZHJhd24lMjBpbGx1c3RyYXRpb24lMjBib3RhbmljYWx8ZW58MXx8fHwxNzgwNTI4ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Hand-drawn Botanicals',
    description: 'Delicate hand-illustrated plant stickers',
    price: '10.00'
  },
  {
    image: 'https://images.unsplash.com/photo-1605013547670-e0d98161754d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwYm90YW5pY2FsJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc4MDUyODg3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Watercolor Florals',
    description: 'Soft watercolor flower sticker set',
    price: '11.00'
  },
  {
    image: 'https://images.unsplash.com/photo-1763373538716-a792047741d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZ2VvbWV0cmljJTIwYXJ0fGVufDF8fHx8MTc4MDQ5NjA2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Geometric Shapes',
    description: 'Modern geometric mini sticker collection',
    price: '9.00'
  }
];

const prints = [
  {
    image: 'https://images.unsplash.com/photo-1584448097764-374f81551427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcG9zdGVyJTIwYXJ0fGVufDF8fHx8MTc4MDUyODg3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Vintage Travel Poster',
    description: 'Classic vintage-style travel poster print',
    price: '35.00'
  },
  {
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBwcmludCUyMHdhbGx8ZW58MXx8fHwxNzgwNTI4ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Modern Wall Art',
    description: 'Contemporary art print for modern interiors',
    price: '42.00'
  },
  {
    image: 'https://images.unsplash.com/photo-1700405495207-3f87da07c1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBuYXR1cmUlMjBwYWludGluZ3xlbnwxfHx8fDE3ODA1Mjg4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Nature Escape',
    description: 'Large format landscape photography print',
    price: '55.00'
  },
  {
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMHBhaW50aW5nJTIwY29sb3JmdWx8ZW58MXx8fHwxNzgwNDkwOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Abstract Expression',
    description: 'Bold abstract art print on premium paper',
    price: '48.00'
  },
  {
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBhcnR3b3JrJTIwbW9kZXJufGVufDF8fHx8MTc4MDUyODg4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Soft Pastel Print',
    description: 'Calming pastel artwork perfect for bedrooms',
    price: '38.00'
  }
];

const galleryItems = [
  { image: 'https://images.unsplash.com/photo-1605013547670-e0d98161754d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwYm90YW5pY2FsJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc4MDUyODg3Nnww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Botanical Study' },
  { image: 'https://images.unsplash.com/photo-1763373538716-a792047741d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZ2VvbWV0cmljJTIwYXJ0fGVufDF8fHx8MTc4MDQ5NjA2NHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Geometric Form' },
  { image: 'https://images.unsplash.com/photo-1565876427310-0695a4ff03b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc4MDUyODg4MHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Gallery Exhibition' },
  { image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMHBhaW50aW5nJTIwY29sb3JmdWx8ZW58MXx8fHwxNzgwNDkwOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Color Flow' },
  { image: 'https://images.unsplash.com/photo-1727525895934-ae4350538c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwZHJhd24lMjBpbGx1c3RyYXRpb24lMjBib3RhbmljYWx8ZW58MXx8fHwxNzgwNTI4ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Sketches' },
  { image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBmZXJuJTIwbGVhdmVzJTIwZ3JlZW58ZW58MXx8fHwxNzgwNTI4ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Fern Details' },
  { image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBhcnR3b3JrJTIwbW9kZXJufGVufDF8fHx8MTc4MDUyODg4MHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Pastel Collection' },
  { image: 'https://images.unsplash.com/photo-1700405495207-3f87da07c1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBuYXR1cmUlMjBwYWludGluZ3xlbnwxfHx8fDE3ODA1Mjg4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Mountain Series' }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <Hero image="https://images.unsplash.com/photo-1613666517563-d19a4585d1fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW8lMjBjcmVhdGl2ZXxlbnwxfHx8fDE3ODAzMzcwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080" />
      
      <ProductCarousel title="Featured Art">
        {featuredArt.map((item, index) => (
          <div key={index} className="px-3">
            <ProductCard {...item} />
          </div>
        ))}
      </ProductCarousel>
      
      <ProductCarousel title="Stickers & Minis">
        {stickers.map((item, index) => (
          <div key={index} className="px-3">
            <ProductCard {...item} />
          </div>
        ))}
      </ProductCarousel>
      
      <ProductCarousel title="Prints & Posters">
        {prints.map((item, index) => (
          <div key={index} className="px-3">
            <ProductCard {...item} />
          </div>
        ))}
      </ProductCarousel>
      
      <Gallery items={galleryItems} />
      
      <Footer />
    </div>
  );
}
