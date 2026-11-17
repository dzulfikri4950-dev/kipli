import { useEffect } from 'react';
import { CheckCircle2, Clock, Footprints, MessageCircle, Ticket, X } from 'lucide-react';
import { DestinationItem } from '../data/villageData';
import { ResilientImage } from './ResilientImage';

interface DestinationModalProps {
  destination: DestinationItem | null;
  onClose: () => void;
  onBookWhatsApp: () => void;
}

export function DestinationModal({
  destination,
  onClose,
  onBookWhatsApp,
}: DestinationModalProps) {
  useEffect(() => {
    if (!destination) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [destination, onClose]);

  if (!destination) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#154212]/55 backdrop-blur-xs p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dest-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-xl bg-[#fef9f0] rounded-t-3xl sm:rounded-2xl border border-[#d9cbb7] shadow-leaf-lg max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] w-full shrink-0 bg-[#e7e2d9]">
          <ResilientImage
            src={destination.image}
            alt={destination.name}
            fallbackTitle={destination.name}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail destinasi"
            className="absolute top-3 right-3 min-w-[44px] min-h-[44px] rounded-xl bg-[#1d1c16]/75 hover:bg-[#1d1c16] text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          <div>
            <div className="text-xs font-medium text-[#904d00] mb-1">
              {destination.categoryLabel} · {destination.duration}
            </div>
            <h3
              id="dest-modal-title"
              className="font-display font-bold text-2xl text-[#154212]"
            >
              {destination.name}
            </h3>
          </div>

          <p className="text-base text-[#1d1c16] leading-relaxed">{destination.fullDesc}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#ffffff] border border-[#e7e2d9] rounded-xl p-4">
            <div className="flex items-start gap-2.5">
              <Ticket className="w-4 h-4 text-[#904d00] shrink-0 mt-1" aria-hidden="true" />
              <div>
                <span className="block text-xs text-[#42493e]">Tiket Masuk</span>
                <span className="font-display font-bold text-sm text-[#1d1c16] tabular-nums">
                  {destination.ticketPrice}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#2d5a27] shrink-0 mt-1" aria-hidden="true" />
              <div>
                <span className="block text-xs text-[#42493e]">Jam Buka</span>
                <span className="font-display font-bold text-sm text-[#1d1c16] tabular-nums">
                  {destination.openHours}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Footprints className="w-4 h-4 text-[#2d5a27] shrink-0 mt-1" aria-hidden="true" />
              <div>
                <span className="block text-xs text-[#42493e]">Kondisi Jalur</span>
                <span className="font-semibold text-sm text-[#1d1c16]">
                  {destination.accessibility}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm text-[#154212] mb-2">
              Fasilitas Tersedia
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {destination.facilities.map((facility) => (
                <li
                  key={facility}
                  className="flex items-center gap-2 text-sm text-[#42493e]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2d5a27] shrink-0" aria-hidden="true" />
                  <span>{facility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-[#ffffff] border-t border-[#e7e2d9] flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookWhatsApp();
            }}
            className="w-full min-h-[52px] px-5 py-3 rounded-xl bg-[#2d5a27] hover:bg-[#154212] text-white font-display font-bold text-base flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Tanya &amp; Pesan Kunjungan via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
