import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
};

export default function ImageHover({ src, alt, sizes }: Props) {
  return (
    <div className="relative w-full h-full">
      {/* base : noir & blanc */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover grayscale transition-opacity duration-200 group-hover:opacity-0"
        sizes={sizes}
        priority={false}
      />
      {/* hover : couleur */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        sizes={sizes}
        priority={false}
      />
    </div>
  );
}
