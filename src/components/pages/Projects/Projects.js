import React from 'react';


const Projects = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-orange-500 text-center my-8'>My top 3 projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 px-4 lg:p-12'>
                <div class="card w-full lg:w-96 bg-base-100 shadow-xl image-full my-4">
                    <figure><img src="https://i.ibb.co/tsj9nYq/website.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-2xl text-white font-bold">Electra</h2>
                        <p className='text-xl text-white'>Website for a tool manufacturing company</p>
                        <p className='font-bold text-white'>Top Features</p>
                        <p className='text-white'>* React, single page web application</p>
                        <p className='text-white'>* Payment and Email implemented</p>
                        <p className='text-white'>* Connected with mongoDB database</p>
                        <div class="card-actions justify-center">
                            <a href='https://manufacturer-website-7fd18.web.app/' target='_blank' rel='noreferrer' class="btn btn-primary text-white">Visit Website</a>
                        </div>
                    </div>
                </div>
                <div class="card w-full lg:w-96 bg-base-100 shadow-xl image-full my-4">
                    <figure><img src="https://i.ibb.co/QCgHGtP/watchgeek.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-2xl text-white font-bold">WatchGeek</h2>
                        <p className='text-xl text-white'>Website for a tool manufacturing company</p>
                        <p className='font-bold text-white'>Top Features</p>
                        <p className='text-white'>* React, single page web application</p>
                        <p className='text-white'>* Payment and Email implemented</p>
                        <p className='text-white'>* Connected with mongoDB database</p>
                        <div class="card-actions justify-center">
                            <a href='https://manufacturer-website-7fd18.web.app/' target='_blank' class="btn btn-primary text-white">Visit Website</a>
                        </div>
                    </div>
                </div>
                <div class="card w-full lg:w-96 bg-base-100 shadow-xl image-full my-4">
                    <figure><img src="https://i.ibb.co/tsj9nYq/website.png" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-2xl text-white font-bold">Electra</h2>
                        <p className='text-xl text-white'>Website for a tool manufacturing company</p>
                        <p className='font-bold text-white'>Top Features</p>
                        <p className='text-white'>* React, single page web application</p>
                        <p className='text-white'>* Payment and Email implemented</p>
                        <p className='text-white'>* Connected with mongoDB database</p>
                        <div class="card-actions justify-center">
                            <a href='https://manufacturer-website-7fd18.web.app/' target='_blank' class="btn btn-primary text-white">Visit Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;