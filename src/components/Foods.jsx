import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaWhatsapp, FaLeaf } from 'react-icons/fa';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Foods.css';

const Food = () => {
  const products = [
    { 
      id: 1, 
      title: "Cheddar Qızartma Pendiri", 
      category: "Yalnız Təbii Süd",
      desc: "Pasterizə edilmiş qoyun, keçi və inək südünün xüsusi qarışığından hazırlanan, qızartmaq üçün ideal Cheddar pendiri. Enerji: 294.5 kkal.", 
      images: ["/qizartma pendir.jpg", "/qizartma pendir.jpg"] 
    },
    { 
      id: 2, 
      title: "Qozlu Pendir Ruleti", 
      category: "Yalnız Təbii Süd",
      desc: "Pasterizə edilmiş inək südü, qursağ mayası və seçmə qoz ləpəsi ilə hazırlanan xüsusi ləzzət. Enerji dəyəri: 353 kkal.", 
      images: ["/rulet.jpg", "/rulet1.jpg"] 
    },
    { 
      id: 3, 
      title: "Sumaqlı Pendir Ruleti", 
      category: "Yalnız Təbii Süd",
      desc: "Pasterizə edilmiş inək südü, qursağ mayası və təbii sumağın mükəmməl vəhdəti. Enerji dəyəri: 291 kkal.", 
      images: ["/rulet3.jpg", "/rulet4.jpg"] 
    },
    { 
      id: 4, 
      title: "Göyərtili Pendir Ruleti", 
      category: "Yalnız Təbii Süd",
      desc: "Pasterizə edilmiş inək südü, qursağ mayası və təzə göyərti qarışığı ilə hazırlanan iştahaçan delikates. Enerji dəyəri: 291 kkal.", 
      images: ["/rulet5.jpg", "/rulet6.jpg"] 
    },
    { 
      id: 5, 
      title: "Təbii Kəsmik Çeşidləri", 
      category: "Süd Məhsulları",
      desc: "Hər zövqə uyğun kəsmiklər: Pəhriz (0%), Fitnes (9%) və Yağlı (18%). Tam təbii inək südündən hazırlanan sağlamlıq mənbəyi.", 
      images: ["/kesmik.jpg", "/kesmik-alt.jpg"] 
    },
    { 
      id: 6, 
      title: "Dilim-Dilim Cheddar Pendiri", 
      category: "Yalnız Təbii Süd",
      desc: "Zeytun yağı və müalicəvi otlarla zənginləşdirilmiş, xüsusi hazırlanmış dilim-dilim cheddar. Enerji: 292 kkal.", 
      images: ["/ceddar1.jpg", "/ceddar-slice-alt.jpg"] 
    },
    { 
      id: 7, 
      title: "Hisə Verilmiş 'Spagetti' və 'Kosa' Pendiri", 
      category: "Yalnız Təbii Süd",
      desc: "Təbii süddən hazırlanan və xüsusi üsulla hisə verilmiş 'Spagetti' və 'Kosa' pendirləri. Enerji: 320.8 kkal.", 
      images: ["/spagetti.jpg", "/spagetti-alt.jpg"] 
    },
    { 
      id: 8, 
      title: "Təbii və Hisə Verilmiş Çeçil Pendiri", 
      category: "Yalnız Təbii Süd",
      desc: "Tam təbii süddən hazırlanan klassik və xüsusi üsulla hisə verilmiş çeçil pendiri çeşidləri. Enerji: 291 kkal.", 
      images: ["/cecil.jpg", "/cecil-alt.jpg"] 
    },
    { 
      id: 9, 
      title: "Cheddar Suluquni Pendiri", 
      category: "Yalnız Təbii Süd",
      desc: "Tam təbii süddən hazırlanan, Gürcüstan pendir festivalında qızıl medal qazanmış eksklüziv Suluquni. Enerji: 304 kkal.", 
      images: ["/ceddar2.jpg", "/suluquni-alt.jpg"] 
    },
    { 
      id: 10, 
      title: "Adigey Duzsuz Pendiri", 
      category: "Yalnız Təbii Süd",
      desc: "Tam təbii inək südündən hazırlanan, duzsuz pəhriz seçimi. Həm klassik, həm də hisə verilmiş çeşidləri mövcuddur.", 
      images: ["/adigey.jpg", "/adigey-alt.jpg"] 
    },
    { 
      id: 11, 
      title: "Şah Qatığı (Təbii Kənd Qatığı)", 
      category: "Süd Məhsulları",
      desc: "3.2% yağlılıq dərəcəsinə malik, tam təbii və qatqısız kənd qatığı. Keyfiyyətli qablaşdırmada təqdim olunur.", 
      images: ["/qatiq.jpg", "/qatiq-alt.jpg"] 
    },
    { 
      id: 12, 
      title: "Şah Ayranı", 
      category: "Süd Məhsulları",
      desc: "Normallaşdırılmış təbii süd və bakterial maya ilə hazırlanan təravətli ayran. Enerji: 27.4 kkal.", 
      images: ["/sahqatiq.jpg", "/ayran-alt.jpg"] 
    },
    { 
      id: 13, 
      title: "Şah Dovğası", 
      category: "Süd Məhsulları",
      desc: "Qatıq, qaymaq, süzmə və təzə göyərtilərin mükəmməl vəhdəti. Ev dadında, tam təbii milli ləzzət. Enerji: 62.5 kkal.", 
      images: ["/dovga.jpg", "/dovga-alt.jpg"] 
    },
    { 
      id: 14, 
      title: "Meyvəli Kisel (Appetit)", 
      category: "İçkilər",
      desc: "B1, B2, PP və C vitaminləri ilə zənginləşdirilmiş, təbii meyvə dadlı kisel. Kaloriliyi: 363.2 kkal.", 
      images: ["/kisel.jpg", "/kisel-alt.jpg"] 
    },
    { 
      id: 15, 
      title: "Xurma Şokoladlı", 
      category: "Şirniyyat",
      desc: "Xüsusi seçilmiş xurmaların incə şokolad qatı ilə bənzərsiz harmoniyası. Çay süfrələri üçün zərif seçim.", 
      images: ["/xurma.jpg", "/xurma-alt.jpg"] 
    },
    { 
      id: 16, 
      title: "Şokoladlı Meyvə Delikatesləri", 
      category: "Şirniyyat",
      desc: "Premium şokolad şirəsinə bürünmüş təbii qaysı qurusu və qoz ləpəli xurma çeşidləri. Enerji: 401 - 420.8 kkal.", 
      images: ["/xurma1.jpg", "/xurma-qozlu-alt.jpg"] 
    },
    { 
      id: 17, 
      title: "Şokoladlı Meyvə Delikatesləri (Gavalı və Kişmiş)", 
      category: "Şirniyyat",
      desc: "İncə şokolad şirəsinə bürünmüş təbii gavalı və kişmiş qurusu. Enerji dəyəri: 393.7 kkal. Saxlama müddəti: 4 ay.", 
      images: ["/gavali1.jpg", "/kismis-alt.jpg"] 
    }
  ];

  const handleWhatsApp = (product) => {
    const phoneNumber = "+994509998281"; // Bura öz nömrəni yaz
    const message = `Salam OMAR GROUP! Sizin saytınızdan bu məhsul haqqında məlumat almaq istəyirəm:\n\n🍀 Məhsul: ${product.title}\n📂 Kateqoriya: ${product.category}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="food-section">
      <div className="container">
        <h2 className="food-title">Təbiətdən <span>Süfrənizə</span></h2>
        <div className="food-grid">
          {products.map((product) => (
            <div className="food-card" key={product.id}>
              <div className="food-image-box">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  navigation={true}
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={product.images.length > 1}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  className="food-swiper"
                >
                  {product.images.map((img, i) => (
                    <SwiperSlide key={i} className="food-swiper-slide">
                      <img src={img} alt={product.title} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="organic-badge">
                  <FaLeaf /> {product.category}
                </div>
              </div>

              <div className="food-card-body">
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                </div>
                <button 
                  className="food-wp-btn" 
                  onClick={() => handleWhatsApp(product)}
                >
                  <FaWhatsapp /> SİFARİŞ ET
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;