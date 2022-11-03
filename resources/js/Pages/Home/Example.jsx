import { ProductCards } from "@/Pages/Home/components/ProductCards";
import { Statistics } from "@/Pages/Home/components/Statistics";
import { MobilePhones } from "./components/MobilePhones";
import MySwiper from "./components/MySwiper";

import CartModal from "../Cart/CartModal";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example({ auth }) {
    return (
        <>
            <MySwiper />

            <ProductCards />

            <MobilePhones />
            <Statistics />
        </>
    );
}
