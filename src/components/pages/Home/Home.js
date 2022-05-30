import React, { useState } from 'react';
import coding from '../../../images/pexels-antonio-batinić-4164418.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Home = () => {
    const [hide, setHide] = useState(false)
    AOS.init();
    return (
        <>
            <div>
                <div class="hero bg-base-100 mt-4 lg:mt-12 px-4">
                    <div class="flex flex-col lg:flex-row-reverse bg-[whitesmoke] lg:p-12 lg:mx-24 rounded-lg">
                        <div className='p-4'>
                            <img src={coding} class="w-full lg:w-[450px] rounded-lg" alt='' />
                        </div>
                        <div class="text-2xl lg:text-4xl font-bold px-4 mt-4 lg:mt-0 flex items-center">
                            <div className={`${hide ? 'hidden' : 'block'} h-[175px] w-[100%] lg:w-[435px]`}>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(
                                                '<span>Hello!</span><br/><span>I am <span class="text-[#FF5F1F]">Zubayer</span></span><br/><span class="text-[#FF007F]">Frontend Web developer</span>'
                                            )
                                            .callFunction(() => typewriter.typeString('sdhfkjahsdf'))
                                            .callFunction(() => { setHide(true) })
                                            .start()
                                    }}
                                    options={{ cursor: '|', autoStart: true, delay: 50 }}
                                />

                            </div>
                            <div className={`${hide ? 'block' : 'hidden'} h-[175px] w-[100%] lg:w-[435px]`}>
                                <span>Hello!</span>
                                <br />
                                <span>I am <span className='text-[#FF5F1F]'>Zubayer</span></span>
                                <br />
                                <span className='text-[#FF007F]'>Frontend Web developer</span>
                                <br />
                                <button class="btn btn-md font-bold text-[15px] mt-[15px] text-[whitesmoke]"><Link to='/projects'>See My Projects ?</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;