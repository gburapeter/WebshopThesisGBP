/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition, Dialog, Popover, Tab } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import MyTabs from './MyTabs';

import { Tabs2 } from './Tabs2';
import Footer from '@/Layouts/LayoutComponents/Footer';
import Header from '@/Layouts/LayoutComponents/Header';


import MySwiper from '@/Components/MySwiper';

import Header1 from '../Layouts/LayoutComponents/Header1';
import Header2 from '../Layouts/LayoutComponents/Header2';
import { MainPageMobile } from '../Components/MainPageMobile';
import { ProductCards } from '@/Components/ProductCards';
import { MobilePhones } from '@/Components/MobilePhones';
import { Statistics } from '@/Components/Statistics';





const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>


     <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />

  <div className="drawer-content">


  <div className="min-h-full">


  <Header2 user={user} />
  <Header1 user={user} />



        <header className="bg-primary shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}

          {/* <Carousel2 /> */}
          <MySwiper />

          <ProductCards />

          <MobilePhones />
          {/* <MainPageMobile /> */}
          <Statistics />






      {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">


            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>

  </div>
  <div className="drawer-side">



  <label htmlFor="my-drawer" className="drawer-overlay"></label>

    <div className=" p-4 overflow-y-auto w-1/2 bg-gradient-to-r from-yellow-400 via-gray-50 to-teal-300">
        <div className="w-full">
{/* <Tabs2 color="green"/> */}
    <MyTabs />


        </div>
              </div>
  </div>
</div>
<Footer />
    </>
  )
}
