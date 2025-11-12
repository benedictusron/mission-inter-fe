import React from 'react'
import bgBanner from '../../assets/banner.jpg'
import Button from '../../components/ui/ButtonHero'

function BannerCTA() {
    return (
            <div
                className=" bg-cover bg-center h-[340px] md:h-[400px] my-16 rounded-[10px] bg-black/80 bg-blend-darken"
                style={{ backgroundImage:`url(${bgBanner})`}}>
                <div className=" text-center px-5 lg:px-[140px] pt-12 md:pt-[92px]">
                    <p className="pb-1 text-base md:text-lg text-light-secondary ">NEWSLETTER</p>
                    <h3 className="text-2xl md:text-[32px] font-bold pb-2.5 text-light-primary">Mau Belajar Lebih Banyak?
                    </h3>
                    <p className="pb-6 text-light-primary text-sm md:text-base/loose">Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                        penawaran
                        spesial dari program-program terbaik hariesok.id</p>
                    <form className="max-w-md mx-auto">
                        <div className="relative">
                            <input type="text"
                                className="block w-full  sm:p-4 text-center sm:text-start sm:ps-10 p-2.5 sm:h-[58px] text-base text-dark-secondary  rounded-lg bg-light-primary placeholder:text-black-secondary"
                                placeholder="Masukkan Emailmu" />
                            {/* <button type="submit"
                                className="px-5 mt-4 w-full sm:w-[133px] sm:absolute text-base sm:end-2 sm:bottom-2 font-bold text-light-primary bg-secondary py-2.5 rounded-[10px]">
                                Subscribe
                            </button> */}
                            <Button variant="secondary" style="cta">Subscribe</Button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default BannerCTA