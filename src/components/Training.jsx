import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, Shield, Play, Pause } from 'lucide-react';
import './Training.css';

const trainingVideos = [
{ 
  id: 1, 
  student: "Murad Bəy", 
  desc: "Motosikletlə maili yoxuşlardan (padyom) düzgün və təhlükəsiz qalxma-enmə texnikasını, yamaclarda balans idarəetməsini qısa müddətdə tam mənimsədi.", 
  videoUrl: "/ceko/video1.mp4",
  level: "Yoxuş Təlimi", 
  duration: "10 Dərs"
},

{ 
  id: 3, 
  student: "Ramil Bəy", 
  desc: "Xüsusi asfalt təlim meydançasında motosikletin sərbəst idarə edilməsi, nizamlı xətt üzrə hərəkət və düzgün trayektoriya sürüş dərslərini uğurla tamamladı.", 
  videoUrl: "/ceko/video3.mp4",
  level: "Meydança Sürüşü",
  duration: "15 Dərs"
},
{ 
  id: 4, 
  student: "Rəşad Bəy", 
  desc: "Təlim meydançasının asfalt örtüyündə ani maneələrdən yayınma, çevik manevrlər zamanı bədən koordinasiyası və sərbəst dönüş texnikalarını uğurla bitirdi.", 
  videoUrl: "/ceko/video4.mp4",
  level: "Manevr Təlimi",
  duration: "8 Dərs"
},
{ 
  id: 5, 
  student: "Kənan Bəy", 
  desc: "Meydançanın asfalt örtüyündə motosikletin qaz və əyləc koordinasiyasını düzgün nizamlamaqla, axıcı və tam nəzarətli sərbəst sürüş vərdişlərinə yiyələndi.", 
  videoUrl: "/ceko/video5.mp4",
  level: "Sərbəst Sürüş",
  duration: "6 Dərs"
},
  { 
    id: 6, 
    student: "Orxan Bəy", 
    desc: "Sport-bike sinfi motosikletlərin güc idarəetməsini və dik eniş-yoxuşlarda asan debriyaj nəzarətini mənimsədi.", 
    videoUrl: "/ceko/video6.mp4",
    level: "Pro Sport",
    duration: "14 Dərs"
  },
{ 
  id: 7, 
  student: "Nigar Xanım", 
  desc: "Meydançanın asfalt örtüyündə motosikletin gövdə balansını düzgün saxlamaqla, dar dönüşlərdə sərbəst və təhlükəsiz idarəetmə texnikasını uğurla tamamladı.", 
  videoUrl: "/ceko/video7.mp4",
  level: "Təhlükəsiz Sürüş",
  duration: "10 Dərs"
},
{ 
  id: 8, 
  student: "Fərid Bəy", 
  desc: "Təlim meydançasının təhlükəsiz şəraitində sıfırdan başlayaraq, motosikletin ilkin hərəkətə gətirilməsi və sərbəst idarəetmə vərdişlərini tam mənimsədi.", 
  videoUrl: "/ceko/video8.mp4",
  level: "Başlanğıc Səviyyə",
  duration: "8 Dərs"
}
];

const TrainingCard = ({ item }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(err => console.log("Video yüklənməsi gözlənilir...", err));
    }
    setIsPlaying(!isPlaying);
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div 
      className="premium-training-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="video-wrapper">
        <video 
          ref={videoRef}
          src={item.videoUrl}
          loop
          muted
          playsInline
          preload="none" // Video yalnız üzərinə gələndə və ya basanda yüklənməyə başlasın (Donmanı kökündən kəsir!)
          className="training-video"
        />
        
        {/* Səs/Play göstəricisi animasiyası */}
        <div className={`video-overlay-btn ${isPlaying ? 'playing' : ''}`} onClick={handlePlayPause}>
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </div>

        <div className="card-badge level-badge">{item.level}</div>
        <div className="card-badge duration-badge">{item.duration}</div>
      </div>

      <div className="card-info">
        <div className="student-header">
          <Award className="award-icon" size={20} />
          <h3>{item.student} üçün uğurlu təlimimiz</h3>
        </div>
        <p className="student-desc">{item.desc}</p>
        
        <div className="card-footer-decor">
          <span>OMAR GROUP MOTO</span>
          <div className="decor-line"></div>
          <Shield size={16} className="shield-icon" />
        </div>
      </div>
    </div>
  );
};

const Training = () => {
  return (
    <section className="training-section">
      <div className="training-header">
        <motion.div 
          className="header-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Zap size={14} /> TƏLİM MƏRKƏZİ
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
           <span className="neon-cyan">MOTO SÜRÜŞ AKADEMİYASI</span> 
        </motion.h2>
        <p className="header-subtitle">Peşəkar təlimçilərimizlə sıfırdan ustadlığa doğru addımlayan tələbələrimizin nəticələri</p>
      </div>

      <div className="training-grid">
        {trainingVideos.map((item) => (
          <TrainingCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Training;