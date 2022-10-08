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










 <Disclosure as="nav" className="bg-gradient-to-r from-primary to-secondary">
 {({ open }) => (
   <>
     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       <div className="flex h-16 items-center justify-between">
         <div className="flex items-center">
         <div className="flex-shrink-0 ">
            asd
            </div>
           <div className="hidden md:block">
             <div className="flex ">






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

       </div>
     </div>


   </>
 )}
</Disclosure>

    );
}



