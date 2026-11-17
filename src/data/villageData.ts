export type DestinationCategory = 'semua' | 'alam' | 'agro' | 'budaya';

export interface DestinationItem {
  id: string;
  name: string;
  category: Exclude<DestinationCategory, 'semua'>;
  categoryLabel: string;
  ticketPrice: string;
  duration: string;
  accessibility: string;
  openHours: string;
  shortDesc: string;
  fullDesc: string;
  facilities: string[];
  image: string;
}

export interface TourPackage {
  id: string;
  name: string;
  subtitle: string;
  pricePerPerson: number;
  minPax: number;
  duration: string;
  recommended?: boolean;
  includes: string[];
  notes: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  location: string;
  caption: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  origin: string;
  packageVisited: string;
  visitDate: string;
  rating: number;
  quote: string;
}

export interface MapLandmark {
  id: string;
  code: string;
  name: string;
  type: 'pusat' | 'alam' | 'agro' | 'inap';
  x: number;
  y: number;
  walkTime: string;
  accessNote: string;
  description: string;
}

export const VILLAGE_INFO = {
  name: 'Desa Wisata Lereng Asri',
  shortName: 'Lereng Asri',
  whatsappNumber: '6281234567890',
  whatsappDisplay: '+62 812-3456-7890',
  managerName: 'Pak Hendra (Koordinator Pokdarwis)',
  address: 'Dusun Lereng Asri RT 02/RW 04, Kec. Banyubiru, Kab. Semarang, Jawa Tengah 50664',
  coordinates: {
    lat: -7.2841,
    lng: 110.3592,
    label: '7°17\'02.8"S 110°21\'33.1"E',
  },
  openHours: 'Setiap hari, 07.00 – 17.00 WIB',
  altitude: '1.150 mdpl',
  heroImage: '/src/assets/images/hero_lereng_asri_1794887358572.jpg',
};

export const DESTINATIONS: DestinationItem[] = [
  {
    id: 'curug-embun',
    name: 'Curug Embun Asri',
    category: 'alam',
    categoryLabel: 'Wisata Alam',
    ticketPrice: 'Rp15.000',
    duration: '15 menit jalan kaki',
    accessibility: 'Jalur tangga batu berpagar bambu',
    openHours: '07.00 – 16.30 WIB',
    shortDesc:
      'Air terjun jernih setinggi 18 meter di tengah rimbunnya pakis hutan dan pepohonan bambu yang sejuk.',
    fullDesc:
      'Curug Embun Asri bersumber langsung dari mata air pegunungan yang jernih dan segar sepanjang tahun. Kolam alami di bawahnya dangkal dan aman untuk bermain air di tepian, dilengkapi gazebo istirahat, ruang bilas bersih, serta warung minuman hangat milik warga.',
    facilities: ['Ruang bilas & toilet bersih', 'Gazebo bambu', 'Penyewaan tikar & jaket pelampung anak', 'Penjaga pos keamanan'],
    image: '/src/assets/images/dest_curug_embun_1794887359335.jpg',
  },
  {
    id: 'bukit-pinus',
    name: 'Bukit Pinus & Kabut Pagi',
    category: 'alam',
    categoryLabel: 'Wisata Alam',
    ticketPrice: 'Rp20.000',
    duration: '10 menit dari area parkir',
    accessibility: 'Jalur papan kayu datar, ramah anak & lansia',
    openHours: '05.30 – 17.00 WIB',
    shortDesc:
      'Hutan pinus teduh dengan jembatan kayu landai, tempat terbaik menikmati udara segar dan sinar matahari pagi.',
    fullDesc:
      'Jalur papan kayu sepanjang 600 meter di Bukit Pinus dirancang landai tanpa tanjakan terjal, sehingga nyaman dilalui balita maupun orang tua. Pengunjung dapat bersantai di saung bambu sambil menikmati wedang jahe dan pemandangan lembah berkabut.',
    facilities: ['Jembatan kayu landai', 'Gazebo saung anyaman', 'Area piknik keluarga', 'Mushola kayu asri'],
    image: '/src/assets/images/dest_bukit_pinus_1794887359483.jpg',
  },
  {
    id: 'kebun-kopi',
    name: 'Kebun Kopi & Terasering Organik',
    category: 'agro',
    categoryLabel: 'Agrowisata',
    ticketPrice: 'Rp25.000',
    duration: 'Tur edukasi 60–90 menit',
    accessibility: 'Jalan setapak kebun yang rapi',
    openHours: '08.00 – 16.00 WIB',
    shortDesc:
      'Belajar memetik biji kopi arabika merah, menanam sayuran organik, hingga menyeduh kopi khas lereng gunung.',
    fullDesc:
      'Didampingi petani lokal, wisatawan diajak mengenal budidaya kopi lereng gunung tanpa pestisida kimia. Pengunjung bisa ikut memanen buah kopi merah saat musim panen, mencoba proses sangrai tradisional dengan wajan tanah liat, dan mencicipi seduhan kopi hangat langsung di saung kebun.',
    facilities: ['Pemandu petani lokal', 'Caping & keranjang panen', 'Workshop sangrai kopi', 'Oleh-oleh kopi kemasan warga'],
    image: '/src/assets/images/dest_kebun_kopi_1794887360294.jpg',
  },
  {
    id: 'pendopo-homestay',
    name: 'Pendopo Budaya & Homestay Warga',
    category: 'budaya',
    categoryLabel: 'Budaya & Inap',
    ticketPrice: 'Mulai Rp250.000/malam',
    duration: 'Menginap atau kunjungan harian',
    accessibility: 'Akses mobil hingga depan pendopo',
    openHours: 'Check-in 13.00 · Check-out 12.00 WIB',
    shortDesc:
      'Rumah kayu berarsitektur tradisional dengan teras teduh, taman bunga desa, dan sajian kuliner rumahan hangat.',
    fullDesc:
      'Lebih dari 12 rumah warga telah ditata menjadi homestay bersih dan nyaman bergaya pendopo Jawa. Tamu disambut langsung oleh pemilik rumah dengan jamuan teh tubruk dan jajanan pasar, serta dapat mengikuti kegiatan membatik atau menganyam bambu di halaman pendopo.',
    facilities: ['Kamar bersih & air hangat', 'Sarapan masakan rumahan', 'Pendopo pertemuan keluarga', 'Parkir mobil & bus aman'],
    image: '/src/assets/images/dest_homestay_pendopo_1794887360125.jpg',
  },
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'sehari-alam',
    name: 'Paket Sehari Jelajah Alam',
    subtitle: 'Cocok untuk pasangan & teman perjalanan singkat',
    pricePerPerson: 135000,
    minPax: 2,
    duration: '5 Jam (08.00 – 13.00 WIB)',
    includes: [
      'Tiket masuk Curug Embun Asri & Bukit Pinus',
      'Pemandu lokal ramah selama perjalanan',
      '1x makan siang Nasi Liwet Tampah di saung sawah',
      '1 gelas kopi seduh atau teh jahe hangat',
      'Dokumentasi foto keluarga di gardu pandang',
    ],
    notes: 'Tersedia setiap hari. Anak usia di bawah 5 tahun gratis tiket masuk.',
    image: '/src/assets/images/dest_curug_embun_1794887359335.jpg',
  },
  {
    id: 'keluarga-edukasi',
    name: 'Paket Keluarga & Edukasi Kopi',
    subtitle: 'Paling banyak dipilih keluarga & rombongan kantor',
    pricePerPerson: 185000,
    minPax: 4,
    duration: '7 Jam (08.00 – 15.00 WIB)',
    recommended: true,
    includes: [
      'Seluruh akses Wisata Alam & Agrowisata Kebun Kopi',
      'Praktik petik, sangrai tradisional & seduh kopi desa',
      'Kegiatan edukasi anyaman bambu ramah anak',
      'Makan siang Nasi Liwet Tampah + camilan sore pisang goreng',
      'Souvenir 100g kopi bubuk atau bibit tanaman hias per keluarga',
    ],
    notes: 'Jalur landai dan aman untuk anak-anak maupun lansia.',
    image: '/src/assets/images/galeri_kuliner_desa_1794887360520.jpg',
  },
  {
    id: 'menginap-2h1m',
    name: 'Paket Menginap 2H1M Homestay',
    subtitle: 'Pengalaman penuh hidup tenang bersama warga desa',
    pricePerPerson: 420000,
    minPax: 2,
    duration: '2 Hari 1 Malam',
    includes: [
      'Menginap 1 malam di Homestay Pendopo (air hangat & selimut tebal)',
      '3x makan masakan rumahan hangat & jamuan selamat datang',
      'Jalan pagi melihat matahari terbit & kabut di Bukit Pinus',
      'Trekking santai ke Curug Embun & kunjungan Kebun Kopi',
      'Api unggun hangat & jagung bakar di halaman pendopo (malam hari)',
    ],
    notes: 'Kapasitas homestay tersedia untuk keluarga kecil hingga rombongan 30 orang.',
    image: '/src/assets/images/dest_homestay_pendopo_1794887360125.jpg',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Matahari Terbit di Gardu Pandang',
    location: 'Dusun Atas · 06.15 WIB',
    caption: 'Kabut tipis menyelimuti terasering hijau dan atap rumah kayu warga saat matahari terbit.',
    image: '/src/assets/images/hero_lereng_asri_1794887358572.jpg',
  },
  {
    id: 'gal-2',
    title: 'Kesegaran Curug Embun Asri',
    location: 'Zona Lembah Timur',
    caption: 'Air terjun alami yang jernih dan sejuk dikelilingi rimbun pakis serta bambu hutan.',
    image: '/src/assets/images/dest_curug_embun_1794887359335.jpg',
  },
  {
    id: 'gal-3',
    title: 'Jalur Papan Kayu Bukit Pinus',
    location: 'Bukit Pinus · Jalur Ramah Keluarga',
    caption: 'Jalan setapak kayu yang bersih dan teduh di bawah tegakan pinus yang menjulang.',
    image: '/src/assets/images/dest_bukit_pinus_1794887359483.jpg',
  },
  {
    id: 'gal-4',
    title: 'Panen Kopi Lereng Gunung',
    location: 'Kebun Organik Blok B',
    caption: 'Warga memanen buah kopi merah matang dengan latar belakang pegunungan yang asri.',
    image: '/src/assets/images/dest_kebun_kopi_1794887360294.jpg',
  },
  {
    id: 'gal-5',
    title: 'Sambutan Hangat di Pendopo',
    location: 'Homestay Warga Lereng Asri',
    caption: 'Halaman berbatu alami dan pendopo kayu tempat tamu bersantai menikmati suasana desa.',
    image: '/src/assets/images/dest_homestay_pendopo_1794887360125.jpg',
  },
  {
    id: 'gal-6',
    title: 'Sajian Nasi Liwet Tampah',
    location: 'Saung Kuliner Tepi Sawah',
    caption: 'Makan siang bersama di atas daun pisang segar dengan ayam kampung bakar dan sambal terasi.',
    image: '/src/assets/images/galeri_kuliner_desa_1794887360520.jpg',
  },
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Ibu Ratna Dewi & Keluarga',
    origin: 'Jakarta Selatan',
    packageVisited: 'Paket Keluarga & Edukasi Kopi',
    visitDate: 'Oktober 2026',
    rating: 5,
    quote:
      'Anak-anak paling senang belajar menyangrai kopi dan makan nasi liwet di saung bambu. Jalur ke Bukit Pinus sangat landai dan aman untuk ibu saya yang sudah lansia, pemandunya juga sabar sekali menjelaskan setiap tanaman.',
  },
  {
    id: 'testi-2',
    name: 'Mas Bagus Prasetyo',
    origin: 'Komunitas Gowes Semarang',
    packageVisited: 'Paket Sehari Jelajah Alam',
    visitDate: 'September 2026',
    rating: 5,
    quote:
      'Udara jam 7 pagi di Bukit Pinus benar-benar segar tanpa polusi. Air Curug Embun jernih sekali, dan yang paling membuat nyaman adalah fasilitas toilet serta musholanya sangat bersih terawat oleh warga desa.',
  },
  {
    id: 'testi-3',
    name: 'Mbak Sinta Kurniawati',
    origin: 'Yogyakarta',
    packageVisited: 'Paket Menginap 2H1M Homestay',
    visitDate: 'November 2026',
    rating: 5,
    quote:
      'Tuan rumah homestay ramah seperti keluarga sendiri. Pagi-pagi sudah disuguhi teh hangat dan pisang goreng sembari melihat kabut turun di lereng sawah. Rasanya pulang ke kampung halaman sendiri.',
  },
  {
    id: 'testi-4',
    name: 'Bapak Arif Budiman',
    origin: 'Rombongan Guru SD Surakarta',
    packageVisited: 'Paket Keluarga & Edukasi Kopi',
    visitDate: 'Agustus 2026',
    rating: 5,
    quote:
      'Kami membawa 28 peserta dan koordinasi via WhatsApp dengan Pak Hendra sangat cepat dan jelas. Harga transparan tanpa biaya tambahan tersembunyi, parkir bus medium pun lega dan dekat pendopo.',
  },
];

export const MAP_LANDMARKS: MapLandmark[] = [
  {
    id: 'gerbang',
    code: 'P',
    name: 'Gerbang Utama & Area Parkir',
    type: 'pusat',
    x: 16,
    y: 74,
    walkTime: 'Titik awal kunjungan',
    accessNote: 'Akses aspal mulus untuk mobil & bus medium',
    description:
      'Loket tiket resmi Pokdarwis, area parkir luas teduh, pos informasi wisata, serta toilet dan mushola utama.',
  },
  {
    id: 'pendopo',
    code: '1',
    name: 'Pendopo Budaya & Homestay',
    type: 'inap',
    x: 34,
    y: 58,
    walkTime: '3 menit jalan kaki dari parkir',
    accessNote: 'Akses kendaraan roda empat tersedia',
    description:
      'Pusat penyambutan tamu, deretan rumah kayu homestay warga, dan tempat berlangsungnya workshop anyaman bambu.',
  },
  {
    id: 'saung-kuliner',
    code: '2',
    name: 'Saung Kuliner Tepi Sawah',
    type: 'pusat',
    x: 48,
    y: 72,
    walkTime: '5 menit dari pendopo',
    accessNote: 'Jalan paving rata, ramah kursi roda',
    description:
      'Gazebo bambu menghadap langsung terasering hijau untuk menikmati hidangan Nasi Liwet Tampah dan camilan desa.',
  },
  {
    id: 'bukit-pinus',
    code: '3',
    name: 'Bukit Pinus & Kabut Pagi',
    type: 'alam',
    x: 30,
    y: 28,
    walkTime: '10 menit jalan santai dari parkir',
    accessNote: 'Jalur papan kayu landai, ramah anak & lansia',
    description:
      'Gardu pandang matahari terbit, hutan pinus sejuk, dan titik foto lembah berkabut.',
  },
  {
    id: 'kebun-kopi',
    code: '4',
    name: 'Kebun Kopi & Terasering Organik',
    type: 'agro',
    x: 64,
    y: 42,
    walkTime: '12 menit dari pendopo',
    accessNote: 'Jalur tanah kebun yang rapi dan landai',
    description:
      'Area belajar budidaya kopi arabika, petik buah kopi, dan penyangraian tradisional bersama petani.',
  },
  {
    id: 'curug-embun',
    code: '5',
    name: 'Curug Embun Asri',
    type: 'alam',
    x: 84,
    y: 24,
    walkTime: '15 menit trekking ringan dari kebun',
    accessNote: 'Tangga batu berpagar bambu, disarankan alas kaki anti-selip',
    description:
      'Air terjun alami setinggi 18 meter dengan kolam jernih, ruang bilas bersih, dan pos pemantau wisata.',
  },
];

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${VILLAGE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
