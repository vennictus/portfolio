export default function SpaceBackground() {
  return (
    <>
      <div className="dot-grid" aria-hidden="true" />
      <div
        className="pointer-events-none z-0"
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100lvh',
          backgroundImage: 'url("/charizard 2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />
    </>
  );
}
