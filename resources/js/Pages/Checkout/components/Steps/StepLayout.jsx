import React from "react";
import StepsFooter from "./StepsFooter";

const StepLayout = ({ children }) => {
    return (
        <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
            {children}
        </div>
    );
};

export default StepLayout;
