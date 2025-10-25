export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/5d24303f-4263-4937-9a6d-d7c7d73b106d/files/570bba8f-5ce5-4978-9668-5a6da3fa2906.jpg)',
          filter: 'blur(4px) brightness(0.35)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-stone-900/20" />
      
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );
}