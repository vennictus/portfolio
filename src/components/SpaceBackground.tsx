export default function SpaceBackground() {
  return (
    <>
      <div className="dot-grid" aria-hidden="true" />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          backgroundImage: 'url("/charizard 2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
        }}
      />
    </>
  );
}
