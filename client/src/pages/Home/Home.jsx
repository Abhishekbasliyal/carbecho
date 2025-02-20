import HeroSection from "../../components/HeroSection.jsx";
import FeaturedCarsSection from "../../components/FeaturedCarsSection.jsx";
import TestimonialsSection from "../../components/TestimonialsSection.jsx";

function Home(){
    return(
        <>
            <div>
                <HeroSection/>
                <FeaturedCarsSection/>
                <TestimonialsSection/>
            </div>
        </>
    )
}

export default Home;