import CarCard from "./CarCard.jsx";

export default function FeaturedCars(){
    return(
        <>
            <div className={"grid grid-cols-3 gap-8"}>

                <CarCard
                    year={"2020"}
                    make={"Hyundai"}
                    model={"Creta"}
                    type={"Diesel"}
                    kmDriven={"12000"}
                    price={"400000"}
                />
                <CarCard
                    year={"2021"}
                    make={"Renault"}
                    model={"Kwid"}
                    type={"Petrol"}
                    kmDriven={"13339"}
                    price={"398000"}
                />
                <CarCard
                    year={"2022"}
                    make={"Maruti"}
                    model={"Celerio"}
                    type={"Petrol"}
                    kmDriven={"38334"}
                    price={"494000"}
                />

            </div>
        </>
    )
}