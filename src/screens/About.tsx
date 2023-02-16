import React from 'react';
import { Page } from "./Page";
import { HiArrowDown } from "react-icons/hi2";
import { BsFillGiftFill, BsFillChatSquareFill } from 'react-icons/bs';
import { AiOutlineMail } from "react-icons/ai";

export const About = () => {
    return (
        <Page>
            <div>
            {/* About us, bg image */}
                <div className="flex justify-center items-center bg-[url('../public/gift.png')] bg-right h-about w-full bg-cover bg-no-repeat">
                    <h1 className="text-4xl text-white font-bold text-center font-montserrat">
                        ABOUT US
                    </h1>
                </div>
                {/* circles */}
                <div className="m-8 grid grid-flow-row gap-6 justify-center">
                    <div className="w-12 h-12 bg-sky-200 rounded-full ml-7"></div>
                    <div className="w-20 h-20 bg-sky-300 rounded-full ml-3"></div>
                    <div className="w-28 h-28 bg-sky-500 rounded-full">
                        <HiArrowDown size='4rem' className="ml-6 mt-6 fill-white" />
                    </div>
                </div>
                {/* Text, line, icon */}
                <div>
                    <h1 className="text-3xl text-center">
                        Every great accomplishment begins with a single <br /> idea and the courage to take the first step
                    </h1>
                        <hr className="h-2 w-about mx-auto my-4 bg-sky-500 rounded hr-about"/>
                    <div className="mb-32 mt-16 w-40 h-40 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full p-3 container mx-auto">
                        <BsFillGiftFill  className="text-8xl text-white  mt-4 ml-5" />
                        <h1 className="-ml-3 mt-12 text-center font-bold text-4xl">WishBox</h1>
                    </div>
                </div>
                {/* Icons, info */}
                <div className="grid grid-cols-2 place-items-center gap-12">
                    {/* What is WishBox? */}
                    <div className="ml-14 mr-4 rounded-3xl text-4xl bg-sky-500 h-80 text-white text-center pt-5">
                        <div className="text-4xl">
                            What is WishBox?
                        </div>
                        <div className="text-sm text-center ml-20 mr-20 mt-4 mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                        
                        </div>
                    </div>
                    {/* first icon */}
                    <div className="mb-2 w-1/2 items-center w-aboutIcon1 h-aboutIcon1 bg-[url('../public/aboutIcon1.svg')] bg-center bg-no-repeat"></div>
                    {/* second icon */}
                    <div className="w-1/2 items-center w-aboutIcon2 h-aboutIcon2 bg-[url('../public/aboutIcon2.svg')] bg-center bg-no-repeat -mt-3.5 -ml-2 mr-2"></div>
                    {/* What is our goal? */}
                    <div className="mr-14 ml-4 rounded-3xl text-4xl bg-sky-500 h-80 text-white text-center pt-5">
                        <div className="text-4xl">
                            What is our goal?
                        </div>
                        <div className="text-sm text-center ml-20 mr-20 mt-4 mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                        
                        </div>
                    </div>
                    {/* Who are we? */}
                    <div className="ml-14 mr-4 rounded-3xl text-4xl bg-sky-500 h-80 text-white text-center pt-5">
                        <div className="text-4xl">
                            Who are we?
                        </div>
                        <div className="text-sm text-center ml-20 mr-20 mt-4 mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                    {/* third icon */}
                    <div className="w-1/2 w-aboutIcon3 h-aboutIcon3 bg-[url('../public/aboutIcon3.svg')] bg-center bg-no-repeat -mt-3.5 " />
                </div>
                {/* email */}
                <div className="grid grid-cols-2 place-items-center">
                        <div className="mt-10 w-96 h-96 bg-[url('../public/aboutIconMail.svg')] bg-center bg-no-repeat" />
                    <div className="mr-80">
                        <h1 className="text-4xl ml-20 mr-20 mt-12 mb-4">Get in touch with us</h1>
                        <div className="text-base ml-20 mr-20 mt-4 mb-4">
                            Email your questions or report any problems to <br /> <h1 className="font-bold">wishboxsupport@gmail.com</h1> We will try to review or answer as soon as possible
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};