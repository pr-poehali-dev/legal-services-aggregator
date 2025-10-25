import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 animate-gradient"></div>
      
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `floatParticle ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '5s' }}></div>
      </div>
      
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgb(var(--primary))', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: 'rgb(var(--secondary))', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          <circle cx="10%" cy="20%" r="100" fill="url(#grad1)" className="animate-float">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0 0; 20 -20; 0 0"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="90%" cy="70%" r="150" fill="url(#grad1)" className="animate-float-reverse">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0 0; -30 30; 0 0"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}
