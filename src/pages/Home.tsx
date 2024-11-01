import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const bannerData = [
  {
    image: '/src/assets/banner/slider-01.jpg',
    title: (<> Transforming Healthcare <span className="text-secondary-main">&</span>  Agriculture</>),
    subtitle: 'Research & Consulting Excellence',
    description: 'Innovative solutions for sustainable development in health, social, and agriculture sectors',
  },
  {
    image: '/src/assets/banner/slider-02.jpg',
    title: (<>Building <span className="text-secondary-main">High-Performance</span> Organizations</>),
    subtitle: 'Expert Consulting Services',
    description: 'Empowering systems through integrated healthcare and agriculture interventions',
  },
  {
    image: '/src/assets/banner/slider-03.jpg',
    title: (<>Driving <span className="text-secondary-main">Sustainable</span> Solutions</>),
    subtitle: 'Industry Thought Leaders',
    description: 'Leveraging interdisciplinary expertise for peak organizational performance',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen mt-[0px]">
      {/* Hero Banner Section */}
      <section className="relative h-[calc(100vh-144px)] w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          className="h-full w-full"
        >
          {bannerData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex h-full items-center justify-center px-4 text-center text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="mb-3 text-base font-medium uppercase tracking-wider text-secondary-main"
                    >
                      {slide.subtitle}
                    </motion.h2>
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="mb-6 text-6xl font-bold leading-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="mb-8 text-xl text-gray-200 max-w-3xl mx-auto"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="flex justify-center space-x-4"
                    >
                      <button className="rounded-lg bg-primary-main px-8 py-3 font-medium text-white transition-colors hover:bg-primary-dark">
                        Get Started
                      </button>
                      <button className="rounded-lg border-2 border-white px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-gray-900">
                        Learn More
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Home;