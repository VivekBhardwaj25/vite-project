import { useState } from 'react'
import Logo from './assets/envato_market-.svg'
import motion from './assets/MotionArtEffect-logo.png'
import img2 from './assets/motionarteffect-img2.png'
import img4 from './assets/motionarteffect-img4.png'
import img1 from './assets/motionarteffect-img1.png'
import img3 from './assets/motionarteffect-img3.png'
import img5 from './assets/motionarteffect-img5.png'
import img11 from './assets/motionarteffect-img11.png'
import img10 from './assets/motionarteffect-img10.png'
import img8 from './assets/motionarteffect-img8.png'
import img9 from './assets/motionarteffect-img9.png'
import img7 from './assets/motionarteffect-img7.png'
import img6 from './assets/motionarteffect-img6.png'
import './App.css'

function App() {

  return (
    <div className="bg-[#0e0f1a] h-full w-full m-0 p-0 overflow-x-hidden">

      <nav className="bg-[#262626] z-10 h-14 w-full px-3 flex justify-between items-center">
        <div className="" data-aos="fade-down">
          <img
            src={Logo}
            className="h-5 w-42 "
            alt=""
          />
        </div>

        <div>
          <button className="bg-[#7aa93c] text-center text-white px-5 py-1.5 rounded cursor-pointer font-thin text-base" data-aos="fade-down">
            Buy now
          </button>
        </div>
      </nav>

      <section className="mt-10 w-max mx-auto md:px-30">
        <div className="flex justify-between items-center gap-x-[900px]">
          <div className='' data-aos="fade-right">
            <img src={motion} alt="" />
          </div>

          <div data-aos="fade-left">
            <button className="bg-white text-center text-black px-10 py-3 rounded cursor-pointer font-sm text-xl hover:bg-transparent hover:text-white border transition ease-in duration-300 hidden md:block">
              Purchase Now
            </button>
          </div>
        </div>
      </section>

      <section className="mt-28 pr-72 w-max mx-auto flex items-start flex-wrap">
        <div className="w-44 md:mx-14">
          <div className="text-start mb-3" data-aos="fade-up">
            <span className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#F87516] from-0% to-[#5e11ff] to-100% font-abc">
              Transform Your Website
            </span>
          </div>

          <div className="text-start" data-aos="fade-up">
            <p className="font-abc text-xl text-white">
              With Motion Art Effect
            </p>
          </div>
        </div>

        <div className="mb-12 text-start text-wrap flex flex-col gap-y-6 w-[600px] ml-44">
          <h1 className="text-[#ece3fd] text-7xl font-semibold leading-[5rem]" data-aos="fade-up">
            Attract your Visitors Attention With Colorful
          </h1>

          <span className="animate-pulse text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#f87516] from-0% to-[#5e11ff] to-100% font-abc font-semibold" data-aos="fade-up">
            Motion Art Effect
          </span>

          <p className="text-lg text-gray-400 font-outfit w-11/12" data-aos="fade-up">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
      </section>

      <section className="mt-20 w-max mx-auto">
        <h2 className="text-[#ece3fd] text-center md:text-2xl font-outfit text-xl" data-aos="fade-up">
          Trusted by thousands of users around the world
        </h2>

        <div className="flex items-center justify-around mt-20 flex-wrap gap-y-4 gap-x-40" data-aos="fade-up">
          <div className="flex items-center justify-start">
            <div className=''>
              <img src={img2} alt="" />
            </div>
            <div className="pl-3">
              <img
                src={img4}
                alt=""
                className="mb-2 "
              />
              <p className="text-[#ece3fd] font-abc">4.5 Score, 9 Reviews</p>
            </div>
          </div>

          <div className="flex items-center justify-start">
            <div>
              <img src={img1} alt="" />
            </div>
            <div className="pl-3">
              <img
                src={img4}
                alt=""
                className="mb-2"
              />
              <p className="text-[#ece3fd] font-abc">4.5 Score, 9 Reviews</p>
            </div>
          </div>

          <div className="flex items-center justify-start">
            <div>
              <img src={img3} alt="" />
            </div>
            <div className="pl-3">
              <img
                src={img4}
                alt=""
                className="mb-2"
              />
              <p className="text-[#ece3fd] font-abc">4.5 Score, 9 Reviews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-32 pb-6 w-max mx-auto flex-wrap">
        <div className="flex justify-center items-center flex-wrap">
          <div className="w-1/2 flex flex-col items-start gap-y-4" data-aos="fade-right">
            <p className="font-abc text-[#ece3fd] text-4xl font-semibold leading-[3.8rem] w-11/12">
              Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
            </p>
            <p className="font-outfit text-gray-400 text-lg">
              Motion Art for Elementor is a groundbreaking plugin that empowers
              you to effortlessly infuse your website with visually stunning
              motion art elements.
            </p>
            <button className="hover:animate-pulse hover:animate-once animate-fade-left px-10 py-4 bg-gradient-to-r from-[#F87516] from-0% to-[#5e11ff] to-100% rounded-[20px] text-white text-xl mt-3">
              Purchase From Envato →
            </button>
          </div>

          <div className="w-1/3 flex justify-end" data-aos="fade-left">
            <img
              src={img5}
              className="size-1/2"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="mt-28 flex justify-center items-center flex-col">
        <h2 className="text-[#ece3fd] text-center text-[40px] font-medium pb-10 leading-[3.9rem] font-abc" data-aos="fade-up">
          Apply On Any Section Or Enable <br /> For Whole Page
        </h2>

        <div className="flex justify-center gap-x-[1.5rem] mt-12 flex-wrap w-fit mx-auto">
          <div className="h-min w-5/12 bg-transparent bg-gradient-to-b from-[#0D061F] from-0% to-[#251E35] to-100% shadow-md flex flex-col gap-y-6 rounded-[18px] p-8 border border-gray-800" data-aos="fade-up">
            <p className="text-[#ece3fd] text-2xl font-abc font-medium">
              Apply On Section
            </p>
            <p className="text-gray-400 text-lg font-outfit">
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.
            </p>

            <img src={img11} alt="" className=''/>
          </div>

          <div className="h-min w-5/12 bg-transparent bg-gradient-to-b from-[#0D061F] from-0% to-[#251E35] to-100% shadow-2xl border border-gray-800 flex flex-col gap-y-6 rounded-[18px] p-8 mt-20" data-aos="fade-up">
            <p className="text-[#ece3fd] text-2xl font-abc font-medium">
              Apply On Page
            </p>
            <p className="text-gray-400 text-lg font-outfit">
              Take your website to new heights with Motion Art for Elementor.
              Embrace the power of motion and animation.
            </p>

            <img src={img10} alt="" />
          </div>
        </div>
      </section>


      <section className="mt-28 w-max mx-auto">
        <div className="bg-transparent bg-gradient-to-b from-[#0D061F] from-0% to-[#251E35] to-100% py-10 shadow-2xl border border-gray-800  h-min rounded-[16px] flex flex-col items-center gap-y-6 px-96" data-aos="fade-up">
          <p className="text-[#ece3fd] text-3xl font-abc font-medium" data-aos="fade-up">
            Supported by All Popular Browsers
          </p>
          <p className="text-gray-400 text-lg font-outfit text-wrap text-center w-[460px]" data-aos="fade-up">
            Rest assured, Motion Art is designed to be compatible with all major
            web browsers.
          </p>
          <img src={img8} alt="" data-aos="fade-up"/>
        </div>
      </section>


      <section className="mt-28">
        <div className="w-2/5 m-auto flex flex-col gap-y-5" data-aos="fade-up">
          <p className="text-[#ece3fd] text-[38px] font-abc font-semibold text-wrap text-center leading-[3.4rem]" data-aos="fade-up">
            An All-Round Plugin With Powerful Features
          </p>
          <p className="text-gray-400 text-lg font-outfit text-wrap text-center" data-aos="fade-up">
            Whether you're a seasoned web designer or just starting out, Motion
            Art for Elementor seamlessly integrates with the Elementor platform,
            providing you with a seamless and intuitive experience.
          </p>
        </div>

        <div className="flex m-auto w-max mt-14 flex-wrap gap-y-8 md:gap-x-8" >
          <div className="h-min w-96 bg-transparent bg-gradient-to-b from-[#0D061F] from-0% to-[#251E35] to-100% px-4 py-6 rounded-xl border border-gray-800 shadow-lg flex flex-col gap-y-4 items-start" data-aos="fade-up">
            <img src={img9} alt="" className=''/>
            <p className="text-[#ece3fd] text-3xl font-abc font-medium text-wrap">
              Light Weight
            </p>
            <p className="text-gray-400 text-lg font-outfit text-wrap">
              Motion Art for Elementor is designed to be lightweight.
            </p>
          </div>

          <div className="h-min w-96 bg-transparent bg-gradient-to-b from-[#0D061F] from-0% to-[#251E35] to-100% px-4 py-6 rounded-xl border border-gray-800 shadow-lg flex flex-col gap-y-4 items-start" data-aos="fade-up">
            <img src={img7} alt="" />
            <p className="text-[#ece3fd] text-3xl font-abc font-medium text-wrap">
              100% Responsive
            </p>
            <p className="text-gray-400 text-lg font-outfit text-wrap">
              Create a consistent visual experience across all devices.
            </p>
          </div>

          <div className="h-min w-96 bg-transparent bg-gradient-to-b from-[#0D061F] from-0% to-[#251E35] to-100% px-4 py-6 rounded-xl border border-gray-800 shadow-lg flex flex-col gap-y-4 items-start" data-aos="fade-up">
            <img src={img6} alt="" />
            <p className="text-[#ece3fd] text-3xl font-abc font-medium text-wrap">
              User Friendly Interface
            </p>
            <p className="text-gray-400 text-lg font-outfit text-wrap">
              Ensure a smooth experience for both applicants and administrators.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-28">
        <div className="bg-gradient-to-r from-[#F87516] from-0% to-[#5E11FF] to-100% flex justify-around items-center py-4 gap-x-96">
          <p className="text-[#dbd9ff] text-sm font-outfit">
            © 2023 Copywrite. All rights reserved by QodeMatrix
          </p>
          <div className="gap-x-6 flex">
            <span className="text-[#dbd9ff] text-sm font-outfit">
              Documentation
            </span>
            <span className="text-[#dbd9ff] text-sm font-outfit">Support</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
