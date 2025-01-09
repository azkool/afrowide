import cardsData from '@/lib/cardsData'

// Populate the blog posts with data from cardsData

import Image from 'next/image'

// ... previous code remains the same
const Cards = () => {
    return (
        <div>
            {
                cardsData.map((card) => (
                    <div className="relative max-w-sm w-full rounded-lg overflow-hidden shadow-lg" key={card.id}>
                      <Image className="w-full h-48 object-cover" src={card.image} alt={card.title} width={320}  height={300}/>
                      <div className="px-6 py-4">
                    
                        <div className="font-bold text-xl mb-2">{card.title}</div>
                        <p className="text-gray-700 text-base">{card.description}</p>
                      </div>
                      <div className="absolute bottom-0 w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-500">
                        <span className="text-white">Read More</span>
                      </div>
                    </div>
                ))
            }
        </div>
    )
} 

export default Cards