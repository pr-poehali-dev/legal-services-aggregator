export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-stone-50 to-slate-100">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(120, 53, 15, 0.03) 1px, transparent 1px),
              linear-gradient(rgba(120, 53, 15, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(92, 64, 51, 0.05) 2px, transparent 2px),
              linear-gradient(rgba(92, 64, 51, 0.05) 2px, transparent 2px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
          }}
        />
      </div>
      
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-amber-900/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-stone-900/5 to-transparent" />
        
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-amber-900/8 to-transparent" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-amber-900/8 to-transparent" />
      </div>

      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="books" x="0" y="0" width="200" height="300" patternUnits="userSpaceOnUse">
              <rect x="10" y="20" width="30" height="250" fill="rgba(120, 53, 15, 0.15)" rx="2"/>
              <rect x="45" y="35" width="28" height="235" fill="rgba(92, 64, 51, 0.12)" rx="2"/>
              <rect x="78" y="15" width="32" height="255" fill="rgba(101, 67, 33, 0.13)" rx="2"/>
              <rect x="115" y="40" width="26" height="230" fill="rgba(87, 61, 38, 0.14)" rx="2"/>
              <rect x="146" y="25" width="35" height="245" fill="rgba(95, 58, 28, 0.11)" rx="2"/>
              
              <line x1="10" y1="50" x2="40" y2="50" stroke="rgba(255, 215, 0, 0.2)" strokeWidth="1"/>
              <line x1="45" y1="65" x2="73" y2="65" stroke="rgba(255, 215, 0, 0.2)" strokeWidth="1"/>
              <line x1="78" y1="45" x2="110" y2="45" stroke="rgba(255, 215, 0, 0.2)" strokeWidth="1"/>
              <line x1="115" y1="70" x2="141" y2="70" stroke="rgba(255, 215, 0, 0.2)" strokeWidth="1"/>
              <line x1="146" y1="55" x2="181" y2="55" stroke="rgba(255, 215, 0, 0.2)" strokeWidth="1"/>
            </pattern>
            
            <radialGradient id="spotlight" cx="50%" cy="30%">
              <stop offset="0%" stopColor="rgba(255, 248, 220, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 248, 220, 0)" />
            </radialGradient>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#books)" opacity="0.6"/>
          <ellipse cx="50%" cy="30%" rx="40%" ry="50%" fill="url(#spotlight)" />
        </svg>
      </div>

      <div className="absolute top-10 right-10 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-stone-600/5 rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '3s' }}></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
    </div>
  );
}
