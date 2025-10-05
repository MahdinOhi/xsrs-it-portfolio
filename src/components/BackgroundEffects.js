export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 opacity-20 overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6600]/10 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 102, 0, 0.1) 2px, rgba(255, 102, 0, 0.1) 4px)`
      }}></div>
      
      {/* Enhanced Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#ff6600] rounded-full animate-pulse"
            style={{
              left: `${(i * 4) % 100}%`,
              top: `${(i * 3.6) % 100}%`,
              animationDelay: `${(i * 0.2) % 3}s`,
              animationDuration: `${2 + (i * 0.1) % 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden w-full">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute opacity-20"
            style={{
              left: `${(i * 12.5) % 100}%`,
              top: `${(i * 12.5) % 100}%`,
              animationDelay: `${(i * 0.6) % 5}s`,
              animationDuration: `${8 + (i * 0.5) % 4}s`
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-4 h-4 border border-[#ff6600] rotate-45 animate-spin"></div>
            ) : i % 3 === 1 ? (
              <div className="w-6 h-6 border-2 border-[#ff6600] rounded-full animate-ping"></div>
            ) : (
              <div className="w-3 h-3 bg-[#ff6600] transform rotate-12 animate-bounce"></div>
            )}
          </div>
        ))}
      </div>
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 102, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 102, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>
    </div>
  );
}
