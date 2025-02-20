import FeaturedCars from "./FeaturedCars.jsx";
import FillButton from "./FillButton.jsx";

export default function FeaturedCarsSection(){
    return(
        <>
            <div className={"px-24"}>
                <h2 className={"font-semibold text-center text-3xl my-12"}>Featured Cars</h2>
                <FeaturedCars/>
                <div className={"text-center py-8"}>
                    <FillButton txt={"View All Cars"}/>
                </div>
            </div>
        </>
    )
}