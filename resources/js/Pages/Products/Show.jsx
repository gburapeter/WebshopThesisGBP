import { StarIcon } from "@heroicons/react/20/solid";
import { Inertia } from "@inertiajs/inertia";
import { Zoom } from "react-awesome-reveal";
import Breadcrumb from "./components/Breadcrumb";
import { ProductMedia } from "./components/ProductMedia";
import TechnicalSpecifications from "./components/TechnicalSpecifications";
import  FlyingButton  from 'react-flying-item';
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Show = ({ myProduct, category }) => {
    return (
        <div className="bg-white">
            <div className="pt-6">
                <Breadcrumb category={category} myProduct={myProduct} />
                {/* Product media */}

                <ProductMedia myProduct={myProduct} />
                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            {myProduct.product_name}
                        </h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">
                            {myProduct.product_price}$
                        </p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                0 > rating
                                                    ? "text-gray-900"
                                                    : "text-gray-200",
                                                "h-5 w-5 flex-shrink-0"
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">0 out of 5 stars</p>
                                <a
                                    href="#"
                                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    0 reviews
                                </a>
                            </div>
                        </div>
                        <FlyingButton flyingItemStyling={{ "zIndex": "10" }} src={myProduct.image_path + "/Main.jpg"} animationDuration={1} targetTop={'-20%'} targetLeft={'80%'}>

                        <a
                            onClick={() =>
                                Inertia.post(
                                    route("cartitems.store", [myProduct])
                                )
                            }
                            className="mt-10 flex w-80 items-center justify-center rounded-md border border-transparent bg-indigo-500 py-3 px-8 text-base font-medium text-white hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Add to cart
                                </a>

                        </FlyingButton>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                        {/* Specs  */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">
                                    {myProduct.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Zoom>
                    <TechnicalSpecifications />
                </Zoom>
            </div>
        </div>
    );
};
export default Show;
