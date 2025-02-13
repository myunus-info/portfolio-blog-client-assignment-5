import Image from 'next/image';
import { Badge } from '../ui/badge';
import heroImg from '../../assets/Yunus.jpg';

export function Hero() {
  return (
    <section className="min-h-[55vh] flex flex-col justify-center items-center text-center px-4 animate-fade-in">
      <Badge className="mb-4" variant="secondary">
        Full Stack Developer
      </Badge>
      <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">Muhammad Yunus</h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-[600px]">
        Crafting digital experiences with modern technologies and a passion for clean, efficient
        code. Based in Bangladesh, with tremendous passion and enthusiasm building scalable web
        applications.
      </p>
      <div className="relative w-32 h-32 mb-8">
        <Image
          src={heroImg}
          alt="Sarah Anderson"
          className="rounded-full object-cover shadow-lg"
          width={128}
          height={128}
        />
      </div>
    </section>
  );
}
