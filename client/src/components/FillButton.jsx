import PropTypes from 'prop-types';

const FillButton = ({txt}) => {
    return(
        <>
            <button
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-[#4361EE] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#4361EE]/90 transition-colors">
                {/*<Search className="mr-2 h-4 w-4"/>*/}
                {txt}
            </button>
        </>
    )
}

FillButton.propTypes = {
    txt: PropTypes.string,
}

export default FillButton;