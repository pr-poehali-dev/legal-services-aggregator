export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/5d24303f-4263-4937-9a6d-d7c7d73b106d/files/570bba8f-5ce5-4978-9668-5a6da3fa2906.jpg)',
          filter: 'blur(3px) brightness(0.75)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white/85" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-transparent to-stone-100/40" />
    </div>
  );
}