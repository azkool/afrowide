import cardsData from '@/lib/cardsData'

// Populate the blog posts with data from cardsData

import Image from 'next/image'

// ... previous code remains the same
const Cards = () => {
  return (
    <div className="mt-[8rem] bg-white">
      {cardsData.map((card) => (
        <div className="flex flex-col gap-3" key={card.id}>
          <div className="">
            <div className="relative h-[18.75rem] w-full rounded-lg">
              <Image
                className="absolute top-0 left-0 w-full object-cover"
                src={card.image}
                alt={card.title}
                width={320}
                height={300}
              />

              <span className="flex justify-center absolute top-2 left-3 bg-white text-black w-[4.875rem] h-[1.875rem] rounded-3xl text-[1rem]">
                Music
              </span>
            </div>
            <div className="text-black">
              <div>
                <p>{card.date}</p>
                <h2>{card.title}</h2>
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, neque!</h3>
              
</div>
              <div>
                <Image
                  className="rounded-full"
                  src={card.authorImage}
                  alt={''}
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
