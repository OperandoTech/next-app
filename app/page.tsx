"use client";

export default function Home() {
  return (
    <main className="home">
      <div className="content">
        <p className="eyebrow">Welcome to Heng&apos;s world</p>
        <h1 className="fire-wrap" aria-label="Heng">
          <span className="fire-text" data-text="Heng">
            {"Heng".split("").map((ch, i) => (
              <span className="fire-letter" data-char={ch} key={i} style={{ ['--i' as any]: i }}>
                {ch}
              </span>
            ))}
          </span>

        </h1>
        <p className="tagline">
          A blazing, bold spirit that lights up every room. Feel the heat of
          imagination.
        </p>
        <div className="badges">
          <span className="badge">Fueled by curiosity</span>
          <span className="badge">Unstoppable energy</span>
          <span className="badge">Future legend</span>
        </div>
      </div>

      <style jsx>{`
        .home {
          position: relative;
          min-height: 100vh;
          display: grid;
          place-items: center;
          background: radial-gradient(circle at 50% 18%, rgba(255, 140, 55, 0.12), transparent 38%),
            radial-gradient(circle at 45% 75%, rgba(255, 90, 15, 0.08), transparent 40%),
            #040404;
          overflow: hidden;
          padding: 3rem 1.5rem;
          color: #fefefe;
        }

        .content {
          position: relative;
          text-align: center;
          max-width: 760px;
          z-index: 1;
        }

        .eyebrow {
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 0.9rem;
          color: #ffd6a5;
          margin-bottom: 1.25rem;
          opacity: 0.8;
        }

        .fire-wrap {
          position: relative;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }

        .fire-text {
          position: relative;
          display: inline-flex;
          gap: 0.06em;
          font-size: clamp(5.8rem, 16vw, 12.5rem);
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          line-height: 1;
        }

        .fire-letter {
          position: relative;
          display: inline-block;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-image: linear-gradient(180deg, #fff9e6 0%, #ffd07a 18%, #ff8b2a 46%, #7f120a 98%);
          font-weight: 900;
          transform-origin: center;
          text-shadow: 0 0 18px rgba(255,220,120,0.95), 0 0 40px rgba(255,120,50,0.9), 0 0 96px rgba(255,70,30,0.75);
          filter: drop-shadow(0 12px 40px rgba(255,90,30,0.35));
          animation: letter-flicker 2.2s infinite ease-in-out;
          animation-delay: calc(var(--i) * 0.08s);
          overflow: visible;
        }

        .fire-letter::before,
        .fire-letter::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          inset: 0;
          display: block;
          text-transform: uppercase;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          pointer-events: none;
          will-change: transform, opacity, background-position;
        }

        /* Inner core — very bright and sharp */
        .fire-letter::before {
          background-image: radial-gradient(70% 80% at 50% 6%, rgba(255,255,245,1) 0%, rgba(255,245,180,0.98) 18%, rgba(255,200,90,0.95) 36%, rgba(255,120,30,0.85) 55%, rgba(120,22,12,0.7) 100%);
          filter: blur(1px) saturate(1.2);
          mix-blend-mode: screen;
          opacity: 1;
          transform-origin: center;
          animation: inner-flicker 1.6s infinite ease-in-out;
          animation-delay: calc(var(--i) * -0.06s);
          -webkit-text-fill-color: transparent;
          transform: translateY(0);
        }

        /* Outer flames — smooth, bold glow (removed grainy noise) */
        .fire-letter::after {
          background-image: radial-gradient(120% 100% at 50% 0%, rgba(255,220,120,0.98) 0%, rgba(255,140,40,0.95) 28%, rgba(255,70,10,0.9) 50%, rgba(180,20,10,0.85) 68%, transparent 78%),
                            radial-gradient(80% 90% at 50% 80%, rgba(255,190,90,0.85), transparent 46%);
          background-size: 180% 200%;
          background-position: 50% 56%;
          filter: blur(16px) saturate(1.25) contrast(1.05) drop-shadow(0 0 36px rgba(255,120,40,0.6));
          opacity: 1;
          mix-blend-mode: screen;
          transform-origin: center;
          animation: outer-flame 1.8s infinite ease-in-out;
          animation-delay: calc(var(--i) * 0.08s);
          -webkit-text-fill-color: transparent;
        }

        /* small spark pseudo-element for more texture */
        .fire-letter .spark {
          position: absolute;
          inset: auto;
        }

        /* Add mild per-letter offsets to make letters feel independent */
        .fire-letter:nth-child(1) { transform: translateY(0px) rotate(-1deg); }
        .fire-letter:nth-child(2) { transform: translateY(-2px) rotate(0.8deg); }
        .fire-letter:nth-child(3) { transform: translateY(1px) rotate(-0.5deg); }
        .fire-letter:nth-child(4) { transform: translateY(-1px) rotate(1deg); }

        @keyframes letter-flicker {
          0%,100% { transform: translateY(0) scale(1); text-shadow: 0 0 12px rgba(255,200,110,0.85), 0 0 28px rgba(255,110,40,0.85); }
          30% { transform: translateY(-3px) scale(1.02); text-shadow: 0 0 16px rgba(255,220,130,0.95), 0 0 36px rgba(255,140,50,0.95); }
          60% { transform: translateY(2px) scale(0.995); text-shadow: 0 0 10px rgba(255,180,90,0.75), 0 0 24px rgba(255,100,38,0.85); }
        }

        @keyframes inner-flicker {
          0% { transform: translateY(0) scale(1); opacity:1; }
          35% { transform: translateY(-8px) scale(1.08); opacity:0.7; }
          100% { transform: translateY(-3px) scale(1); opacity:0.95; }
        }

        @keyframes outer-flame {
          0% { background-position: 45% 64%; transform: translate3d(0,0,0) scale(1); opacity:0.92; filter: blur(16px) saturate(1.05) contrast(1.02); }
          40% { background-position: 58% 42%; transform: translate3d(0,-12px,0) scale(1.08); opacity:1; }
          100% { background-position: 48% 74%; transform: translate3d(0,-6px,0) scale(1); opacity:0.9; }
        }

        .tagline {
          margin: 1.5rem auto 1.75rem;
          font-size: 1.15rem;
          color: #f7f5ff;
          max-width: 640px;
          line-height: 1.6;
          opacity: 0.9;
        }

        .badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
        }

        .badge {
          background: linear-gradient(120deg, rgba(255, 132, 0, 0.25), rgba(255, 80, 47, 0.25));
          border: 1px solid rgba(255, 214, 165, 0.45);
          color: #ffe6c7;
          padding: 0.65rem 1rem;
          border-radius: 999px;
          font-size: 0.95rem;
          letter-spacing: 0.03em;
          backdrop-filter: blur(4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
          transition: transform 200ms ease, box-shadow 200ms ease;
        }

        .badge:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 34px rgba(0, 0, 0, 0.45);
        }

        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(30px, -20px) scale(1.05);
          }
        }

        @keyframes flicker {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(255, 196, 107, 0.8), 0 0 30px rgba(255, 120, 38, 0.9),
              0 0 60px rgba(255, 62, 0, 0.8), 0 0 90px rgba(215, 25, 0, 0.65);
            transform: translateY(0px) scale(1);
          }
          35% {
            text-shadow: 0 0 16px rgba(255, 210, 140, 0.9), 0 0 40px rgba(255, 140, 38, 0.95),
              0 0 70px rgba(255, 82, 0, 0.9), 0 0 110px rgba(215, 25, 0, 0.7);
            transform: translateY(-2px) scale(1.01);
          }
          70% {
            text-shadow: 0 0 12px rgba(255, 170, 90, 0.75), 0 0 26px rgba(255, 110, 28, 0.85),
              0 0 52px rgba(255, 52, 0, 0.75), 0 0 90px rgba(200, 18, 0, 0.6);
            transform: translateY(1px) scale(0.995);
          }
        }

        @keyframes flame {
          0% {
            transform: translateY(0px) scale(1);
            opacity: 0.9;
          }
          50% {
            transform: translateY(-10px) scale(1.08);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-2px) scale(1);
            opacity: 0.85;
          }
        }

        @keyframes ember {
          0% {
            background-position: 45% 60%;
            transform: translate3d(0, 0, 0);
            opacity: 0.85;
          }
          50% {
            background-position: 55% 40%;
            transform: translate3d(0, -6px, 0) scale(1.02);
            opacity: 1;
          }
          100% {
            background-position: 48% 70%;
            transform: translate3d(0, -2px, 0);
            opacity: 0.9;
          }
        }
      `}</style>
    </main>
  );
}
