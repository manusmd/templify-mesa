import Image from "next/image";

/**
 * Cover image that fills its (position:relative) parent frame. Example photos
 * are from Unsplash — replace the URLs in lib/content.ts with your own.
 */
export default function Img({
  src,
  alt,
  priority = false,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      style={{ objectFit: "cover" }}
    />
  );
}
