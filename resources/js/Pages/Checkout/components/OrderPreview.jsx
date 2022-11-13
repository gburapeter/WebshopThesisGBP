import HoverAnimation from "@/Components/HoverAnimation";
import { PaperClipIcon } from "@heroicons/react/20/solid";

export default function OrderPreview({ data, goToStep }) {
    return (
        <div className="overflow-hidden bg-white shadow ">
            {/* DELIVERY INFO */}
            <HoverAnimation>
                <div
                    onClick={() => goToStep(2)}
                    className="p-8 bg-white shadow-lg cursor-pointer border-t border-l border-r border-indigo-500"
                >
                    <p className="inline-block mb-3 text-xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
                        Delivery info
                    </p>

                    <div className="pt-5 flex items-center">
                        <div>
                            <p className="font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-400">
                                {data.firstname} {data.lastname}
                            </p>

                            <p className="text-sm font-medium leading-4 text-gray-600">
                                {data.country}
                                {" ,"}
                                {data.city}
                            </p>

                            <p className="text-sm font-medium leading-4 text-gray-600">
                                {data.postal_code} {data.street_name}{" "}
                                {data.street_number}
                            </p>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                {data.phone}
                            </p>
                        </div>
                    </div>
                </div>
            </HoverAnimation>
            {/* BILLING INFO */}
            <HoverAnimation>
                <div
                    onClick={() => goToStep(3)}
                    className="p-8 bg-white cursor-pointer border border-indigo-500  shadow-sm"
                >
                    <a
                        href="/"
                        aria-label="Article"
                        title="Jingle Bells"
                        className="inline-block mb-3 text-xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        Billing info
                    </a>

                    <div className="pt-5 flex items-center">
                        <div>
                            <p className="font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-400">
                                {data.firstname} {data.lastname}
                            </p>

                            <p className="text-sm font-medium leading-4 text-gray-600">
                                {data.country}
                                {" ,"}
                                {data.city}
                            </p>

                            <p className="text-sm font-medium leading-4 text-gray-600">
                                {data.postal_code} {data.street_name}{" "}
                                {data.street_number}
                            </p>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                                {data.phone}
                            </p>
                        </div>
                    </div>
                </div>
            </HoverAnimation>
        </div>
    );
}
