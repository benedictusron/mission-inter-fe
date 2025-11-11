import Header from '../../layouts/Header.jsx'
import Hero from './Hero'
import { ListCategory, Products } from '../../data/data.jsx'
import ProductCard from '../../components/ui/ProductCard.jsx'
import BannerCTA from './BannerCTA.jsx'
import Footer from '../../layouts/Footer.jsx'

function Home() {
  return (
    <>
      <Header />
      <main className='px-5 md:max-w-[1200px] md:mx-auto'>
        <Hero />
        <div className="flex flex-col mt-6  md:mt-16 gap-2.5">
          <h3 className="text-2xl font-semibold sm:text-[32px]">Koleksi Video Pembelajaran Unggulan</h3>
          <p className="text-base">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </div>
        {/* category */}
        <div className='mb-8 mt-8'>
          <ul className='flex overflow-x-auto hide-scrollbar'>
            {ListCategory.map((category) => (
              <li
                key={category.id}
                className={`relative cursor-pointer text-base font-medium pr-9  hover:text-tertiary 
                ${category.id === 1 ? 'text-tertiary' : 'text-black-secondary'} pb-3 whitespace-nowrap`}>
                {category.name}
                {category.id === 1 && (
                  <div className="h-2 rounded-full w-1/2 bg-tertiary mt-3"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Card  */}
        <div className=' gap-6 justify-items-center grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  '>
          {Products.map((product) => (
            <ProductCard
              key={product.id}
              contentImage={product.contentImage}
              title={product.title}
              description={product.description}
              instructor={product.instructor}
              rating={product.rating}
              reviewCount={product.reviewCount}
              price={product.price}
            />
          ))}
        </div>
        <BannerCTA />
      </main>
      <Footer />
    </>
  )
}

export default Home