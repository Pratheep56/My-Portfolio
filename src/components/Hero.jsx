import { useEffect, useState } from 'react'

const typingLines = [
  'Web Developer',
  'AI & ML Enthusiast',
  'Creative Problem Solver',
  'Building the future, one line at a time',
]

function TypingAnimation() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const fullText = typingLines[currentLine]
    let timeout

    if (typing) {
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 40)
      } else {
        setCurrentLine((prev) => (prev + 1) % typingLines.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, typing, currentLine])

  return (
    <p className="text-lg font-medium h-7"
      style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: '#a0aec0' }}>
      {displayedText}
      <span className="animate-pulse text-white">|</span>
    </p>
  )
}

function Rocket() {
  return (
    <div className="hidden md:flex items-center justify-center w-full h-full overflow-visible">
      <div style={{ animation: 'float-rocket 8s ease-in-out infinite' }}>
        <svg
          viewBox="0 0 200 300"
          width="180"
          height="280"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Rocket body */}
          <ellipse cx="100" cy="130" rx="38" ry="80"
            fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
          <ellipse cx="100" cy="130" rx="34" ry="76"
            fill="rgba(255,255,255,0.04)" />

          {/* Rocket nose */}
          <path d="M100 30 C75 70 65 100 66 130 L134 130 C135 100 125 70 100 30Z"
            fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

          {/* Window */}
          <circle cx="100" cy="120" r="14"
            fill="none" stroke="rgba(180,180,255,0.3)" strokeWidth="1.5" />
          <circle cx="100" cy="120" r="10"
            fill="rgba(150,150,255,0.08)" />

          {/* Left fin */}
          <path d="M66 180 C50 190 45 210 55 220 L66 200Z"
            fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

          {/* Right fin */}
          <path d="M134 180 C150 190 155 210 145 220 L134 200Z"
            fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

          {/* Flame outer */}
          <ellipse cx="100" cy="222" rx="18" ry="28"
            fill="none" stroke="rgba(180,100,255,0.4)" strokeWidth="1.5"
            style={{ animation: 'twinkle 0.8s ease-in-out infinite' }} />

          {/* Flame inner */}
          <ellipse cx="100" cy="220" rx="10" ry="18"
            fill="rgba(220,150,255,0.15)"
            style={{ animation: 'twinkle 0.6s ease-in-out infinite' }} />

          {/* Flame core */}
          <ellipse cx="100" cy="218" rx="5" ry="10"
            fill="rgba(255,200,255,0.2)"
            style={{ animation: 'twinkle 0.4s ease-in-out infinite' }} />
        </svg>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-16"
    >
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 pt-24 pb-12">

        {/* LEFT — Glass box */}
        <div
          className="w-full md:w-1/2 rounded-2xl p-8 md:p-10 flex flex-col gap-6"
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Greeting */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Hi! I'm{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #f472b6, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 10px rgba(244, 114, 182, 0.5))',
                }}
              >
                Pratheep
              </span>{' '}
              <span
                className="inline-block"
                style={{ animation: 'wave 1s ease-in-out infinite' }}
              >
                👋
              </span>
            </h1>
          </div>

          {/* Typing animation */}
          <TypingAnimation />

          {/* Bio */}
          <p
            className="text-gray-400 text-base leading-relaxed"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            An aspiring Software Developer and AI Enthusiast, passionate about
            crafting web experiences and pushing the boundaries of what
            technology can do. From machine learning to modern web apps, I love
            turning ideas into reality. Always curious, always building —
            excited to see where this journey takes me.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-6 mt-2">

            {/* GitHub */}
            <a
              href="https://github.com/Pratheep56"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              title="GitHub"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755
                  -1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 
                  3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
                  0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                  0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 
                  1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
                  1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 
                  0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* Gmail */}
            <a
              href="mailto:pratheep0610@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              title="Gmail"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 
                  16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 
                  2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
            </a>

          </div>
        </div>

        {/* RIGHT — Rocket */}
        <div className="hidden md:flex w-1/2 items-center justify-center min-h-[400px]">
          <Rocket />
        </div>

      </div>
    </section>
  )
}