export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/5d24303f-4263-4937-9a6d-d7c7d73b106d/files/570bba8f-5ce5-4978-9668-5a6da3fa2906.jpg)',
          filter: 'blur(2px) brightness(1.1) sepia(0.15)'
        }}
      />
      
      <div className="absolute inset-0 bg-white/50" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-transparent to-stone-100/30" />
    </div>
  );
}