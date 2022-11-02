import React from "react";

import ProductsList from "../Products/components/ProductsList";

const Show = ({ productCategory, products }) => {
    return (
        <div className="bg-white ">
            <ProductsList
                products={products}
                productCategory={productCategory}
            />
        </div>
    );
};

export default Show;
