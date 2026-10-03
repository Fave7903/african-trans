import React from 'react';

/**
 * Cropped sneak-peek flyer; click opens full image via parent handler.
 * @param {{ src: string, alt?: string, onOpen: (url: string) => void, className?: string }} props
 */
const FlyerThumbnail = ({ src, alt = 'Event flyer preview', onOpen, className = '' }) => {
  if (!src) return null;

  return (
    <button
      type="button"
      onClick={() => onOpen(src)}
      className={`group relative block w-full overflow-hidden rounded-2xl border border-brand-border bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${className}`}
      aria-label="View full flyer"
    >
      <div className="aspect-[16/10] w-full">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <span className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/50 to-transparent p-3 opacity-0 transition group-hover:opacity-100">
        <span className="rounded-full bg-brand-gold/90 px-3 py-1 text-xs font-semibold text-slate-950">
          View flyer
        </span>
      </span>
    </button>
  );
};

export default FlyerThumbnail;
