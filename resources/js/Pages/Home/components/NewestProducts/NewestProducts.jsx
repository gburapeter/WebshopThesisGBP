import HoverAnimation from "@/Components/HoverAnimation";
import NewestProductCard from "./NewestProductCard";

export const NewestProducts = ({ newestProducts }) => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Limited offer
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <span className="relative">Browse </span>
                    </span>{" "}
                    our{" "}
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                        newest additions
                    </span>
                </h2>
            </div>
            <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mb-8">
                {newestProducts?.map((product, index) => (
                    <NewestProductCard key={index} product={product} />
                    // <a
                    //     key={index}
                    //     href={route("products.show", [product])}
                    //     class="group"
                    // >
                    //     <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-w-7 xl:aspect-h-8">
                    //         <img
                    //             src={product.image_path + "/Main.jpg"}
                    //             alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    //             className="h-56 w-full object-contain lg:h-72 transition-transform duration-500 group-hover:scale-105 "
                    //         />
                    //     </div>
                    //     <h3 class="mt-4 text-sm font-bold text-black hover:text-indigo-500">
                    //         {product.product_name}
                    //     </h3>
                    //     <p class="mt-1 text-lg font-medium text-gray-900">
                    //         ${product.product_price}
                    //     </p>
                    // </a>
                ))}
            </div>

            <div className="text-center">
                <a
                    href={route("categories.show", [2])}
                    className="inline-flex items-center font-bold justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded-full shadow-lg md:w-auto bg-indigo-400 hover:bg-indigo-500"
                >
                    Browse all
                </a>
            </div>
        </div>
    );
};
