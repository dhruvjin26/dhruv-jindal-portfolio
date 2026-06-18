import Image from "next/image";
import type { GalleryImage } from "@/data/portfolio";

type ImageFrameProps = {
  image: GalleryImage;
  className?: string;
  priority?: boolean;
};

export function ImageFrame({ image, className = "", priority = false }: ImageFrameProps) {
  return (
    <div className={`relative overflow-hidden rounded-[0.5rem] border border-white/10 bg-white/[0.03] ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 42vw"
        className="object-cover"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-white/5" />
    </div>
  );
}
