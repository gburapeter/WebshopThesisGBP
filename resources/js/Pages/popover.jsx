<Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
<div className="flex h-full space-x-8">
  {navigation2.categories.map((category) => (
    <Popover key={category.name} className="flex">
      {({ open }) => (
        <>
          <div className="relative flex">
            <Popover.Button
              className={classNames(
                open
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-700 hover:text-gray-800',
                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
              )}
            >
              {category.name}
            </Popover.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel className="absolute inset-y-0 right-0 text-sm text-gray-500">
              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

              <div className="relative bg-white">
                <div className="mx-auto max-w-7xl px-8">
                  <div >
                    <div >



                   <div>
<div >
<div class="grid gap-y-10 gap-x-8 py-16">


<div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
{callouts.map((callout) => (
<div key={callout.name} className="group relative">
<div className="relative  overflow-hidden ">
  <img
    src={callout.imageSrc}
    alt={callout.imageAlt}
    className="object-center border border-black"
  />
</div>
<h3 className="mt-6 text-center text-sm text-gray-500">
  <a href={callout.href}>
    <span className="" />
    {callout.name}
  </a>
</h3>

</div>
))}
</div>

</div>
</div>
</div>



                    </div>

                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  ))}


</div>
</Popover.Group>
