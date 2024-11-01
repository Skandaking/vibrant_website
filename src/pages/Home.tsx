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
    title: 'Welcome to Vibrant',
    subtitle: 'Creating Digital Excellence',
    description: 'We transform ideas into powerful digital solutions',
  },
  {
    image: '/src/assets/banner/slider-02.jpg',
    title: 'Innovative Solutions',
    subtitle: 'For Modern Businesses',
    description: 'Empowering your business with cutting-edge technology',
  },
  {
    image: '/src/assets/banner/slider-03.jpg',
    title: 'Expert Team',
    subtitle: 'Professional Service',
    description: 'Dedicated experts committed to your success',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen mt-[100px]">
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
                      className="mb-2 text-sm font-medium uppercase tracking-wider text-primary-light"
                    >
                      {slide.subtitle}
                    </motion.h2>
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="mb-6 text-5xl font-bold leading-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="mb-8 text-lg text-gray-200"
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