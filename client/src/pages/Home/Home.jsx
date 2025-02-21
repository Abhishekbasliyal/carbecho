import HeroSection from "../../components/HeroSection.jsx";
import FeaturedCarsSection from "../../components/FeaturedCarsSection.jsx";
import ReviewSection from "../../components/ReviewSection.jsx";

function Home(){
    return(
        <>
            <div>
                <HeroSection/>
                <FeaturedCarsSection/>
                <ReviewSection/>
            </div>
        </>
    )
}

export default Home;