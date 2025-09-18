# PixelHub React

Bu proje, orijinal HTML/CSS/JS tabanlı "Arino" creative agency temasının React versiyonudur.

## Özellikler

- ✅ Modern React (19.x) ile geliştirildi
- ✅ React Router ile sayfa yönlendirmeleri
- ✅ SCSS desteği
- ✅ Responsive tasarım
- ✅ Animasyonlar ve etkileşimli öğeler
- ✅ SEO dostu yapı
- ✅ Component tabanlı mimari

## Sayfalar

- **Ana Sayfa (Home)** - Hero section, hizmetler, istatistikler
- **Hakkımızda (About)** - Şirket bilgileri, takım üyeleri
- **Hizmetler (Services)** - Sunulan hizmetler
- **Portföy (Portfolio)** - Çalışma örnekleri
- **Blog** - Blog yazıları
- **İletişim (Contact)** - İletişim formu ve bilgileri

## Kurulum

1. Proje dizinine gidin:
```bash
cd pixelhub-react
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm start
```

4. Tarayıcınızda `http://localhost:3000` adresini açın.

## Build

Üretim için build almak için:
```bash
npm run build
```

## Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir bileşenler
│   ├── Header.js       # Site başlığı
│   ├── Footer.js       # Site alt bilgisi
│   └── Layout.js       # Ana layout wrapper
├── pages/              # Sayfa bileşenleri
│   ├── Home.js         # Ana sayfa
│   ├── About.js        # Hakkımızda
│   ├── Services.js     # Hizmetler
│   ├── Portfolio.js    # Portföy
│   ├── Blog.js         # Blog
│   └── Contact.js      # İletişim
├── hooks/              # Custom React hooks
│   ├── useScrollEffects.js      # Scroll efektleri
│   └── useInteractiveEffects.js # Etkileşimli efektler
├── styles/             # SCSS dosyaları
└── App.js             # Ana uygulama bileşeni
```

## Özelleştirme

- Renk değişkenleri: `src/styles/default/_color_variable.scss`
- Typography: `src/styles/default/_typography.scss`
- Bileşen stilleri: `src/styles/shortcode/` klasörü

## Teknolojiler

- React 19.x
- React Router DOM
- SASS/SCSS
- Modern JavaScript (ES6+)

## Lisans

Bu proje, orijinal Arino temasının React uyarlamasıdır.