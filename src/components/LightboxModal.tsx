import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GalleryPhoto } from '../data/villageData';
import { ResilientImage } from './ResilientImage';

interface LightboxModalProps {
  photos: GalleryPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (nextIndex: number) => void;
}

export function LightboxModal({
  photos,
  activeIndex,
  onClose,
  onChangeIndex,
}: LightboxModalProps) {
  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onChangeIndex((activeIndex - 1 + photos.length) % photos.length);
      }
      if (e.key === 'ArrowRight') {
        onChangeIndex((activeIndex + 1) % photos.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, onChangeIndex, onClose, photos.length]);

  if (activeIndex === null || !photos[activeIndex]) return null;

  const photo = photos[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#154212]/90 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Foto galeri: ${photo.title}`}
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="flex items-center justify-between text-white max-w-5xl w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-sm font-medium text-[#f5f0e7] tabular-nums">
          Foto {activeIndex + 1} dari {photos.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup galeri foto"
          className="min-w-[48px] min-h-[48px] rounded-xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>

      {/* Main Photo */}
      <div
        className="max-w-5xl w-full mx-auto my-auto flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[68vh] rounded-2xl overflow-hidden bg-[#1d1c16] shadow-2xl">
          <ResilientImage
            src={photo.image}
            alt={photo.title}
            fallbackTitle={photo.title}
            className="w-full h-full object-contain bg-[#1d1c16]"
          />
        </div>

        {/* Caption & Controls */}
        <div className="w-full mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
          <div>
            <p className="text-xs text-[#a1d494] font-medium mb-0.5">{photo.location}</p>
            <h4 className="font-display font-bold text-lg sm:text-xl">{photo.title}</h4>
            <p className="text-sm text-[#f5f0e7]/90 mt-1">{photo.caption}</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onChangeIndex((activeIndex - 1 + photos.length) % photos.length)}
              aria-label="Foto sebelumnya"
              className="min-w-[48px] min-h-[48px] px-4 rounded-xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center gap-1.5 font-medium text-sm transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              <span>Sebelumnya</span>
            </button>
            <button
              type="button"
              onClick={() => onChangeIndex((activeIndex + 1) % photos.length)}
              aria-label="Foto berikutnya"
              className="min-w-[48px] min-h-[48px] px-4 rounded-xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center gap-1.5 font-medium text-sm transition-colors cursor-pointer"
            >
              <span>Berikutnya</span>
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
