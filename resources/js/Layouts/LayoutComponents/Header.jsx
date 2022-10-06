import React from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition, Dialog, Popover, Tab } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
    { name: "Reports", href: "#", current: false },
];
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
export default function Header({ user}) {


    return (



 <Disclosure as="nav" className="bg-light">
 {({ open }) => (
   <>
     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div className="flex h-16 items-center justify-between">
         <div className="flex items-center">
           <div className="flex-shrink-0 ">


   <a href="" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300  hover:text-white">

           <label htmlFor="my-drawer" className=" cursor-pointer drawer-button">
           <div className="flex items-center">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
</svg>
<div>
<span className="ml-2 font-bold">

Categories
</span>
</div>
</div>


               </label>
   </a>

           </div>
           <div className="hidden md:block">
             <div className="ml-10 flex items-baseline space-x-4">
               {navigation.map((item) => (
                 <a
                   key={item.name}
                   href={item.href}

                   className={classNames(
                     item.current
                       ? 'bg-gray-900 text-white'
                       : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                     'px-3 py-2 rounded-md text-sm font-medium '
                   )}
                   aria-current={item.current ? 'page' : undefined}
                 >
                   {item.name}
                 </a>
               ))}

             </div>
           </div>
         </div>
         <div className="hidden md:block">
           <div className="ml-4 flex items-center md:ml-6">
             <button
               type="button"
               className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
             >
               <span className="sr-only">View notifications</span>
               <BellIcon className="h-6 w-6" aria-hidden="true" />
             </button>

             {/* Profile dropdown */}
             <Menu as="div" className="relative ml-3">
               <div>
                 <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                   <span className="sr-only">Open user menu</span>
                   <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                 </Menu.Button>
               </div>
               <Transition
                 as={Fragment}
                 enter="transition ease-out duration-100"
                 enterFrom="transform opacity-0 scale-95"
                 enterTo="transform opacity-100 scale-100"
                 leave="transition ease-in duration-75"
                 leaveFrom="transform opacity-100 scale-100"
                 leaveTo="transform opacity-0 scale-95"
               >
                 <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                   {userNavigation.map((item) => (
                     <Menu.Item key={item.name}>
                       {({ active }) => (
                         <a
                           href={item.href}
                           className={classNames(
                             active ? 'bg-gray-100' : '',
                             'block px-4 py-2 text-sm text-gray-700'
                           )}
                         >
                           {item.name}
                         </a>
                       )}
                     </Menu.Item>
                   ))}
                 </Menu.Items>
               </Transition>
             </Menu>
           </div>
         </div>
         <div className="-mr-2 flex md:hidden">
           {/* Mobile menu button */}
           <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
             <span className="sr-only">Open main menu</span>
             {open ? (
               <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
             ) : (
               <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
             )}
           </Disclosure.Button>
         </div>
       </div>
     </div>

     <Disclosure.Panel className="md:hidden">
       <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
         {navigation.map((item) => (
           <Disclosure.Button
             key={item.name}
             as="a"
             href={item.href}
             className={classNames(
               item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
               'block px-3 py-2 rounded-md text-base font-medium'
             )}
             aria-current={item.current ? 'page' : undefined}
           >
             {item.name}
           </Disclosure.Button>
         ))}
       </div>
       <div className="border-t border-gray-700 pt-4 pb-3">
         <div className="flex items-center px-5">
           <div className="flex-shrink-0">
             <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
           </div>
           <div className="ml-3">
             <div className="text-base font-medium leading-none text-white">{user.name}</div>
             <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
           </div>
           <button
             type="button"
             className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
           >
             <span className="sr-only">View notifications</span>
             <BellIcon className="h-6 w-6" aria-hidden="true" />
           </button>
         </div>
         <div className="mt-3 space-y-1 px-2">
           {userNavigation.map((item) => (
             <Disclosure.Button
               key={item.name}
               as="a"
               href={item.href}
               className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
             >
               {item.name}
             </Disclosure.Button>
           ))}
         </div>
       </div>
     </Disclosure.Panel>
   </>
 )}
</Disclosure>

    );
}



