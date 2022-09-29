import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import React from "react";
  export default function MyTabs() {
    const [openTab, setOpenTab] = React.useState(1);
    const callouts = [

        {
          name: 'Self-Improvement',
          description: 'Journals and note-taking',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '#',
        },
        {
          name: 'Travel',
          description: 'Daily commute essentials',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '#',
        },
        {
            name: 'asd',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
          },
          {
            name: 'Traasdvel',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
          },
          {
            name: 'Travesdl',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
          },
          {
            name: 'Travsdel',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
          },
          {
            name: 'Travesdasdl',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
          },
          {
            name: 'Traveasdasdl',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '#',
          },
      ]

    const data = [
      {
        label: "HTML",
        value: "html",
        desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people
        who are like offended by it, it doesn't matter.`,
      },
      {
        label: "React",
        value: "react",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },

      {
        label: "Vue",
        value: "vue",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },

      {
        label: "Angular",
        value: "angular",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },

      {
        label: "Svelte",
        value: "svelte",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
    ];

    return (
      <Tabs  value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab color="black" key={value} value={value} className="text-gray-700">
              {label}

            </Tab>


          ))}


        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
                <div className="grid gap-y-10 gap-x-8 py-16">


<div className="space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
  {callouts.map((callout) => (
    <div key={callout.name} className="group pl-2 transition duration-500 hover:scale-125 ease-in-out relative">
          <a href={callout.href}>
      <div className="mt-6 relative shadow-lg  shadow-indigo-500/40 overflow-hidden ">
        <img
          src={callout.imageSrc}
          alt={callout.imageAlt}
          className="object-center border border-black "
        />
      </div>
      <h3 className="mt-2 text-center text-sm text-gray-500">
          <span className="" />
          {callout.name}
      </h3>
        </a>

    </div>
  ))}
</div>

</div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }