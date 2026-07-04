import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import useActiveSection from "../../hooks/useActiveSection";

const navItems = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const drawerRef = useRef(null);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 1024) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [drawerOpen]);

  useEffect(() => {
    const outsideClick = (e) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target)
      ) {
        setDrawerOpen(false);
      }
    };

    if (drawerOpen) {
      document.addEventListener("mousedown", outsideClick);
    }

    return () =>
      document.removeEventListener("mousedown", outsideClick);
  }, [drawerOpen]);

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setDrawerOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed left-1/2 top-7 z-50 w-[calc(100%-32px)] max-w-6xl -translate-x-1/2"
      >
        <div
          className={`
            mx-auto
            flex
            h-16
            items-center
            justify-between
            rounded-full
            border
            px-7
            transition-all
            duration-300

            ${
              scrolled
                ? "border-white/15 bg-white/8 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,.45)]"
                : "border-white/10 bg-white/6 backdrop-blur-xl"
            }
          `}
        >
          {/* Logo */}

          <button
            onClick={() => scrollToSection("home")}
            className="group cursor-pointer"
          >
            <span className="font-['Space_Grotesk'] text-xl font-bold tracking-[0.25em]">
              <span className="text-cyan-400 transition group-hover:text-cyan-300">
                P
              </span>

              <span className="text-violet-400 transition group-hover:text-violet-300">
                S
              </span>
            </span>
          </button>

          {/* Desktop */}

          <div className="hidden lg:flex items-center gap-9">
            {navItems.map((item) => {
              const active = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative
                    cursor-pointer
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }
                  `}
                >
                  {item.label}

                  <motion.span
                    layoutId="navbar-indicator"
                    className={`
                      absolute
                      left-0
                      -bottom-2
                      h-[3px]
                      rounded-full
                      bg-cyan-400
                      ${
                        active
                          ? "w-full"
                          : "hidden"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile */}

          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Overlay */}

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />

            <motion.aside
              ref={drawerRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28 }}
              className="fixed right-0 top-0 z-50 h-screen w-72 border-l border-white/10 bg-[#070B1C]/95 backdrop-blur-2xl"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-white/10 p-6">
                  <span className="font-bold tracking-[0.25em] text-white">
                    PS
                  </span>

                  <button onClick={() => setDrawerOpen(false)} className="cursor-pointer">
                    <X />
                  </button>
                </div>

                <div className="mt-8 flex flex-col">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-8 py-5 text-left text-lg transition cursor-pointer
                                    ${ activeSection===item.id ? "text-cyan-400 bg-white/5" : "text-slate-300 hover:bg-white/5 hover:text-white"
                                    }
                                    `}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}