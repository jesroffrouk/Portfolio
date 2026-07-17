import { useRef, useEffect } from "react"
import { Link } from "react-router"
import ProfileCard from "../ProfileCard/ProfileCard"

function Hero() {
  const containerRef = useRef(null)
  const cooldown     = useRef(false)
  const lastScroll   = useRef(0)
  const avatarUrl = "https://res.cloudinary.com/dfvuwqwf9/image/upload/v1781765295/heroImage_grhonh.png"

  // Wheel snap — mobile only
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onWheel = (e) => {
      if (window.innerWidth >= 1024) return
      e.preventDefault()
      if (cooldown.current) return
      const now = Date.now()
      if (now - lastScroll.current < 600) return
      lastScroll.current = now
      cooldown.current = true

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      const h = el.offsetHeight
      if (delta > 0) el.scrollTo({ top: h, behavior: "smooth" })
      else           el.scrollTo({ top: 0, behavior: "smooth" })

      setTimeout(() => { cooldown.current = false }, 650)
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
  }, [])

  // Active dot via IntersectionObserver
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const sections = el.querySelectorAll(".hero-section")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(sections).indexOf(entry.target)
            if (idx !== -1) setActiveSection(idx)
          }
        })
      },
      { root: el, threshold: 0.6 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="
        w-full h-full
        flex flex-col overflow-y-scroll overflow-x-hidden
        [scroll-snap-type:y_mandatory] scroll-smooth
        [scrollbar-none] [&::-webkit-scrollbar]:hidden
        lg:flex-row lg:overflow-hidden lg:[snap-none]
        lg:items-center lg:border-b lg:border-gray-800
      "
    >
      {/* ── Section 1 — Profile Card ── */}
      <div
        className="
          hero-section
          shrink-0 w-full h-full
          flex items-center justify-center
          p-6 sm:p-10
          [snap:start]
          lg:w-1/2 lg:[scroll-snap-align:unset]
        "
      >
        <ProfileCard
          name="Jogendra Padhan"
          title="Just A Tech"
          handle="jesroff"
          status="Online"
          contactText="Contact Me"
          avatarUrl={avatarUrl}
          showUserInfo={true}
          enableTilt={true}
          iconUrl="#"
          showBehindGradient={true}
          enableMobileTilt={false}
          onContactClick={() => window.open("https://x.com/JesroffR")}
        />
      </div>

      {/* ── Section 2 — Text block ── */}
      <div
        className="
          hero-section
          shrink-0 w-full h-full
          flex items-center justify-center
          p-6 sm:p-10
          [snap-start] [snap-always]
          lg:w-1/2 lg:[scroll-snap-align:unset]
        "
      >
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 max-w-lg">
          <p className="text-3xl sm:text-4xl lg:text-6xl font-extrabold">Hi I'm</p>
          <p className="text-3xl sm:text-4xl lg:text-6xl font-semibold">Jogendra Padhan</p>
          <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-400 font-bold">Just a Tech</p>
          <p className="text-sm sm:text-base lg:text-lg">
            I'm a developer from India. Just a tech guy who prefers living in a terminal because,
            honestly, it feels right. I spend my time writing code, building projects, and figuring
            out how it all works behind the screen.
            <br />
            → find me on{" "}
            <span className="hover:text-blue-300 cursor-pointer hover:underline">
              <Link to="https://x.com/JesroffR">Twitter!</Link>
            </span>
          </p>

          {/* Dots — mobile only, driven by IntersectionObserver */}
        </div>
      </div>
    </div>
  )
}

export default Hero
