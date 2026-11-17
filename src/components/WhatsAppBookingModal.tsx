import { useEffect, useState } from 'react';
import { Calendar, Check, Copy, MessageCircle, Minus, Plus, Users, X } from 'lucide-react';
import {
  buildWhatsAppUrl,
  formatRupiah,
  TOUR_PACKAGES,
  TourPackage,
  VILLAGE_INFO,
} from '../data/villageData';

interface WhatsAppBookingModalProps {
  isOpen: boolean;
  initialPackageId?: string;
  onClose: () => void;
}

export function WhatsAppBookingModal({
  isOpen,
  initialPackageId,
  onClose,
}: WhatsAppBookingModalProps) {
  const defaultPkg =
    TOUR_PACKAGES.find((p) => p.id === initialPackageId) ?? TOUR_PACKAGES[1];

  const [selectedPkgId, setSelectedPkgId] = useState<string>(defaultPkg.id);
  const [pax, setPax] = useState<number>(defaultPkg.minPax);
  const [visitDate, setVisitDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 2);
    return tomorrow.toISOString().split('T')[0];
  });
  const [visitorName, setVisitorName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (initialPackageId) {
      const found = TOUR_PACKAGES.find((p) => p.id === initialPackageId);
      if (found) {
        setSelectedPkgId(found.id);
        setPax((prev) => Math.max(prev, found.minPax));
      }
    }
  }, [initialPackageId]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activePackage: TourPackage =
    TOUR_PACKAGES.find((p) => p.id === selectedPkgId) ?? TOUR_PACKAGES[0];

  const handleSelectPackage = (pkg: TourPackage) => {
    setSelectedPkgId(pkg.id);
    if (pax < pkg.minPax) {
      setPax(pkg.minPax);
    }
  };

  const totalEstimate = activePackage.pricePerPerson * pax;

  const formattedDate = visitDate
    ? new Date(`${visitDate}T00:00:00`).toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Belum ditentukan';

  const messageText = [
    `Halo pengelola ${VILLAGE_INFO.name}, saya ingin menanyakan ketersediaan & memesan wisata:`,
    ``,
    `• Nama: ${visitorName.trim() || '(Tulis nama Anda)'}`,
    `• Paket: ${activePackage.name}`,
    `• Tanggal Kunjungan: ${formattedDate}`,
    `• Jumlah Peserta: ${pax} orang`,
    `• Perkiraan Biaya: ${formatRupiah(totalEstimate)}`,
    notes.trim() ? `• Catatan: ${notes.trim()}` : null,
    ``,
    `Mohon informasi ketersediaan dan langkah konfirmasinya. Terima kasih!`,
  ]
    .filter(Boolean)
    .join('\n');

  const whatsappHref = buildWhatsAppUrl(messageText);

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(messageText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const todayMin = new Date().toISOString().split('T')[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#154212]/55 backdrop-blur-xs p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg bg-[#fef9f0] rounded-t-3xl sm:rounded-2xl border border-[#d9cbb7] shadow-leaf-lg max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-4 px-5 py-4 bg-[#ffffff] border-b border-[#e7e2d9]">
          <div>
            <h3
              id="booking-modal-title"
              className="font-display font-bold text-lg sm:text-xl text-[#154212]"
            >
              Pesan Wisata via WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-[#42493e]">
              Terhubung langsung dengan {VILLAGE_INFO.managerName}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup jendela pemesanan"
            className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center text-[#1d1c16] hover:bg-[#f2ede4] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-5 overflow-y-auto space-y-5">
          {/* Package Selection */}
          <div>
            <label className="block font-display font-semibold text-sm text-[#154212] mb-2">
              1. Pilih Paket Wisata
            </label>
            <div className="space-y-2">
              {TOUR_PACKAGES.map((pkg) => {
                const isSelected = pkg.id === activePackage.id;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => handleSelectPackage(pkg)}
                    className={`w-full min-h-[54px] px-4 py-3 rounded-xl border text-left flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#2d5a27] text-white border-[#2d5a27]'
                        : 'bg-[#ffffff] text-[#1d1c16] border-[#d9cbb7] hover:bg-[#f8f3ea]'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="font-display font-semibold text-sm sm:text-base truncate">
                        {pkg.name}
                      </div>
                      <div
                        className={`text-xs ${
                          isSelected ? 'text-[#bcf0ae]' : 'text-[#42493e]'
                        }`}
                      >
                        {pkg.duration} · Min. {pkg.minPax} orang
                      </div>
                    </div>
                    <div className="font-display font-bold text-sm sm:text-base shrink-0 tabular-nums">
                      {formatRupiah(pkg.pricePerPerson)}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Date & Pax Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="booking-date"
                className="block font-display font-semibold text-sm text-[#154212] mb-2"
              >
                2. Tanggal Kunjungan
              </label>
              <div className="relative">
                <Calendar
                  className="w-4 h-4 text-[#2d5a27] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="booking-date"
                  type="date"
                  min={todayMin}
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full min-h-[50px] pl-10 pr-3 py-2 rounded-xl bg-[#ffffff] border border-[#d9cbb7] text-base text-[#1d1c16] focus:outline-none focus:ring-2 focus:ring-[#2d5a27]"
                />
              </div>
            </div>

            <div>
              <span className="block font-display font-semibold text-sm text-[#154212] mb-2">
                3. Jumlah Peserta
              </span>
              <div className="flex items-center justify-between min-h-[50px] px-2 rounded-xl bg-[#ffffff] border border-[#d9cbb7]">
                <button
                  type="button"
                  onClick={() => setPax((prev) => Math.max(activePackage.minPax, prev - 1))}
                  disabled={pax <= activePackage.minPax}
                  aria-label="Kurangi jumlah peserta"
                  className="min-w-[44px] min-h-[44px] rounded-lg flex items-center justify-center text-[#154212] hover:bg-[#f2ede4] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Minus className="w-5 h-5" aria-hidden="true" />
                </button>
                <div className="flex items-center gap-1.5 font-display font-bold text-base text-[#1d1c16] tabular-nums">
                  <Users className="w-4 h-4 text-[#2d5a27]" aria-hidden="true" />
                  <span>{pax} orang</span>
                </div>
                <button
                  type="button"
                  onClick={() => setPax((prev) => Math.min(60, prev + 1))}
                  aria-label="Tambah jumlah peserta"
                  className="min-w-[44px] min-h-[44px] rounded-lg flex items-center justify-center text-[#154212] hover:bg-[#f2ede4] cursor-pointer"
                >
                  <Plus className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Visitor Name & Notes */}
          <div className="space-y-3">
            <div>
              <label
                htmlFor="booking-name"
                className="block font-display font-semibold text-sm text-[#154212] mb-1.5"
              >
                4. Nama Pemesan
              </label>
              <input
                id="booking-name"
                type="text"
                placeholder="Contoh: Ibu Dewi / Rombongan Keluarga"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                className="w-full min-h-[50px] px-4 py-2.5 rounded-xl bg-[#ffffff] border border-[#d9cbb7] text-base text-[#1d1c16] placeholder:text-[#72796e] focus:outline-none focus:ring-2 focus:ring-[#2d5a27]"
              />
            </div>

            <div>
              <label
                htmlFor="booking-notes"
                className="block font-display font-semibold text-sm text-[#154212] mb-1.5"
              >
                Catatan Khusus (Opsional)
              </label>
              <input
                id="booking-notes"
                type="text"
                placeholder="Misal: Membawa lansia / menu tidak pedas"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full min-h-[50px] px-4 py-2.5 rounded-xl bg-[#ffffff] border border-[#d9cbb7] text-base text-[#1d1c16] placeholder:text-[#72796e] focus:outline-none focus:ring-2 focus:ring-[#2d5a27]"
              />
            </div>
          </div>

          {/* Summary Box */}
          <div className="bg-[#f2ede4] rounded-xl p-4 border border-[#e7e2d9]">
            <div className="flex items-center justify-between gap-2 text-sm text-[#42493e] mb-1">
              <span>Perkiraan Total Biaya ({pax} orang)</span>
              <span className="font-display font-bold text-xl text-[#904d00] tabular-nums">
                {formatRupiah(totalEstimate)}
              </span>
            </div>
            <p className="text-xs text-[#42493e]">
              Pembayaran dilakukan setelah jadwal dikonfirmasi oleh pengelola desa. Tanpa biaya
              pemesanan online.
            </p>
          </div>
        </div>

        {/* Sticky Footer Actions */}
        <div className="p-4 sm:p-5 bg-[#ffffff] border-t border-[#e7e2d9] space-y-2.5">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[54px] px-5 py-3 rounded-xl bg-[#2d5a27] hover:bg-[#154212] text-white font-display font-bold text-base flex items-center justify-center gap-2.5 transition-colors shadow-sm"
          >
            <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Kirim Pesanan via WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={handleCopyMessage}
            className="w-full min-h-[46px] px-4 py-2 rounded-xl border border-[#d9cbb7] bg-[#fef9f0] hover:bg-[#f2ede4] text-[#154212] font-display font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#2d5a27]" aria-hidden="true" />
                <span>Teks Pesanan Tersalin</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" aria-hidden="true" />
                <span>Salin Format Pesan WhatsApp</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
