export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/5d24303f-4263-4937-9a6d-d7c7d73b106d/files/570bba8f-5ce5-4978-9668-5a6da3fa2906.jpg)',
          filter: 'blur(2px) brightness(0.5) sepia(0.2)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/70" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-stone-900/10" />
      
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-stone-700/10 rounded-full blur-3xl animate-float-reverse" style={{ animationDelay: '3s' }}></div>
      </div>
    </div>
  );
}