import { useState, useEffect } from 'react';

const services = [
  'MVP building',
  'full saas building',
  'website',
  'web design',
  'custom solution',
  'innovating',
  'mobile app development'
];

const RotatingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        setIsVisible(true);
      }, 150);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block font-fjalla text-orange transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {services[currentIndex]}
    </span>
  );
};

export default RotatingText;