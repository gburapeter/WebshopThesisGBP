import { createContext } from "react";
import Wizard from "./components/Wizard/Wizard";

// export const AddressContext = createContext();

const Index = ({ address }) => {
    return (
        <div>
            <section className="bg-white text-gray-600 ">
                {/* <AddressContext.Provider value={address}> */}
                <Wizard address={address} />
                {/* </AddressContext.Provider> */}
            </section>
        </div>
    );
};

export default Index;
