import bgHero from '../../assets/hero.jpg'    
import Button from '../../components/ui/Button'
function Hero() {
  return (
    <section className="flex items-center justify-center px-5 md:max-w-[1200px] md:mx-auto ">
            <div className="container max-w-[1200px] py-9 sm:py-14  bg-cover bg-center mt-16 mb-6 
            rounded-[10px] bg-black/75 bg-blend-darken object-cover" style={{ backgroundImage: `url(${bgHero})` }}>
                {/* <div className=" relative items-center text-center justify-center pt-9 md:pt-20 mx-5 md:max-w-fit md:mx-[140px] "> */}
                <div className="items-center text-center px-4 sm:pt-10 md:pt-2.5  md:px-10 lg:px-[140px]">
                    <h1 className="text-2xl font-bold tracking-wide pb-3 text-light-primary sm:text-5xl">Revolusi Pembelajaran: Temukan
                        Ilmu Baru
                        melalui
                        Platform Video
                        Interaktif!</h1>
                    <p className="text-sm pb-6 leading-prose text-light-primary sm:text-base">Temukan ilmu baru yang menarik dan mendalam
                        melalui
                        koleksi
                        video
                        pembelajaran
                        berkualitas tinggi. Tidak hanya itu,
                        Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                    </p>
                </div>
                <div className="flex  justify-center  mx-5">
                    <Button
                        variant="primary"
                        >
                        Temukan Video Course untuk Dipelajari!
                        </Button>
                </div>
            </div>
        </section>
    
  )
}

export default Hero