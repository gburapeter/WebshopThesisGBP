import { usePage } from "@inertiajs/inertia-react";

// import { Tab } from "@headlessui/react";
import React, { useEffect } from "react";
import { useTabs, TabPanel } from "react-headless-tabs";
import { CategoryBox } from "./components/CategoryBox";
import { TabSelector } from "./components/TabSelector";
export default function SidebarDrawer() {
    const [openTab, setOpenTab] = React.useState();
    const { categories } = usePage().props;

    const categoriesArr = categories.map(({ category_name }) => category_name);

    const [selectedTab, setSelectedTab] = useTabs(categoriesArr);
    return (
        <>
            <nav className="flex border-b justify-between border-gray-300 ">
                {categories.map(
                    ({
                        id,
                        category_name,
                        category_code,
                        category_description,
                    }) => (
                        <TabSelector
                            key={id}
                            isActive={selectedTab === category_name}
                            onClick={() => setSelectedTab(category_name)}
                        >
                            {category_name}
                        </TabSelector>
                    )
                )}
            </nav>
            <div className="p-4">
                {categories.map(
                    ({
                        id,
                        category_name,
                        category_code,
                        category_description,
                        subcategories,
                    }) => (
                        <TabPanel
                            key={id}
                            hidden={selectedTab !== category_name}
                        >
                            <div className="grid gap-y-10 gap-x-8 py-16">
                                <div className="space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
                                    {subcategories.map(
                                        ({ id, category_name, image_path }) => (
                                            <CategoryBox
                                                key={id}
                                                category_name={category_name}
                                                image_path={image_path}
                                                category={id}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </TabPanel>
                    )
                )}
            </div>
        </>
    );
}
