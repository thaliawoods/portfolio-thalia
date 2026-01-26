import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
};

export default function ImageHover({ src, alt, sizes }: Props) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* base : noir & blanc */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover grayscale transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-[1.02]"
        sizes={sizes}
        priority={false}
      />

      {/* hover : couleur */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-[1.02]"
        sizes={sizes}
        priority={false}
      />
    </div>
  );
}
