import { NewestProducts } from "@/Pages/Home/components/NewestProducts/NewestProducts";
import { Statistics } from "@/Pages/Home/components/Statistics/Statistics";
import { Zoom } from "react-awesome-reveal";
import { MobileAdvertisement } from "./components/MobileAdvertisement";
import HomepageSlideshow from "./components/HomepageSlideshow";

export default function Homepage({ auth, newestProducts }) {
    return (
        <>
            <HomepageSlideshow />

            <Zoom>
                <NewestProducts newestProducts={newestProducts} />

                <MobileAdvertisement />

                <Statistics />
            </Zoom>
        </>
    );
}
