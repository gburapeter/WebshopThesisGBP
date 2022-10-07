/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition, Dialog, Popover, Tab } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import MyTabs from './MyTabs';

import { Tabs2 } from './Tabs2';
import Footer from '@/Layouts/LayoutComponents/Footer';
import Header from '@/Layouts/LayoutComponents/Header';

import Carousel2 from '../Components/Carousel2';
import MySwiper from '@/Components/MySwiper';
import Asd from '@/Components/Asd';




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
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}

     <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />

  <div className="drawer-content">


  <div className="min-h-full">

       <Header user={user} />

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}

          {/* <Carousel2 /> */}
          <MySwiper />



      {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />

            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>

  </div>
  <div className="drawer-side">



  <label htmlFor="my-drawer" className="drawer-overlay"></label>

    <div className=" p-4 overflow-y-auto w-1/2 bg-white">
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
