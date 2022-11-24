import React from "react";

import ProductsList from "../Products/components/ProductsList";

const Show = ({
    productCategory,
    products,
    acceptedFilters,
    siblingCategories,
}) => {
    console.log(siblingCategories);
    return (
        <div className="bg-white ">
            <ProductsList
                products={products}
                productCategory={productCategory}
                acceptedFilters={acceptedFilters}
                siblingCategories={siblingCategories}
            />
        </div>
    );
};

export default Show;
