import { ProductCards } from "@/Pages/Home/components/ProductCards";
import { Statistics } from "@/Pages/Home/components/Statistics";
import { MobilePhones } from "./components/MobilePhones";
import MySwiper from "./components/MySwiper";
import Zoom from "react-reveal/Zoom";
import CartModal from "../Checkout/components/CartModal";

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
