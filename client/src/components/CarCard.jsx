import carImage from "../assets/heroCar.png";
import { useState } from "react"
import PropTypes from 'prop-types';
import { Heart } from "lucide-react"
import {Link} from "react-router-dom";

const CarCard = ({year,make,model,type,kmDriven,price}) => {
    const [favorite, setFavorite] = useState(false)

    return (
        <>
            <div className="group relative w-full overflow-hidden rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)]">
                <div className="relative aspect-[6/3] w-full overflow-hidden object-fill">
                    <img
                        src={carImage}
                        alt="car-img"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className="p-4">
                    <Link to={"/viewcar"}>
                        <h3 className="text-xl font-semibold text-gray-900">{year} {make} {model}</h3>
                    </Link>
                    <p className="mt-1 text-sm text-gray-500">{type} • {kmDriven} km</p>
                    <div className="mt-2 flex items-center justify-between">
                        <span className="text-xl font-bold text-[#4361EE]">₹{price}</span>
                        <button
                            onClick={() => setFavorite(!favorite)}
                            className="rounded-full p-2 transition-colors hover:bg-gray-100"
                        >
                        <Heart size={20} strokeWidth={3} className={`h-6 w-6 ${favorite ? "fill-[#4361EE] text-[#4361EE]" : "text-gray-400"}`} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

CarCard.propTypes = {
    year: PropTypes.string,
    make: PropTypes.string,
    model: PropTypes.string,
    type: PropTypes.string,
    kmDriven: PropTypes.string,
    price: PropTypes.string
}

export default CarCard;