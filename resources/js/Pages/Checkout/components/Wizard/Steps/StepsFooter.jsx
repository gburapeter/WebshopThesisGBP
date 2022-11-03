/**
 * Stats Component - to illustrate the possible functions
 * Could be used for nav buttons or overview
 */
const StepsFooter = ({ nextStep, previousStep, totalSteps, step }) => (
    <div>
        {step > 1 && (
            <button
                onClick={previousStep}
                className={`w-20 text-center ml-4 bg-error btn-sm  `}
            >
                Previous
            </button>
        )}
        {step < totalSteps ? (
            <button
                onClick={nextStep}
                className={`w-20 text-center ml-4  bg-primary btn-sm  `}
            >
                Next
            </button>
        ) : (
            <button
                onClick={nextStep}
                className={`w-20 text-center ml-4  bg-primary btn-sm  `}
            >
                Submit
            </button>
        )}
    </div>
);

export default StepsFooter;
