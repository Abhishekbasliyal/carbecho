import PropTypes from 'prop-types';
import { Star } from 'lucide-react';

const ReviewCard = ({name, review, imgURI, rating = 5}) => {
    return(
        <>
            <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                        <img
                            src={imgURI}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-medium text-gray-900">{name}</h3>
                        <div className="flex gap-1 mt-1">
                            {[...Array(rating)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    className="fill-yellow-400 text-yellow-400"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <p className="text-gray-600 italic">&quot;{review}&quot;</p>
            </div>
        </>
    )
}

ReviewCard.propTypes = {
    name: PropTypes.string,
    review: PropTypes.string,
    imgURI: PropTypes.string,
    rating: PropTypes.number,
}

export default ReviewCard;