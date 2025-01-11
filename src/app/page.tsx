import Navbar from "@/ui/components/Navbar";
import Cards from "@/ui/components/Cards";
import Carousel from '@/ui/components/Carousel';
const Home = () => {

    return (
        <div className='relative'>
           <Navbar />
           <Carousel />
            <div className='h-screen'>
                <Cards />
            </div>
            
        </div>        
    )
}

export default Home