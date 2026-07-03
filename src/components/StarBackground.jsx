export default function StarBackground() {
  const stars = Array.from({ length: 80 });

  return (
    // Fixed inset-0 keeps it behind all sections
    <div className="fixed inset-0 z-0 bg-[#05050f] pointer-events-none">
      {stars.map((_, i) => {
        const size = Math.random() * 2 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = Math.random() * 4 + 2;
        const delay = Math.random() * 5;

        return (
          <span
            key={i}
            className="star"
            style={{
              width: size + 'px',
              height: size + 'px',
              top: top + '%',
              left: left + '%',
              '--duration': duration + 's',
              '--delay': delay + 's',
            }}
          />
        );
      })}
    </div>
  );
}