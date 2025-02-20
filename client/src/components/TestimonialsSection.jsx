import ReviewCard from "./ReviewCard.jsx";
import img1 from '../assets/man1.png'
import img2 from '../assets/man2.png'
import img3 from '../assets/man3.png'

export default function TestimonialsSection(){
    return(
        <>
            <div className={"px-24 mt-16  bg-[#f9fafb]"}>
                <h2 className={"font-semibold text-center text-3xl py-10"}>What Our Customers Say</h2>
                <div className={"grid grid-cols-3 gap-10"}>
                    <ReviewCard
                        name={"Pragyan Patidar"}
                        review={"Excellent service and great selection of cars. The staff was very helpful and professional throughout the entire process."}
                        rating={4}
                        imgURI={img1}
                    />
                    <ReviewCard
                        name={"Pragyan Patidar"}
                        review={"Excellent service and great selection of cars. The staff was very helpful and professional throughout the entire process."}
                        rating={4}
                        imgURI={img2}
                    />
                    <ReviewCard
                        name={"Pragyan Patidar"}
                        review={"Excellent service and great selection of cars. The staff was very helpful and professional throughout the entire process."}
                        rating={4}
                        imgURI={img3}
                    />
                </div>
            </div>
        </>
    )
}