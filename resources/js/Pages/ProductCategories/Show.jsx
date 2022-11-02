import React from "react";

import ProductsList from "../Products/components/ProductsList";

const Show = ({ productCategory, products, acceptedFilters }) => {
    return (
        <div className="bg-white ">
            <ProductsList
                products={products}
                productCategory={productCategory}
                acceptedFilters={acceptedFilters}
            />
        </div>
    );
};

export default Show;
