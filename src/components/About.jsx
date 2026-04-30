import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const teamMembers = [
  {
    id: 1,
    name: "Ceyhun",
    role: "Təsisçi / Omar Group",
    image: "ceyhun.jpg", // Bura atdığın şəkli qoyarsan
    bio: "Ümumiyyətlə, mənim biznes fəaliyyətim 2015-ci ildən başlayıb. Artıq 11 ildir ki, bizneslə məşğulam. Bu müddət ərzində, 2018-ci ildə “Omar Group”u yaratmışam. “Omar Group” əsasən rent (icarə) sektorunda fəaliyyət göstərir. Biz fəaliyyətə velosiped icarəsi ilə başlamışıq...",
    fullBio: "Hazırda “Omar Group” olaraq 12 fərqli sektorda xidmət göstəririk. Əsas fəaliyyət istiqamətimiz yenə də rent sektorudur. Bu sahəyə velosipedlərin, PlayStation cihazlarının, kamp çadırlarının icarəsi daxildir. 200-dən artıq kuryer komandamız və 1500-dən artıq Wolt dəstəyimizlə fəaliyyətimizi genişləndiririk."
  },
  {
    id: 2,
    name: "Şamxal",
    role: "İcarə Koordinasiya",
    image: "samxal.jpg",
    bio: "24 yaşım var. “Omar Group”da fəaliyyət göstərirəm və əsasən velosipedlərin icarəsi və vasitələrin icarəyə verilməsi prosesinə dəstək oluram.",
    fullBio: "Salam, mənim adım Şamxal, 24 yaşım var. “Omar Group”da fəaliyyət göstərirəm və əsasən velosipedlərin icarəsi və vasitələrin icarəyə verilməsi prosesinə dəstək oluram. Ümumilikdə, komandamızın əsas məqsədi xidmət keyfiyyətini gücləndirmək və müştərilərimizə operativ, problemsiz xidmət göstərməkdir."
  },
  {
    id: 3,
    name: "Alik",
    role: "Baş Texnik (Velo)",
    image: "alik.jpg",
    bio: "Velosipedlərin təmiri ilə məşğulam. 8 ildən artıqdır ki, bu sahədə təcrübəm var. Hazırda “Omar Group”da təmir prosesində iştirak edirəm.",
    fullBio: "Salam, mənim adım Alikdir. Velosipedlərin qüsursuz şəkildə hazırlanaraq müştərilərə icarəyə verilməsini təmin edirəm."
  },
  {
    id: 4,
    name: "Rövşən",
    role: "Elektrikli Velosipedlər Mütəxəssisi",
    image: "rovsen.jpg",
    bio: "8 ildən artıqdır ki, elektrikli vasitələrin təmiri və satışı sahəsində fəaliyyət göstərirəm. “Velodoktor” brendi altında çalışıram.",
    fullBio: "Salam, mənim adım Rövşəndir. Eyni zamanda “Omar Group” daxilində elektrikli skuter və velosipedlərin texniki servisini həyata keçiririk."
  },
  {
    id: 5,
    name: "Dima",
    role: "Velosiped Təlimçisi",
    image: "dima.jpg",
    bio: "8 ildən artıqdır ki, elektrikli vasitələrin təmiri və satışı sahəsində fəaliyyət göstərirəm. “Velodoktor” brendi altında çalışıram.",
    fullBio: "Salam, mənim adım Dimadır. Mən velosiped təlimçisi kimi fəaliyyət göstərirəm və eyni zamanda Velohub daxilində sahibkaram. Bununla yanaşı, Omar Group çərçivəsində velosiped təlimlərində iştirak edir, velosiped sürə bilməyənlərə sürməyi öyrədirəm. Hazırda fəaliyyətimizi Omar Group daxilində davam etdiririk."
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