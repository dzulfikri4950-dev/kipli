import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, MessageSquarePlus, Star } from 'lucide-react';
import {
  INITIAL_TESTIMONIALS,
  TestimonialItem,
  TOUR_PACKAGES,
} from '../data/villageData';

const STORAGE_KEY = 'lereng_asri_testimonials_v1';

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as TestimonialItem[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Ignore storage read errors
    }
    return INITIAL_TESTIMONIALS;
  });

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [packageVisited, setPackageVisited] = useState(TOUR_PACKAGES[1].name);
  const [rating, setRating] = useState(5);
  const [quote, setQuote] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedNotice, setSubmittedNotice] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonials));
    } catch {
      // Ignore storage write errors
    }
  }, [testimonials]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !origin.trim() || quote.trim().length < 15) {
      setErrorMsg('Mohon lengkapi nama, asal kota, dan cerita pengalaman minimal 15 karakter.');
      return;
    }

    const nowLabel = new Date().toLocaleDateString('id-ID', {
      month: 'long',
      year: 'numeric',
    });

    const newItem: TestimonialItem = {
      id: `testi-${Date.now()}`,
      name: name.trim(),
      origin: origin.trim(),
      packageVisited,
      visitDate: nowLabel,
      rating,
      quote: quote.trim(),
    };

    setTestimonials((prev) => [newItem, ...prev]);
    setName('');
    setOrigin('');
    setQuote('');
    setRating(5);
    setErrorMsg('');
    setShowForm(false);
    setSubmittedNotice(true);
    setTimeout(() => setSubmittedNotice(false), 4500);
  };

  return (
    <section
      id="testimoni"
      aria-labelledby="testimoni-heading"
      className="py-14 sm:py-20 bg-[#f8f3ea] border-y border-[#e7e2d9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#904d00] mb-2">
              Cerita &amp; Testimoni Pengunjung
            </p>
            <h2
              id="testimoni-heading"
              className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#154212] text-balance"
            >
              Dipercaya Ratusan Keluarga &amp; Rombongan Wisatawan
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#42493e] leading-relaxed">
              Rata-rata penilaian{' '}
              <span className="font-semibold text-[#154212] tabular-nums">4,9 dari 5,0</span>{' '}
              berdasarkan lebih dari <span className="tabular-nums font-semibold">340</span>{' '}
              kunjungan tamu yang merasakan langsung keramahan warga Lereng Asri.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setShowForm((prev) => !prev);
              setErrorMsg('');
            }}
            className="min-h-[48px] px-5 py-3 rounded-xl border border-[#2d5a27] bg-[#ffffff] hover:bg-[#f2ede4] text-[#154212] font-display font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 transition-colors shrink-0 cursor-pointer"
          >
            <MessageSquarePlus className="w-5 h-5 text-[#2d5a27]" aria-hidden="true" />
            <span>{showForm ? 'Tutup Formulir Ulasan' : 'Bagikan Pengalaman Anda'}</span>
          </button>
        </div>

        {/* Success Notice */}
        {submittedNotice && (
          <div
            role="status"
            className="mb-8 p-4 rounded-xl bg-[#ffffff] border border-[#2d5a27] text-[#154212] flex items-center gap-3 shadow-leaf"
          >
            <CheckCircle2 className="w-5 h-5 text-[#2d5a27] shrink-0" aria-hidden="true" />
            <p className="text-sm sm:text-base font-medium">
              Terima kasih! Ulasan kunjungan Anda telah ditambahkan dan tampil di daftar testimoni.
            </p>
          </div>
        )}

        {/* Add Review Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mb-10 bg-[#ffffff] border border-[#d9cbb7] rounded-2xl p-5 sm:p-8 shadow-leaf space-y-5"
          >
            <h3 className="font-display font-bold text-xl text-[#154212]">
              Tulis Kesan Kunjungan Anda
            </h3>

            {errorMsg && (
              <p
                role="alert"
                className="text-sm font-medium text-[#93000a] bg-[#ffdad6] px-4 py-3 rounded-xl"
              >
                {errorMsg}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="review-name"
                  className="block text-sm font-semibold text-[#154212] mb-1.5"
                >
                  Nama Anda
                </label>
                <input
                  id="review-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Bapak Rudi Hartono"
                  className="w-full min-h-[50px] px-4 py-2.5 rounded-xl bg-[#fef9f0] border border-[#d9cbb7] text-base text-[#1d1c16] focus:outline-none focus:ring-2 focus:ring-[#2d5a27]"
                />
              </div>

              <div>
                <label
                  htmlFor="review-origin"
                  className="block text-sm font-semibold text-[#154212] mb-1.5"
                >
                  Asal Kota / Komunitas
                </label>
                <input
                  id="review-origin"
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="Contoh: Kota Salatiga"
                  className="w-full min-h-[50px] px-4 py-2.5 rounded-xl bg-[#fef9f0] border border-[#d9cbb7] text-base text-[#1d1c16] focus:outline-none focus:ring-2 focus:ring-[#2d5a27]"
                />
              </div>

              <div>
                <label
                  htmlFor="review-package"
                  className="block text-sm font-semibold text-[#154212] mb-1.5"
                >
                  Paket yang Dikunjungi
                </label>
                <select
                  id="review-package"
                  value={packageVisited}
                  onChange={(e) => setPackageVisited(e.target.value)}
                  className="w-full min-h-[50px] px-4 py-2.5 rounded-xl bg-[#fef9f0] border border-[#d9cbb7] text-base text-[#1d1c16] focus:outline-none focus:ring-2 focus:ring-[#2d5a27]"
                >
                  {TOUR_PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.name}>
                      {pkg.name}
                    </option>
                  ))}
                  <option value="Kunjungan Reguler Harian">Kunjungan Reguler Harian</option>
                </select>
              </div>
            </div>

            <div>
              <span className="block text-sm font-semibold text-[#154212] mb-2">
                Penilaian Kepuasan
              </span>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((starValue) => (
                  <button
                    key={starValue}
                    type="button"
                    onClick={() => setRating(starValue)}
                    aria-label={`Beri ${starValue} bintang`}
                    className="min-w-[44px] min-h-[44px] rounded-xl flex items-center justify-center border border-[#e7e2d9] bg-[#fef9f0] hover:bg-[#f2ede4] cursor-pointer"
                  >
                    <Star
                      className={`w-5 h-5 ${
                        starValue <= rating
                          ? 'fill-[#fe932c] text-[#904d00]'
                          : 'text-[#c2c9bb]'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                ))}
                <span className="ml-2 text-sm font-medium text-[#42493e] tabular-nums">
                  {rating} / 5 bintang
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="review-quote"
                className="block text-sm font-semibold text-[#154212] mb-1.5"
              >
                Cerita Pengalaman Anda
              </label>
              <textarea
                id="review-quote"
                rows={3}
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                placeholder="Ceritakan suasana alam, keramahan pemandu, atau fasilitas desa yang paling berkesan..."
                className="w-full p-4 rounded-xl bg-[#fef9f0] border border-[#d9cbb7] text-base text-[#1d1c16] focus:outline-none focus:ring-2 focus:ring-[#2d5a27]"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="min-h-[48px] px-5 py-2.5 rounded-xl border border-[#d9cbb7] text-[#42493e] font-semibold text-sm hover:bg-[#f2ede4] cursor-pointer"
              >
                Batal
              </button>
              <button
                type="submit"
                className="min-h-[48px] px-6 py-2.5 rounded-xl bg-[#2d5a27] hover:bg-[#154212] text-white font-display font-bold text-base transition-colors cursor-pointer"
              >
                Kirim Testimoni
              </button>
            </div>
          </form>
        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="bg-[#ffffff] border border-[#e7e2d9] rounded-2xl p-6 sm:p-7 shadow-leaf flex flex-col justify-between gap-5"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-1" aria-label={`Penilaian ${item.rating} dari 5 bintang`}>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-4 h-4 ${
                          idx < item.rating
                            ? 'fill-[#fe932c] text-[#904d00]'
                            : 'text-[#c2c9bb]'
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                    <span className="ml-2 text-xs font-semibold text-[#904d00] tabular-nums">
                      {item.rating},0
                    </span>
                  </div>
                  <span className="text-xs text-[#42493e]">{item.visitDate}</span>
                </div>

                <blockquote className="text-base sm:text-lg text-[#1d1c16] leading-relaxed">
                  “{item.quote}”
                </blockquote>
              </div>

              <footer className="pt-4 border-t border-[#e7e2d9]">
                <p className="font-display font-bold text-base text-[#154212]">
                  {item.name}
                </p>
                <p className="text-sm text-[#42493e] mt-0.5">
                  {item.origin} <span aria-hidden="true">·</span> {item.packageVisited}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
