import React from 'react';
import './ImageCard.css';

// Reusable image card component
// - Uses default image from /src/bilder if imageSrc not provided
// - Title required, subtitle optional
// - aspectRatio: width / height (e.g. 4/3, 16/9). Default maintains natural image.

export interface ImageCardProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;      // Override image path
  alt?: string;            // Accessibility text; falls back to title
  aspectRatio?: number;    // If provided, enforces aspect ratio via padding trick
  onClick?: () => void;
  className?: string;
}

const defaultImage = new URL('../bilder/bukse-2.webp', import.meta.url).href;

export const ImageCard: React.FC<ImageCardProps> = ({
  title,
  subtitle,
  imageSrc,
  alt,
  aspectRatio,
  onClick,
  className = ''
}) => {
  const resolvedAlt = alt || title;
  const ratioStyle: React.CSSProperties | undefined = aspectRatio
    ? { '--ic-ratio': String(aspectRatio) } as React.CSSProperties
    : undefined;

  return (
    <figure
      className={`image-card ${onClick ? 'is-clickable' : ''} ${className}`.trim()}
      style={ratioStyle}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
    >
      <div className={aspectRatio ? 'image-wrapper ratio' : 'image-wrapper'}>
        <img src={imageSrc || defaultImage} alt={resolvedAlt} loading="lazy" />
      </div>
      <figcaption className="image-meta">
        <h3 className="image-title">{title}</h3>
        {subtitle && <p className="image-subtitle">{subtitle}</p>}
      </figcaption>
    </figure>
  );
};

export default ImageCard;

