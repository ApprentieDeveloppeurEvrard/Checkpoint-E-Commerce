import React from "react";
import bgImage from '../assets/main_banner_bg.png'; // Image de fond version bureau
import bgImageMobile from '../assets/main_banner_bg_sm.png'; // Image de fond version mobile

const CtaAction = () => {
    return (
        <>
            {/* Version bureau/tablette */}
            <div
                className="hidden md:flex mx-auto items-center justify-start text-sm border border-gray-300 rounded-md m-10 max-w-7xl w-full bg-cover bg-center min-h-[450px] px-10"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="flex flex-col text-left items-start pt-14 max-w-xl p-6 rounded-lg">
                    <h2 className="text-4xl font-semibold text-gray-800">
                        Boost your productivity.<br />Start using our app today.
                    </h2>
                    <div className="flex items-center gap-4 mt-6">
                        <button
                            type="button"
                            aria-label="getStarted"
                            className="bg-indigo-500 hover:bg-indigo-600 px-7 py-2.5 text-white rounded active:scale-95 transition-all"
                        >
                            Get started
                        </button>
                        <button
                            type="button"
                            className="group flex items-center gap-2 px-7 py-2.5 active:scale-95 transition"
                        >
                            Learn more
                            <svg
                                className="mt-1 group-hover:translate-x-1 transition-all"
                                width="15"
                                height="11"
                                viewBox="0 0 15 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Version mobile uniquement */}
            <div
                className="md:hidden mx-auto flex items-center justify-start text-sm border border-gray-300 rounded-md m-5 w-[95%] bg-cover bg-center min-h-[450px] px-6 h-[450px]"
                style={{ backgroundImage: `url(${bgImageMobile})` }}
            >
                {/* Contenu centré en bas avec margin-top de 200px */}
                <div className="flex flex-col justify-end items-center w-full p-4 rounded-lg flex-grow mt-[200px]">
                    <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                        Boost your productivity.<br />Start using our app today.
                    </h2>
                    <div className="flex flex-col items-center gap-4 mt-6 mb-4">
                        <button
                            type="button"
                            aria-label="getStarted"
                            className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2.5 text-white rounded active:scale-95 transition-all"
                        >
                            Get started
                        </button>
                        <button
                            type="button"
                            className="group flex items-center gap-2 px-5 py-2.5 active:scale-95 transition"
                        >
                            Learn more
                            <svg
                                className="mt-1 group-hover:translate-x-1 transition-all"
                                width="15"
                                height="11"
                                viewBox="0 0 15 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CtaAction;
