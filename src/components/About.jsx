import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const teamMembers = [
 {
    id: 1,
    name: "Ceyhun",
    role: "Təsisçi / Omar Group",
    image: "ceyhun.jpg",
    bio: "Ümumiyyətlə, mənim biznes fəaliyyətim 2015-ci ildən başlayıb. Artıq 11 ildir ki, bizneslə məşğulam. Bu müddət ərzində, 2018-ci ildə “Omar Group”u yaratmışam. “Omar Group” əsasən rent (icarə) sektorunda fəaliyyət göstərir.",
    fullBio: "Biz fəaliyyətə velosiped icarəsi ilə başlamışıq. 2018-ci ildən 2020-ci ilə qədər velosiped icarəsi ilə məşğul olmuşuq. 2020-ci ildən 2022-ci ilə qədər isə PlayStation icarəsinə başlamışıq. 2022-ci ildən etibarən həm PlayStation, həm də velosiped icarəsini genişləndirərək elektrikli velosipedlər, mopedlər və digər rent xidmətləri ilə fəaliyyətimizi davam etdirmişik. Hazırda “Omar Group” olaraq 12 fərqli sektorda xidmət göstəririk. Əsas fəaliyyət istiqamətimiz yenə də rent sektorudur. Bu sahəyə velosipedlərin (o cümlədən elektrikli), mopedlərin, PlayStation cihazlarının, kamp çadırlarının və oxşar avadanlıqların icarəsi daxildir. Bununla yanaşı, satış istiqamətimiz də mövcuddur. Elektrikli və adi velosipedlərin, PlayStation cihazlarının (PlayStation 5, PlayStation 4, PlayStation 3), pultların, həmçinin kamp çadırlarının satışını həyata keçiririk. Eyni zamanda kamp turlarının təşkili və digər əlaqəli xidmətlər də təqdim edirik. Əlavə olaraq, velosiped təmiri xidmətimiz fəaliyyət göstərir. Elektrikli velosipedlər üçün xüsusi texniki xidmətimiz də mövcuddur. Bundan başqa, velosiped sürməyi bilməyənlər üçün velotəlimlər keçiririk. Təlimləri istənilən məkanda təşkil edə bilirik — məsələn, Bulvar ərazisində, Dağüstü parkda və digər uyğun yerlərdə. Eyni zamanda, moto təlim xidmətimiz də mövcuddur. Əlavə olaraq, moto ehtiyat hissələrinin, velosiped detallarının və müxtəlif aksessuarların satışı ilə də məşğuluq. Kənd təsərrüfatı sahəsində də fəaliyyətimiz var. Təbii məhsulların — məsələn, bal və digər təbii məhsulların, həmçinin protein tərkibli təbii məhsulların satışı ilə məşğuluq. Hal-hazırda əlavə olaraq hazır bizneslərin qurulması xidməti də təqdim edirik. Məsələn, kiminsə mağaza və ya digər biznes qurmaq istəyi olarsa, ona hazır sistem təklif edirik. Bu sistemə həm iş prosesi, həm də işçi heyəti daxildir və tam hazır şəkildə təqdim olunur. Bundan başqa, Bakı daxilində geniş çatdırılma xidmətimiz mövcuddur. Kuryer komandamız vasitəsilə müştərilərin məhsullarını operativ şəkildə ünvanlara çatdıra bilirik. Əlavə olaraq, Bulvar ərazisində skuter icarəsi xidmətimiz də mövcuddur. Hazırda komandamızın tərkibində 200 nəfərdən artıq aktiv kuryer fəaliyyət göstərir. Eyni zamanda, “Omar Group” daxilində müxtəlif sahələr üzrə xeyli sayda komanda üzvlərimiz mövcuddur. İndiyə qədər isə 1500-dən artıq kuryerin Wolt platformasına qoşulmasına dəstək olmuşuq."
  },
  {
    id: 2,
    name: "Şamxal",
    role: "İcarə Koordinasiya",
    image: "samxal.jpg",
    bio: "24 yaşım var. “Omar Group”da fəaliyyət göstərirəm və əsasən velosipedlərin icarəsi və vasitələrin icarəyə verilməsi prosesinə dəstək oluram.",
    fullBio: " “Omar Group”da fəaliyyət göstərirəm və əsasən velosipedlərin icarəsi və vasitələrin icarəyə verilməsi prosesinə dəstək oluram. Ümumilikdə, komandamızın əsas məqsədi xidmət keyfiyyətini gücləndirmək və müştərilərimizə operativ, problemsiz xidmət göstərməkdir."
  },
  {
    id: 3,
    name: "Alik",
    role: "Baş Texnik (Velo)",
    image: "alik.jpg",
    bio: "Velosipedlərin təmiri ilə məşğulam. 8 ildən artıqdır ki, bu sahədə təcrübəm var. Hazırda “Omar Group”da təmir prosesində iştirak edirəm.",
    fullBio: " Velosipedlərin qüsursuz şəkildə hazırlanaraq müştərilərə icarəyə verilməsini təmin edirəm."
  },
  {
    id: 4,
    name: "Rövşən",
    role: "Elektrikli Velosipedlər Mütəxəssisi",
    image: "rovsen.jpg",
    bio: "8 ildən artıqdır ki, elektrikli vasitələrin təmiri və satışı sahəsində fəaliyyət göstərirəm. “Velodoktor” brendi altında çalışıram.",
    fullBio: " Eyni zamanda “Omar Group” daxilində elektrikli skuter və velosipedlərin texniki servisini həyata keçiririk."
  },
  {
    id: 5,
    name: "Dima",
    role: "Velosiped Təlimçisi",
    image: "dima.jpg",
    bio: " Mən velosiped təlimçisi kimi fəaliyyət göstərirəm",
    fullBio: " və eyni zamanda Velohub daxilində sahibkaram. Bununla yanaşı, Omar Group çərçivəsində velosiped təlimlərində iştirak edir, velosiped sürə bilməyənlərə sürməyi öyrədirəm. Hazırda fəaliyyətimizi Omar Group daxilində davam etdiririk."
  }
];

const About = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="about-section">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="about-header"
      >
        <h2 className="glitch-text">KOMANDAMIZ</h2>
        <p>Omar Group-un gücü peşəkar komandasındadır</p>
      </motion.div>

      <div className="team-container">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={member.id}
            className="member-card"
            initial={{ opacity: 0, x: -100, y: -50 }}
            whileInView={{ 
              opacity: 1, 
              x: 0, 
              y: 0,
              transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" }
            }}
            viewport={{ once: true }}
          >
            <div className="card-inner">
              <div className="image-holder">
                <img src={member.image} alt={member.name} />
                <div className="image-overlay"></div>
              </div>
              
              <div className="member-info">
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <p className="bio-text">
                  {expandedId === member.id ? member.bio + " " + member.fullBio : member.bio.substring(0, 100) + "..."}
                </p>
                
                <button 
                  className="read-more-btn"
                  onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
                >
                  {expandedId === member.id ? "Bağla" : "Ətraflı Məlumat"}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;