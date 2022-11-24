const techImages = [
    {
        alt: "Inch",
        href: "../images/Products/Laptops/Apple/tec1.jpg",
    },
    {
        alt: "Material",
        href: "../images/Products/Laptops/Apple/tec2.jpg",
    },
    {
        alt: "Keyboard",
        href: "../images/Products/Laptops/Apple/tec3.jpg",
    },
    {
        alt: "Box",
        href: "../images/Products/Laptops/Apple/tec4.jpg",
    },
];

const specs = [
    { name: "Chip", description: "Apple M2 chip" },
    {
        name: "Media engine",
        description: "Hardware-accelerated H.264",
    },
    { name: "Display", description: "Retina display 13.3-inch (diagonal) " },
    {
        name: "Battery and Power",
        description: "58.2-watt-hour lithium-polymer battery",
    },
    { name: "Memory", description: "8GB unified memory" },
    {
        name: "Storage",
        description: "512GB",
    },
];

export default function TechnicalSpecifications() {
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Technical Specifications
                    </h2>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {specs.map((feature, index) => (
                            <div
                                key={index}
                                className="border-t border-gray-200 pt-4"
                            >
                                <dt className="font-bold text-indigo-700">
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-sm text-gray-500 hover:text-indigo-800">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="pt-24 grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    {techImages.map((image, index) => (
                        <img
                            key={index}
                            src={image.href}
                            alt={image.alt}
                            className="rounded-lg object-fill bg-gray-100 w-80 h-full"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
