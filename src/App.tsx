import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Footprints,
  MapPin,
  MessageCircle,
  Phone,
  Users,
} from 'lucide-react';
import { DestinationModal } from './components/DestinationModal';
import { LightboxModal } from './components/LightboxModal';
import { ResilientImage } from './components/ResilientImage';
import { TestimonialsSection } from './components/TestimonialsSection';
import { VillageMap } from './components/VillageMap';
import { WhatsAppBookingModal } from './components/WhatsAppBookingModal';
import {
  buildWhatsAppUrl,
  DestinationCategory,
  DestinationItem,
  DESTINATIONS,
  formatRupiah,
  GALLERY_PHOTOS,
  TOUR_PACKAGES,
  VILLAGE_INFO,
} from './data/villageData';

const CATEGORY_TABS: { id: DestinationCategory; label: string }[] = [
  { id: 'semua', label: 'Semua Destinasi' },
  { id: 'alam', label: 'Wisata Alam' },
  { id: 'agro', label: 'Agrowisata' },
  { id: 'budaya', label: 'Budaya & Inap' },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<DestinationCategory>('semua');
  const [activeDestination, setActiveDestination] = useState<DestinationItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPackageId, setBookingPackageId] = useState<string | undefined>(undefined);

  const filteredDestinations =
    selectedCategory === 'semua'
      ? DESTINATIONS
      : DESTINATIONS.filter((item) => item.category === selectedCategory);

  const openWhatsAppBooking = (packageId?: string) => {
    setBookingPackageId(packageId);
    setBookingModalOpen(true);
  };

  const directConsultationHref = buildWhatsAppUrl(
    `Halo pengelola ${VILLAGE_INFO.name}, saya berencana berkunjung dan ingin menanyakan paket rombongan atau info kunjungan.`
  );

  return (
    <div className="min-h-screen bg-[#fef9f0] text-[#1d1c16] pb-20 md:pb-0">
      {/* Top Bar Contract: 3-zone header (Wordmark — Nav Links — Primary Action) */}
      <header className="relative md:sticky md:top-0 z-40 bg-[#fef9f0]/95 backdrop-blur-md border-b border-[#e7e2d9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single clean wordmark */}
          <a
            href="#beranda"
            className="font-display font-bold text-xl tracking-tight text-[#154212] whitespace-nowrap shrink-0"
          >
            Lereng Asri
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav
            aria-label="Navigasi utama"
            className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#42493e]"
          >
            <a
              href="#beranda"
              className="hover:text-[#154212] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 py-2"
            >
              Beranda
            </a>
            <a
              href="#destinasi"
              className="hover:text-[#154212] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 py-2"
            >
              Destinasi
            </a>
            <a
              href="#paket"
              className="hover:text-[#154212] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 py-2"
            >
              Paket
            </a>
            <a
              href="#galeri"
              className="hover:text-[#154212] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 py-2"
            >
              Galeri
            </a>
            <a
              href="#lokasi"
              className="hover:text-[#154212] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 py-2"
            >
              Lokasi
            </a>
          </nav>

          {/* Zone 3: 1 primary CTA */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => openWhatsAppBooking()}
              className="min-h-[44px] px-4 sm:px-5 py-2 rounded-xl bg-[#2d5a27] hover:bg-[#154212] text-white font-display font-semibold text-sm flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Pesan WhatsApp</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* 1. Beranda / Hero Section */}
        <section id="beranda" className="pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Hero Content */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <p className="text-sm font-semibold text-[#904d00] mb-3">
                  {VILLAGE_INFO.name} · {VILLAGE_INFO.altitude}
                </p>

                <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#154212] leading-[1.16] tracking-tight text-balance">
                  Sejuknya Alam Pegunungan &amp; Kehangatan Hidup Desa
                </h1>

                <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#42493e] leading-relaxed max-w-xl">
                  Nikmati pagi berkabut di hutan pinus, kesegaran air terjun alami, belajar menyangrai
                  kopi bersama petani, dan bersantap nasi liwet hangat di saung tepi sawah. Ramah
                  untuk anak-anak maupun orang tua.
                </p>

                {/* Primary & Secondary Touch-Friendly Buttons */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3.5">
                  <button
                    type="button"
                    onClick={() => openWhatsAppBooking()}
                    className="min-h-[54px] px-6 py-3.5 rounded-xl bg-[#2d5a27] hover:bg-[#154212] text-white font-display font-bold text-base flex items-center justify-center gap-2.5 transition-colors shadow-leaf cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <span className="whitespace-nowrap">Pesan Wisata via WhatsApp</span>
                  </button>

                  <a
                    href="#paket"
                    className="min-h-[54px] px-6 py-3.5 rounded-xl border border-[#2d5a27] bg-[#ffffff] hover:bg-[#f2ede4] text-[#154212] font-display font-semibold text-base flex items-center justify-center gap-2 transition-colors"
                  >
                    <span className="whitespace-nowrap">Lihat Paket &amp; Harga</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Hero Main Photo */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[440px] rounded-2xl overflow-hidden border border-[#e7e2d9] shadow-leaf bg-[#e7e2d9]">
                  <ResilientImage
                    src={VILLAGE_INFO.heroImage}
                    alt="Pemandangan pagi Desa Wisata Lereng Asri dengan terasering hijau dan rumah kayu tradisional"
                    fallbackTitle="Desa Wisata Lereng Asri"
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-[#154212]/85 via-[#154212]/40 to-transparent text-white">
                    <p className="font-display font-semibold text-sm sm:text-base">
                      Gardu Pandang Terasering Lereng Asri
                    </p>
                    <p className="text-xs sm:text-sm text-[#f5f0e7]/90 mt-0.5">
                      Buka {VILLAGE_INFO.openHours} · Kab. Semarang, Jawa Tengah
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4-Column Quick Info Strip below Hero Split */}
            <div className="mt-8 sm:mt-10 bg-[#ffffff] border border-[#e7e2d9] rounded-2xl shadow-leaf grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e7e2d9]">
              <div className="p-4 sm:p-6">
                <span className="block text-xs sm:text-sm text-[#42493e]">Udara Pegunungan</span>
                <span className="mt-1 block font-display font-bold text-lg sm:text-xl text-[#154212] tabular-nums">
                  1.150 mdpl
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <span className="block text-xs sm:text-sm text-[#42493e]">Jarak dari Tol Bawen</span>
                <span className="mt-1 block font-display font-bold text-lg sm:text-xl text-[#154212] tabular-nums">
                  45 Menit
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <span className="block text-xs sm:text-sm text-[#42493e]">Penilaian Tamu</span>
                <span className="mt-1 block font-display font-bold text-lg sm:text-xl text-[#904d00] tabular-nums">
                  4,9 / 5,0 (340+)
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <span className="block text-xs sm:text-sm text-[#42493e]">Tiket Wisata Alam</span>
                <span className="mt-1 block font-display font-bold text-lg sm:text-xl text-[#154212] tabular-nums">
                  Mulai Rp15.000
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Daftar Destinasi */}
        <section
          id="destinasi"
          aria-labelledby="destinasi-heading"
          className="py-12 sm:py-18 bg-[#f8f3ea] border-y border-[#e7e2d9]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold text-[#904d00] mb-2">Daftar Destinasi</p>
                <h2
                  id="destinasi-heading"
                  className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#154212] text-balance"
                >
                  Tempat Pilihan untuk Menikmati Alam &amp; Budaya Desa
                </h2>
              </div>

              {/* Interactive Category Filter Tabs */}
              <div
                role="tablist"
                aria-label="Filter kategori destinasi"
                className="flex items-center gap-2 overflow-x-auto pb-1"
              >
                {CATEGORY_TABS.map((tab) => {
                  const isActive = selectedCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedCategory(tab.id)}
                      className={`min-h-[44px] px-4 py-2 rounded-xl font-display font-semibold text-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#2d5a27] text-white'
                          : 'bg-[#ffffff] text-[#1d1c16] border border-[#d9cbb7] hover:bg-[#ece8df]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Destination Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDestinations.map((dest) => (
                <article
                  key={dest.id}
                  className="bg-[#ffffff] border border-[#e7e2d9] rounded-2xl overflow-hidden shadow-leaf flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[4/3] w-full bg-[#e7e2d9] overflow-hidden">
                      <ResilientImage
                        src={dest.image}
                        alt={dest.name}
                        fallbackTitle={dest.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                      />
                    </div>

                    <div className="p-5 sm:p-6">
                      {/* Clean unboxed metadata */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-[#42493e] mb-2">
                        <span className="font-semibold text-[#904d00]">{dest.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{dest.duration}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-semibold text-[#154212] tabular-nums">
                          {dest.ticketPrice}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#154212] mb-2.5">
                        {dest.name}
                      </h3>

                      <p className="text-base text-[#42493e] leading-relaxed mb-4">
                        {dest.shortDesc}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-[#1d1c16]">
                        <Footprints className="w-4 h-4 text-[#2d5a27] shrink-0" aria-hidden="true" />
                        <span>{dest.accessibility}</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveDestination(dest)}
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-[#2d5a27] bg-[#fef9f0] hover:bg-[#f2ede4] text-[#154212] font-display font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Lihat Info Jalur &amp; Fasilitas</span>
                      <ChevronRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Paket Wisata dan Harga */}
        <section id="paket" aria-labelledby="paket-heading" className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-2xl mb-10">
              <p className="text-sm font-semibold text-[#904d00] mb-2">Paket Wisata &amp; Harga</p>
              <h2
                id="paket-heading"
                className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#154212] text-balance"
              >
                Pilihan Paket Transparan Tanpa Biaya Tersembunyi
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#42493e] leading-relaxed">
                Seluruh paket sudah termasuk tiket masuk, pemandu warga lokal, dan sajian khas desa.
                Pilih paket lalu pesan langsung via WhatsApp tanpa uang muka rumit.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {TOUR_PACKAGES.map((pkg) => (
                <article
                  key={pkg.id}
                  className={`rounded-2xl overflow-hidden flex flex-col justify-between shadow-leaf border ${
                    pkg.recommended
                      ? 'bg-[#ffffff] border-[#2d5a27] ring-1 ring-[#2d5a27]'
                      : 'bg-[#ffffff] border-[#e7e2d9]'
                  }`}
                >
                  <div>
                    <div className="aspect-[4/3] w-full bg-[#e7e2d9] overflow-hidden">
                      <ResilientImage
                        src={pkg.image}
                        alt={pkg.name}
                        fallbackTitle={pkg.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6">
                      {/* Unboxed kicker */}
                      <div className="text-xs sm:text-sm font-semibold text-[#904d00] mb-1.5">
                        {pkg.recommended ? 'Pilihan Favorit Keluarga · ' : ''}
                        {pkg.duration}
                      </div>

                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#154212]">
                        {pkg.name}
                      </h3>
                      <p className="text-sm text-[#42493e] mt-1">{pkg.subtitle}</p>

                      {/* Price Display */}
                      <div className="mt-4 pb-4 border-b border-[#e7e2d9] flex items-baseline gap-2">
                        <span className="font-display font-bold text-2xl sm:text-3xl text-[#904d00] tabular-nums">
                          {formatRupiah(pkg.pricePerPerson)}
                        </span>
                        <span className="text-sm text-[#42493e]">
                          / orang (Min. {pkg.minPax} org)
                        </span>
                      </div>

                      {/* Included list */}
                      <ul className="mt-4 space-y-2.5">
                        {pkg.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm sm:text-base text-[#1d1c16] leading-snug"
                          >
                            <CheckCircle2
                              className="w-5 h-5 text-[#2d5a27] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 space-y-3">
                    <p className="text-xs text-[#42493e]">{pkg.notes}</p>
                    <button
                      type="button"
                      onClick={() => openWhatsAppBooking(pkg.id)}
                      className="w-full min-h-[52px] px-5 py-3 rounded-xl bg-[#2d5a27] hover:bg-[#154212] text-white font-display font-bold text-base flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                      <span>Pesan Paket Ini</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Custom Group Inquiry Strip */}
            <div className="mt-8 bg-[#f2ede4] border border-[#e7e2d9] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#154212] mb-1">
                  <Users className="w-4 h-4 text-[#2d5a27]" aria-hidden="true" />
                  <span>Rombongan Sekolah, Komunitas, atau Kantor?</span>
                </div>
                <p className="text-base text-[#42493e]">
                  Tersedia penyesuaian jadwal dan harga khusus untuk rombongan di atas 20 orang.
                  Konsultasikan kebutuhan Anda langsung bersama pengelola desa.
                </p>
              </div>
              <a
                href={directConsultationHref}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[52px] px-6 py-3 rounded-xl border border-[#2d5a27] bg-[#ffffff] hover:bg-[#f8f3ea] text-[#154212] font-display font-bold text-base flex items-center justify-center gap-2 transition-colors shrink-0"
              >
                <MessageCircle className="w-5 h-5 text-[#2d5a27] shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">Tanya Paket Rombongan</span>
              </a>
            </div>
          </div>
        </section>

        {/* 4. Testimoni Pengunjung (Claim-to-Proof Adjacency) */}
        <TestimonialsSection />

        {/* 5. Galeri Foto Desa */}
        <section id="galeri" aria-labelledby="galeri-heading" className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-2xl mb-10">
              <p className="text-sm font-semibold text-[#904d00] mb-2">Galeri Suasana Desa</p>
              <h2
                id="galeri-heading"
                className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#154212] text-balance"
              >
                Potret Nyata Alam, Kuliner &amp; Keramahtamahan Warga
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#42493e]">
                Ketuk salah satu foto untuk memperbesar dan membaca cerita di setiap sudut desa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {GALLERY_PHOTOS.map((photo, index) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className="group text-left bg-[#ffffff] border border-[#e7e2d9] rounded-2xl overflow-hidden shadow-leaf focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d5a27] cursor-pointer"
                >
                  <div className="aspect-[4/3] w-full bg-[#e7e2d9] overflow-hidden">
                    <ResilientImage
                      src={photo.image}
                      alt={photo.title}
                      fallbackTitle={photo.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-xs font-medium text-[#904d00]">{photo.location}</p>
                    <h3 className="font-display font-bold text-lg text-[#154212] mt-0.5">
                      {photo.title}
                    </h3>
                    <p className="text-sm text-[#42493e] mt-1 line-clamp-2">{photo.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Peta Lokasi & Panduan Akses */}
        <section
          id="lokasi"
          aria-labelledby="lokasi-heading"
          className="py-14 sm:py-20 bg-[#f8f3ea] border-t border-[#e7e2d9]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-2xl mb-10">
              <p className="text-sm font-semibold text-[#904d00] mb-2">Peta Lokasi &amp; Akses</p>
              <h2
                id="lokasi-heading"
                className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#154212] text-balance"
              >
                Mudah Dijangkau dari Pusat Kota dengan Peta Area Lengkap
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#42493e]">
                Pelajari jarak antar destinasi di dalam desa sebelum berangkat agar perjalanan
                keluarga lebih nyaman.
              </p>
            </div>

            <VillageMap />
          </div>
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="bg-[#154212] text-[#f5f0e7] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <p className="font-display font-bold text-xl text-white">{VILLAGE_INFO.name}</p>
            <p className="mt-3 text-sm sm:text-base text-[#f5f0e7]/85 leading-relaxed max-w-md">
              Dikelola secara gotong royong oleh Kelompok Sadar Wisata (Pokdarwis) dan warga Dusun
              Lereng Asri untuk wisata alam yang lestari dan ramah keluarga.
            </p>
          </div>

          <div className="md:col-span-4 space-y-2.5 text-sm sm:text-base">
            <p className="font-display font-semibold text-white">Kontak &amp; Jam Layanan</p>
            <div className="flex items-start gap-2.5 text-[#f5f0e7]/85">
              <MapPin className="w-4 h-4 shrink-0 mt-1 text-[#a1d494]" aria-hidden="true" />
              <span>{VILLAGE_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#f5f0e7]/85">
              <Clock className="w-4 h-4 shrink-0 text-[#a1d494]" aria-hidden="true" />
              <span>{VILLAGE_INFO.openHours}</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#f5f0e7]/85">
              <Phone className="w-4 h-4 shrink-0 text-[#a1d494]" aria-hidden="true" />
              <span className="tabular-nums">{VILLAGE_INFO.whatsappDisplay}</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2 text-sm sm:text-base">
            <p className="font-display font-semibold text-white">Pintasan Halaman</p>
            <ul className="space-y-1.5 text-[#f5f0e7]/85">
              <li>
                <a href="#destinasi" className="hover:text-white hover:underline">
                  Daftar Destinasi
                </a>
              </li>
              <li>
                <a href="#paket" className="hover:text-white hover:underline">
                  Paket Wisata &amp; Harga
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-white hover:underline">
                  Testimoni Pengunjung
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-white hover:underline">
                  Galeri Foto
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-white hover:underline">
                  Peta Lokasi
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-10 pt-6 border-t border-white/15 text-xs sm:text-sm text-[#f5f0e7]/75 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} {VILLAGE_INFO.name}. Dikelola oleh Warga Desa.</span>
          <span>Wisata Alam Berkelanjutan · Jawa Tengah</span>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Bar (Compact < 9% of mobile viewport height) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#fef9f0]/95 backdrop-blur-md border-t border-[#d9cbb7] px-4 py-2.5 shadow-leaf-lg">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="block text-[11px] text-[#42493e]">Paket wisata mulai</span>
            <span className="block font-display font-bold text-base text-[#904d00] tabular-nums">
              Rp135.000/org
            </span>
          </div>
          <button
            type="button"
            onClick={() => openWhatsAppBooking()}
            className="min-h-[48px] px-5 py-2.5 rounded-xl bg-[#2d5a27] hover:bg-[#154212] text-white font-display font-bold text-sm flex items-center justify-center gap-2 transition-colors shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap">Pesan via WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Interactive Modals */}
      <DestinationModal
        destination={activeDestination}
        onClose={() => setActiveDestination(null)}
        onBookWhatsApp={() => openWhatsAppBooking()}
      />

      <LightboxModal
        photos={GALLERY_PHOTOS}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={(nextIdx) => setLightboxIndex(nextIdx)}
      />

      <WhatsAppBookingModal
        isOpen={bookingModalOpen}
        initialPackageId={bookingPackageId}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
