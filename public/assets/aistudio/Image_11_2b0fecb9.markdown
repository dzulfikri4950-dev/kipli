---
name: Lembah Pinus
colors:
  surface: '#fef9f0'
  surface-dim: '#ded9d1'
  surface-bright: '#fef9f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3ea'
  surface-container: '#f2ede4'
  surface-container-high: '#ece8df'
  surface-container-highest: '#e7e2d9'
  on-surface: '#1d1c16'
  on-surface-variant: '#42493e'
  inverse-surface: '#32302a'
  inverse-on-surface: '#f5f0e7'
  outline: '#72796e'
  outline-variant: '#c2c9bb'
  surface-tint: '#3b6934'
  primary: '#154212'
  on-primary: '#ffffff'
  primary-container: '#2d5a27'
  on-primary-container: '#9dd090'
  inverse-primary: '#a1d494'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#07430a'
  on-tertiary: '#ffffff'
  tertiary-container: '#235b20'
  on-tertiary-container: '#94d288'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bcf0ae'
  primary-fixed-dim: '#a1d494'
  on-primary-fixed: '#002201'
  on-primary-fixed-variant: '#23501e'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#b4f3a6'
  tertiary-fixed-dim: '#98d68c'
  on-tertiary-fixed: '#002202'
  on-tertiary-fixed-variant: '#195217'
  background: '#fef9f0'
  on-background: '#1d1c16'
  surface-variant: '#e7e2d9'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-md: 1.5rem
  gutter-lg: 2rem
  margin: 1rem
  margin-md: 2rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embraces an "Eco-Warmth Humanist" aesthetic tailored for community-led eco-tourism. The visual philosophy blends lush highland greenery with tactile earthen accents, designed intentionally for travelers, weekend wanderers, and eco-tourists navigating itineraries outdoors on handheld devices.

- **Brand Personality**: Welcoming (*guyub*), restorative, authentic, and rooted in sustainable village culture.
- **Design Style**: Modern Eco-Humanist with soft tactile layering, generous tap boundaries, organic rounded card containers, and daylight-warmed surfaces.
- **Atmospheric Impact**: Instills tranquility, wanderlust, and confidence. Interfaces avoid urban corporate sterility in favor of organic breathing space, sun-ripened terracotta cues, and deep highland pine tones.

## Colors

The color architecture is built to mirror the physical landscape of montane tea terraces, pine forests, and terracotta village roof tiles.

- **Primary (`#2D5A27`)**: Pine Green. Anchors top navigation, primary touch triggers, and key brand affirmations. A deep variant (`#1B3B1A`) acts as the high-contrast text color on light canvases.
- **Secondary (`#D97706`)**: Harvest Terracotta/Honey Amber. Directs booking confirmations, seasonal highlight badges, price tags, and urgent weather or trail alerts. Supported by sun amber (`#F59E0B`).
- **Tertiary (`#4E8746`)**: Sprout Foliage. Serves as environmental markers, success confirmations, homestay availability indicators, and interactive micro-accents.
- **Neutral Canvas (`#F4EFE6` & `#FBF9F4`)**: Warm Alabaster and Rice Husk. Avoids cold clinical pure whites to maintain natural viewing comfort under direct sunlight.

## Typography

Typography prioritizes high outdoor glanceability and friendly legibility across diverse viewports.

- **Display & Headings (Plus Jakarta Sans)**: Delivers rounded geometric warmth with contemporary clarity, lending a welcoming and enthusiastic tone to local tour names, homestay titles, and attraction headliners.
- **Body & Captions (Inter)**: Provides structural neutrality, tall x-height, and optimal reading performance for trail descriptions, local logistics, visitor etiquette, and homestay policies.
- **Scale Rules**: Headings scale down across mobile viewports to prevent unwanted line-breaks in longer Indonesian words (e.g., *Pertanian Berkelanjutan*, *Pemandangan Matahari Terbit*).

## Layout & Spacing

A mobile-first fluid grid prioritizes single-handed thumb operation for travelers on foot.

- **Mobile (<768px)**: 4-column fluid layout with `margin: 1rem` and `gutter: 1rem`. Edge-to-edge full-bleed imagery carousel cards are supported with inset 16px content bounds.
- **Tablet (768px–1024px)**: 8-column layout with `margin-md: 2rem` and `gutter-md: 1.5rem`, splitting listing content and interactive booking filters into balanced dual panes.
- **Desktop (>1024px)**: 12-column layout capped at 1280px maximum content container, utilizing `margin-lg: 3rem` to preserve a cozy, approachable editorial cadence rather than sprawling sparse whitespace.
- **Vertical Rhythm**: Interactive components respect a minimum vertical height of 48px to 52px for primary hit areas to prevent misclicks in active transit.

## Elevation & Depth

Visual hierarchy employs natural ambient shadows tinted with deep leaf pigments rather than cold neutral grays.

- **Base Layer**: Warm background `#FBF9F4` paired with secondary section surface `#F4EFE6`.
- **Card Tier (Elevation 1)**: Pure warm-white surface (`#FFFFFF`) with a 1px structural boundary (`#EADFCF`) and ambient shadow: `0px 4px 16px -2px rgba(45, 90, 39, 0.06)`.
- **Interactive Floating Bar & Sheets (Elevation 2)**: Sticky booking docks and bottom exploration sheets leverage frosted translucent backdrops (`rgba(251, 249, 244, 0.92)` with 12px blur) bordered by `#D9CBB7` and an expanded shadow: `0px 10px 24px -4px rgba(27, 59, 26, 0.12)`.
- **Dialogs & Lightboxes (Elevation 3)**: Deep pine dimmed overlay (`rgba(27, 59, 26, 0.55)`) with cards elevated via `0px 20px 32px -8px rgba(27, 59, 26, 0.22)`.

## Shapes

The interface expresses a welcoming, non-abrasive visual form through soft organic corner radii.

- **Standard Containers & Cards**: Set to `rounded-xl` (1rem / 16px) and `rounded-2xl` (1.5rem / 24px) for hero cards and featured attraction teasers, reflecting natural river stones and rounded foliage.
- **Buttons, Badges, and Input Fields**: Set to standard rounded boundaries (`0.5rem` to `1rem`) and full pill radii (`9999px`) for contextual meta badges, status indicators, and quick-filter pills.

## Components

### Buttons & Interactive Touch Targets
- **Primary Actions (e.g., "Pesan Homestay", "Lihat Rute")**: Minimum height of 52px. Pine Green background (`#2D5A27`), crisp white label text, `rounded-xl` shape, and subtle press-depth transformation.
- **Secondary Actions (e.g., "Hubungi Pengelola")**: Minimum height of 48px. Warm outline (`1.5px solid #2D5A27`) over cream canvas, accompanied by high-legibility green iconography.
- **Floating Sticky Action Bar**: Bottom-anchored mobile dock containing quick price display on the left and a prominent primary booking button on the right.

### Badges & Chips
- **Category Chips (Filter Perkebunan, Air Terjun, Kuliner)**: Horizontal-scrolling pill badges (`rounded-full`) with 40px height. Inactive state: `#F4EFE6` with `#1B3B1A` text; Active state: `#2D5A27` with `#FFFFFF` text.
- **Informative Status Badges**: Compact pill badges indicating "Tersedia", "Ramah Anak", or "Sertifikasi Desa Wisata", using amber (`#FEF3C7` / `#B45309`) and sage tones (`#DCFCE7` / `#166534`).

### Cards & Media Blocks
- **Destination & Homestay Cards**: Rounded-2xl containment, 4:3 high-resolution nature imagery top block with rounded image corners, price-per-night highlighting in secondary terracotta (`#D97706`), star-rating cluster, and immediate WhatsApp/Direct Inquiry triggers.
- **Local Tip & Culture Banners**: Soft warm surfaces with 1.5px tinted borders, pairing local proverbs (*Kearifan Lokal*) with illustrative eco-conscious icons.

### Inputs & Selection Controls
- **Form Fields (Date, Guests, Contact)**: Minimum 50px height, inset padding of 16px, background `#FFFFFF`, boundary `#D9CBB7`, transitioning to a 2px `#2D5A27` focus ring with ambient green glow.
- **Checkboxes & Radios**: 24px touch targets with generous 48px hit slop, filled with `#2D5A27` when active.