import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import PPMTool from '../assets/ppm.svg'
import DevConnector from '../assets/dev_connect.png'
import ECommerce from '../assets/E-commerce.png'
import realEstate from '../assets/realestate.jpg';

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div
                        className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://react-ppm-ivanyou.herokuapp.com/dashboard">
                            <img className="rounded-t-lg" src={PPMTool} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="https://react-ppm-ivanyou.herokuapp.com/dashboard">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Task Management Tool</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A tool website to helper users manage daily tasks.</p>
                            <a href="https://react-ppm-ivanyou.herokuapp.com/dashboard"
                               className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Explore
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div
                        className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://my-dev-connector-forum.herokuapp.com/">
                            <img className="rounded-t-lg" src={DevConnector} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="https://my-dev-connector-forum.herokuapp.com/">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Developer Connector</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A forum website for web developers to make posts.</p>
                            <a href="https://my-dev-connector-forum.herokuapp.com/"
                               className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Explore
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div
                        className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://chic-lokum-b6c15e.netlify.app/">
                            <img className="rounded-t-lg" src={ECommerce} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="https://chic-lokum-b6c15e.netlify.app/">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Crown Cloth Shop</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">An e-commerce website for selling clothes</p>
                            <a href="https://chic-lokum-b6c15e.netlify.app/"
                               className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Explore
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Work;

