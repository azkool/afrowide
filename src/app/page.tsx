import Navbar from "@/ui/components/Navbar";
import Cards from "@/ui/components/Cards";
const Home = () => {

    return (
        <>
           <Navbar />
            <div className='flex justify-center items-center h-screen'>
                <h1 className='text-3xl font-bold underline'>Afrowide</h1>
                <Cards />
            </div>
            
        </>        
    )
}

export default Home