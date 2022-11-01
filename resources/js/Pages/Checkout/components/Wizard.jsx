import { useState } from "react";
import StepWizard from "react-step-wizard";
import StepNavigation from "./StepNavigation";
import BillingInfoStep from "./Steps/BillingInfoStep";
import DeliveryInfoStep from "./Steps/DeliveryInfoStep";
import OrderSummaryStep from "./Steps/OrderSummaryStep";
import ProductCheckStep from "./Steps/ProductCheckStep";
/* eslint react/prop-types: 0 */

/**
 * A basic demonstration of how to use the step wizard
 */
const Wizard = () => {
    const [state, updateState] = useState({
        form: {},
    });

    const updateForm = (key, value) => {
        const { form } = state;

        form[key] = value;
        updateState({
            ...state,
            form,
        });
    };

    // Do something on step change
    const onStepChange = (stats) => {
        console.log(state.form);
    };

    return (
        <div>
            <StepWizard
                onStepChange={onStepChange}
                isHashEnabled
                nav={<StepNavigation />}
            >
                <ProductCheckStep
                    hashKey={"ProductReview"}
                    update={updateForm}
                />
                <DeliveryInfoStep hashKey={"DeliveryInfo"} form={state.form} />
                <BillingInfoStep hashKey={"BillingInfo"} form={state.form} />
                <OrderSummaryStep hashKey={"OrderSummary!"} />
            </StepWizard>
        </div>
    );
};

export default Wizard;
