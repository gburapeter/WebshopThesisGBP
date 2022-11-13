import { useForm, usePage } from "@inertiajs/inertia-react";
import StepWizard from "react-step-wizard";
import StepNavigation from "./StepNavigation";
import BillingInfoStep from "./Steps/BillingInfoStep";
import DeliveryInfoStep from "./Steps/DeliveryInfoStep";
import OrderSummaryStep from "./Steps/OrderSummaryStep";
import ProductCheckStep from "./Steps/ProductCheckStep";
import pickBy from "lodash/pickBy";
/* eslint react/prop-types: 0 */

const Wizard = ({ address }) => {
    const { auth } = usePage().props;
    const formData = { ...pickBy(address), ...pickBy(auth.user.data) };
    const { data, setData, post, errors } = useForm(formData);

    return (
        <div>
            <StepWizard isHashEnabled nav={<StepNavigation />}>
                <ProductCheckStep hashKey={"ProductReview"} />
                <DeliveryInfoStep
                    hashKey={"DeliveryInfo"}
                    data={data}
                    setData={setData}
                    errors={errors}
                    post={post}
                />
                <BillingInfoStep
                    hashKey={"BillingInfo"}
                    data={data}
                    setData={setData}
                    errors={errors}
                    post={post}
                />
                <OrderSummaryStep hashKey={"OrderSummary!"} data={data} />
            </StepWizard>
        </div>
    );
};

export default Wizard;
