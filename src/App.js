import './App.css';
import screenvImage from './images/salma1.jpg';
import fishImage from './images/salma2.jpg';
import shopImage from './images/salma3.jpg';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useEffect, useState, useRef } from 'react';
import Hero from './components/Hero';
import emailjs from '@emailjs/browser';

const services = [
  {
    name: "Bridal Makeup",
    logo: "https://cdn-icons-png.flaticon.com/128/4200/4200441.png",
    description: "Makeup pengantin"
  },
  {
    name: "Party Makeup",
    logo: "https://cdn-icons-png.flaticon.com/128/3146/3146600.png",
    description: "Makeup pesta"
  },
  {
    name: "Graduation Makeup",
    logo: "https://cdn-icons-png.flaticon.com/512/3976/3976631.png",
    description: "Makeup wisuda"
  },
  {
    name: "Engagement Makeup",
    logo: "https://cdn-icons-png.flaticon.com/512/1940/1940993.png",
    description: "Makeup tunangan"
  },
  {
    name: "Natural Makeup",
    logo: "https://cdn-icons-png.flaticon.com/512/1940/1940922.png",
    description: "Makeup natural"
  },
  {
    name: "Korean Makeup",
    logo: "https://cdn-icons-png.flaticon.com/128/5732/5732023.png",
    description: "Makeup ala Korea"
  },
  {
    name: "Photoshoot Makeup",
    logo: "https://cdn-icons-png.flaticon.com/128/10084/10084943.png",
    description: "Makeup foto"
  },
  {
    name: "Traditional Makeup",
    logo: "https://cdn-icons-png.flaticon.com/128/545/545159.png",
    description: "Makeup tradisional"
  },
  {
    name: "Evening Makeup",
    logo: "https://cdn-icons-png.flaticon.com/128/1738/1738962.png",
    description: "Makeup malam"
  },
  {
    name: "Prewedding Makeup",
    logo: "https://cdn-icons-png.flaticon.com/128/769/769633.png",
    description: "Makeup prewedding"
  },
  {
    name: "Commercial Makeup",
    logo: "https://cdn-icons-png.flaticon.com/128/4383/4383086.png",
    description: "Makeup komersial"
  },
  {
    name: "Character Makeup",
    logo: "https://cdn-icons-png.flaticon.com/128/4218/4218368.png",
    description: "Makeup karakter"
  }
];

const portfolio = [
  {
    title: "Bridal Makeup",
    description: "A collection of modern and traditional bridal makeup looks. Creating perfect beauty for your special day with timeless elegance.",
    image: screenvImage,
    tags: ["Wedding", "Modern", "Traditional", "Glamour"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Graduation Makeup",
    description: "Elegant and long-lasting graduation makeup. Perfect for capturing your memorable moments with a stunning and sophisticated look.",
    image: fishImage,
    tags: ["Natural", "Long-lasting", "Photoshoot", "Elegant"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Party Makeup",
    description: "Tampilan makeup pesta yang glamor dan memukau. Dibuat khusus untuk membuat Anda menjadi pusat perhatian di setiap acara.",
    image: shopImage,
    tags: ["Party", "Glamour", "Evening", "Dramatic"],
    liveUrl: "#",
    sourceUrl: "#",
  }
];

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const [isLoading, setIsLoading] = useState(true);
  const form = useRef();
  const [showMusicModal, setShowMusicModal] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleMusicChoice = (choice) => {
    setShowMusicModal(false);
    if (choice) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.log('Play prevented:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1o3f1un',
      'template_876czll',
      form.current,
      'pc_TStT_UQhORjnR2'
    )
      .then((result) => {
          console.log('Message sent successfully');
          alert('Thank you! Your message has been sent.');
          e.target.reset(); // Reset form setelah berhasil
      }, (error) => {
          console.log('Failed to send message:', error);
          alert('Sorry, there was an error. Please try again.');
      });
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1.0; // Pastikan volume tidak 0
    }
  }, []);

  return (
    <ParallaxProvider>
      <div className="gradient-overlay"></div>
      <div className="App">
        {/* Progress Bar */}
        <motion.div 
          className="progress-bar"
          style={{
            scaleX,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'var(--primary-color)',
            transformOrigin: '0%',
            zIndex: 1000
          }}
        />

        {/* Hero Section */}
        <Hero />

        {/* Tech Stack Section */}
        <section className="tech-stack-section">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Services</h2>
            </motion.div>

            <div className="tech-grid">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  className="tech-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img src={service.logo} alt={service.name} className="tech-logo" />
                  <h3>{service.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="projects" className="projects-section">
          <div className="projects-container">
            <motion.div 
              className="projects-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Portfolio</h2>
            </motion.div>

            <div className="projects-grid">
              {portfolio.map((item, index) => (
                <motion.div 
                  key={index}
                  className="project-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.3,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="project-image-container">
                    <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                      <img src={item.image} alt={item.title} className="project-image" />
                      <div className="project-overlay">
                        <div className="project-category">{item.category}</div>
                      </div>
                    </a>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{item.title}</h3>
                    <p className="project-description">{item.description}</p>

                    <div className="project-tags">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="contact-container">
            <h2>Get in Touch</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>

        <footer className="footer">
          <p>&copy; 2024 Salma Halsa. All rights reserved.</p>
        </footer>

        <audio ref={audioRef} src="/music/music.mp3" loop />
        <button 
          onClick={togglePlay}
          className="music-toggle"
          aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          <i className={isPlaying ? 'fas fa-pause' : 'fas fa-play'}></i>
        </button>
      </div>
    </ParallaxProvider>
  );
}

export default App;
