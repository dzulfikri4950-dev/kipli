import { useState } from 'react';
import { Compass, ExternalLink, Footprints, MapPin, Navigation } from 'lucide-react';
import { MAP_LANDMARKS, MapLandmark, VILLAGE_INFO } from '../data/villageData';

export function VillageMap() {
  const [selectedId, setSelectedId] = useState<string>(MAP_LANDMARKS[0].id);

  const selectedLandmark: MapLandmark =
    MAP_LANDMARKS.find((item) => item.id === selectedId) ?? MAP_LANDMARKS[0];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${VILLAGE_INFO.coordinates.lat},${VILLAGE_INFO.coordinates.lng}`;

  const getPinStyle = (type: MapLandmark['type'], isActive: boolean) => {
    if (isActive) {
      return 'bg-[#904d00] text-white ring-4 ring-[#ffdcc3] scale-110';
    }
    switch (type) {
      case 'alam':
        return 'bg-[#2d5a27] text-white hover:bg-[#154212]';
      case 'agro':
        return 'bg-[#3b6934] text-white hover:bg-[#154212]';
      case 'inap':
        return 'bg-[#6e3900] text-white hover:bg-[#904d00]';
      default:
        return 'bg-[#1d1c16] text-white hover:bg-[#2d5a27]';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
      {/* Interactive Topographic Trail Map */}
      <div className="lg:col-span-7 bg-[#ffffff] border border-[#e7e2d9] rounded-2xl p-4 sm:p-6 shadow-leaf flex flex-col justify-between">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#154212]">
              Peta Kawasan Desa Wisata Lereng Asri
            </h3>
            <p className="text-sm text-[#42493e]">
              Ketuk titik lokasi pada peta untuk melihat waktu tempuh &amp; akses jalan
            </p>
          </div>
          <span className="text-xs font-medium text-[#42493e] tabular-nums">
            {VILLAGE_INFO.coordinates.label}
          </span>
        </div>

        {/* SVG Illustrated Eco-Village Trail Canvas */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden border border-[#d9cbb7] bg-[#eef3e8]">
          <svg
            viewBox="0 0 800 500"
            className="w-full h-full block select-none"
            role="img"
            aria-label="Peta ilustrasi jalur wisata Desa Wisata Lereng Asri"
          >
            {/* Topographic elevation bands */}
            <rect width="800" height="500" fill="#eef4e7" />
            <path
              d="M0,380 Q200,320 420,355 T800,290 L800,500 L0,500 Z"
              fill="#e4eed9"
            />
            <path
              d="M0,250 Q180,190 390,220 T800,150 L800,500 L0,500 Z"
              fill="#dce8ce"
              opacity="0.7"
            />
            <path
              d="M460,0 Q570,110 800,130 L800,0 Z"
              fill="#d3e3c3"
            />

            {/* Contour lines */}
            <path
              d="M20,160 Q220,110 460,150 T780,90"
              fill="none"
              stroke="#c2d4b1"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            <path
              d="M40,420 Q280,370 520,400 T790,350"
              fill="none"
              stroke="#c2d4b1"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />

            {/* Mountain stream to Curug Embun */}
            <path
              d="M672,120 C650,190 610,220 620,290 C630,360 580,420 560,500"
              fill="none"
              stroke="#97c7cf"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.75"
            />
            <path
              d="M672,120 C650,190 610,220 620,290 C630,360 580,420 560,500"
              fill="none"
              stroke="#cfe9ee"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Main asphalt access road to Gate & Pendopo */}
            <path
              d="M0,450 Q80,410 128,370 T272,290"
              fill="none"
              stroke="#cbbca6"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M0,450 Q80,410 128,370 T272,290"
              fill="none"
              stroke="#f8f3ea"
              strokeWidth="2"
              strokeDasharray="8 6"
            />

            {/* Walking trails connecting landmarks */}
            <path
              d="M128,370 Q180,240 240,140"
              fill="none"
              stroke="#8b6b4a"
              strokeWidth="4"
              strokeDasharray="7 6"
              strokeLinecap="round"
            />
            <path
              d="M272,290 Q330,345 384,360"
              fill="none"
              stroke="#8b6b4a"
              strokeWidth="4"
              strokeDasharray="7 6"
              strokeLinecap="round"
            />
            <path
              d="M272,290 Q400,250 512,210 Q600,170 672,120"
              fill="none"
              stroke="#8b6b4a"
              strokeWidth="4"
              strokeDasharray="7 6"
              strokeLinecap="round"
            />

            {/* Subtle area labels */}
            <text x="58" y="472" fill="#42493e" fontSize="13" fontWeight="600">
              Arah Tol Bawen (45 mnt)
            </text>
            <text x="610" y="468" fill="#3b6934" fontSize="13" fontWeight="600">
              Terasering Sawah
            </text>
            <text x="112" y="92" fill="#2d5a27" fontSize="13" fontWeight="600">
              Zona Hutan Pinus (1.150 mdpl)
            </text>
          </svg>

          {/* Clickable Landmark Pins */}
          {MAP_LANDMARKS.map((landmark) => {
            const isActive = landmark.id === selectedId;
            return (
              <button
                key={landmark.id}
                type="button"
                onClick={() => setSelectedId(landmark.id)}
                style={{ left: `${landmark.x}%`, top: `${landmark.y}%` }}
                aria-label={`Pilih lokasi ${landmark.name}`}
                aria-pressed={isActive}
                className="absolute -translate-x-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#154212] rounded-full cursor-pointer"
              >
                <span
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm shadow-md transition-transform duration-150 ${getPinStyle(
                    landmark.type,
                    isActive
                  )}`}
                >
                  {landmark.code}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile & Desktop Quick Pin Selector Buttons */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {MAP_LANDMARKS.map((landmark) => {
            const isActive = landmark.id === selectedId;
            return (
              <button
                key={landmark.id}
                type="button"
                onClick={() => setSelectedId(landmark.id)}
                className={`min-h-[44px] px-3 py-2 rounded-xl text-left text-xs sm:text-sm font-medium transition-colors flex items-center gap-2 border cursor-pointer ${
                  isActive
                    ? 'bg-[#2d5a27] text-white border-[#2d5a27]'
                    : 'bg-[#f8f3ea] text-[#1d1c16] border-[#e7e2d9] hover:bg-[#ece8df]'
                }`}
              >
                <span className="font-display font-bold shrink-0 tabular-nums">
                  {landmark.code}.
                </span>
                <span className="truncate">{landmark.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: Selected Landmark Detail + Access Directions */}
      <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
        <div className="bg-[#ffffff] border border-[#e7e2d9] rounded-2xl p-6 shadow-leaf">
          <div className="flex items-center gap-2 text-xs font-medium text-[#904d00] mb-2">
            <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Titik Lokasi {selectedLandmark.code}</span>
            <span aria-hidden="true">·</span>
            <span>{selectedLandmark.walkTime}</span>
          </div>

          <h4 className="font-display font-bold text-xl text-[#154212] mb-2">
            {selectedLandmark.name}
          </h4>

          <p className="text-base text-[#42493e] leading-relaxed mb-4">
            {selectedLandmark.description}
          </p>

          <div className="pt-4 border-t border-[#e7e2d9] flex items-start gap-3 text-sm text-[#1d1c16]">
            <Footprints className="w-5 h-5 text-[#2d5a27] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <span className="font-semibold block text-[#154212]">Aksesibilitas Jalur</span>
              <span className="text-[#42493e]">{selectedLandmark.accessNote}</span>
            </div>
          </div>
        </div>

        {/* Driving Route & Google Maps Link */}
        <div className="bg-[#f8f3ea] border border-[#e7e2d9] rounded-2xl p-6 flex-1 flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#154212] mb-2">
              <Compass className="w-5 h-5 text-[#2d5a27]" aria-hidden="true" />
              <span>Alamat &amp; Panduan Rute Kendaraan</span>
            </div>
            <p className="text-sm sm:text-base text-[#1d1c16] font-medium mb-2">
              {VILLAGE_INFO.address}
            </p>
            <p className="text-sm text-[#42493e] leading-relaxed">
              Sekitar 45 menit dari Pintu Tol Bawen atau 1 jam dari pusat Kota Semarang. Jalan
              menuju gerbang desa sudah beraspal mulus dan dapat dilalui mobil pribadi maupun bus
              medium 30 kursi.
            </p>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[52px] px-5 py-3 rounded-xl bg-[#2d5a27] hover:bg-[#154212] text-white font-display font-semibold text-base flex items-center justify-center gap-2.5 transition-colors shadow-sm"
          >
            <Navigation className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap">Buka Rute di Google Maps</span>
            <ExternalLink className="w-4 h-4 shrink-0 opacity-85" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
