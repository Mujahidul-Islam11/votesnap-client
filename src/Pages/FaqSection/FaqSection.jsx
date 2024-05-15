/* eslint-disable react/no-unescaped-entities */
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import Lottie from 'react-lottie';
import animationData from "../../../public/FAQ.json"

const FAQSection = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
  };
  return(
    <div className="w-full py-10 my-7 md:my-14">
    <h3 className='text-3xl  md:text-5xl font-bold text-center mb-2 md:mb-4'>FAQ<span className='text-[#2F71FF]'>!</span></h3>
    <p className='text-sm md:text-xl text-center text-gray-600'>What is on your mind check it out</p>
    <div className='px-4 md:flex gap-20 items-center'>
      <div className='mb-4 md:w-1/2'>
      <Lottie options={defaultOptions}></Lottie>
      </div>
    <div className="md:w-1/2 rounded-2xl bg-white p-2 h-fit">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-[#2F71FF] hover:bg-[#2f71ff2f] focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
              <span className='md:text-2xl'>What is VoteSnap's refund policy?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-[#2F71FF]`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 pt-4 md:text-xl text-gray-500">
              If you're dissatisfied with our services for any reason, please reach out to us within 90 days, and we'll process a full refund—no questions asked.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-[#2F71FF] hover:bg-[#2f71ff2f] focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
              <span className='md:text-2xl'>Is technical support available?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-[#2F71FF]`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 pt-4 md:text-xl text-gray-500">
              We currently do not offer technical support.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium text-[#2F71FF] hover:bg-[#2f71ff2f] focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
              <span className='md:text-2xl'>How do I contact VoteSnap support?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-[#2F71FF]`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 pt-4 md:text-xl text-gray-500">
              You can reach our support team at support@VoteSnap.com. We're here to assist you!
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
    </div>
  </div>
  )
};

export default FAQSection;
