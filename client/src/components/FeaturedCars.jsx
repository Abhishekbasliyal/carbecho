import CarCard from "./CarCard.jsx";

export default function FeaturedCars(){
    return(
        <>
            <div className={"grid grid-cols-3 gap-10"}>

                <CarCard
                    year={"2020"}
                    make={"Hyundai"}
                    model={"Creta"}
                    type={"Diesel"}
                    kmDriven={"12000"}
                    price={"400000"}
                />
                <CarCard
                    year={"2020"}
                    make={"Hyundai"}
                    model={"Creta"}
                    type={"Diesel"}
                    kmDriven={"12000"}
                    price={"400000"}
                />
                <CarCard
                    year={"2020"}
                    make={"Hyundai"}
                    model={"Creta"}
                    type={"Diesel"}
                    kmDriven={"12000"}
                    price={"400000"}
                />

            </div>
        </>
    )
}