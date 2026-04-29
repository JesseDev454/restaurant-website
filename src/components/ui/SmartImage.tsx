import type { ImgHTMLAttributes } from "react";

type SmartImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

export function SmartImage({
  priority = false,
  loading,
  decoding,
  fetchPriority,
  referrerPolicy,
  alt,
  ...props
}: SmartImageProps) {
  return (
    <img
      alt={alt}
      loading={loading ?? (priority ? "eager" : "lazy")}
      decoding={decoding ?? "async"}
      fetchPriority={fetchPriority ?? (priority ? "high" : "auto")}
      referrerPolicy={referrerPolicy ?? "no-referrer"}
      {...props}
    />
  );
}
