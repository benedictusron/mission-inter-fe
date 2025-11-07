import bgHero from '../../assets/hero.jpg'    
function Hero() {
  return (
    <section className="flex items-center justify-center px-5 sm:w-full sm:px-[120px] ">
            <div className="container max-w-fit sm:h-[400px] bg-cover bg-center mt-16 mb-6 
            rounded-[10px] bg-black/80 bg-blend-darken object-cover" style={{ backgroundImage: `url(${bgHero})` }}>
                <div className=" relative items-center text-center justify-center pt-9 sm:pt-20 mx-5 sm:max-w-fit sm:mx-[140px] ">
                    <h1 className="text-2xl font-bold pb-3 text-light-primary sm:text-5xl">Revolusi Pembelajaran: Temukan
                        Ilmu Baru
                        melalui
                        Platform Video
                        Interaktif!</h1>
                    <p className="text-sm pb-6 text-light-primary sm:text-base">Temukan ilmu baru yang menarik dan mendalam
                        melalui
                        koleksi
                        video
                        pembelajaran
                        berkualitas tinggi. Tidak hanya itu,
                        Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                    </p>
                </div>
                <div className="flex items-center justify-center sm:flex sm:justify-center sm:mx-auto mx-5">
                    <button type="button"
                        className="w-[280px] text-sm font-bold text-light-primary bg-primary px-1 py-2.5 rounded-[10px] mb-9 sm:w-[372px] hover:bg-primary-400">
                        Temukan Video Course untuk Dipelajari!
                    </button>
                </div>
            </div>
        </section>
    
  )
}

export default Hero