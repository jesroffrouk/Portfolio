import ProfileCard from "./ProfileCard/ProfileCard"

function Hero() {
  return (
<div className="flex flex-col justify-between gap-4 sm:mt-10 mt-4 mx-4 sm:mx-16 lg:flex-row">
    <div className="p-4 sm:p-10 overflow-hidden flex-none aspect-auto">
        <ProfileCard
            name="Jogendra Padhan"
            title="Web Developer"
            handle="jesroff"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/heroImage.png"
            showUserInfo={true}
            enableTilt={true}
            iconUrl="/code.png"
            showBehindGradient={true}
            enableMobileTilt={false}
            onContactClick={() => window.open('https://x.com/JesroffR')}
        />
    </div>
    <div className="h-auto lg:h-[500px] flex flex-col m-2 sm:m-5 mt-4 sm:mt-8 pt-2 sm:pt-4 lg:pt-14 items-start justify-center gap-2 sm:gap-3">
        {/* 3 component */}
        <p className="text-3xl sm:text-4xl lg:text-6xl font-extrabold">Hi I'm</p>
        <p className="text-3xl sm:text-4xl lg:text-6xl font-semibold">Jogendra Padhan</p>
        <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-400 font-bold">a.k.a Jesroff</p>
        <p className="text-sm sm:text-base lg:text-lg">
            i am a self taught full stack developer. <br />
            A programming geek who always into learning new tech tools <br className="hidden sm:block" /> 
            that speed up or gives us new experiences. <br className="hidden sm:block" />
            Very active on Twitter.
        </p>
    </div>
</div>
  )
}

export default Hero
