import React from "react";

import ProductsList from "../Products/components/ProductsList";

const Show = ({ productCategory, products }) => {
    return (
        <div>
            <ProductsList products={products} />
        </div>
    );
};

export default Show;
