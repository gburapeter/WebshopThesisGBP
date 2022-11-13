/**
 * Stats Component - to illustrate the possible functions
 * Could be used for nav buttons or overview
 */
const StepsFooter = ({
    goToStep,
    nextStep,
    previousStep,
    totalSteps,
    step,
}) => (
    <div>
        {step > 1 && (
            <button
                onClick={previousStep}
                className={`w-20 text-center text-black font-bold ml-4 bg-red-300 hover:bg-red-500 btn-sm  `}
            >
                Previous
            </button>
        )}

        <button
            onClick={nextStep}
            className={`w-20 text-center text-black font-bold ml-4 bg-indigo-300 hover:bg-indigo-500 btn-sm  `}
        >
            {step < totalSteps ? "Next" : "Submit"}
        </button>
    </div>
);

export default StepsFooter;
