import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './Home.module.css';
// import wishTv from '../../assets/Image/wishtv .jpg';
import samsung from '../../assets/Image/samsung.png';
import android from '../../assets/Image/android.png';
import lg from '../../assets/Image/lg.png';
import sony from '../../assets/Image/sony.png';
import About from '../About/About';
import Faqs from '../Faqs/Faqs';
import Contact from '../Contact/Contact';
import windows from '../../assets/Image/windows.png';
import apple from '../../assets/Image/apple.png';
import whatsapp from '../../assets/Image/whatsappimg.jpeg';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { useTranslation } from 'react-i18next';
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [macAddress, setMacAddress] = useState('');
  const [deviceKey, setDeviceKey] = useState('');
  const { t } = useTranslation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://wish-4a54.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          macAddress: macAddress,
          deviceKey: deviceKey
        })
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('macAddress', macAddress); // Store MAC address
        console.log(data);

        setIsLoggedIn(true);
        alert('Login successful!');
        window.location.reload();
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please try again.');
    }
  };

  const checkAuth = () => {
    const token = localStorage.getItem('authToken');
    return token ? true : false;
  };

  useEffect(() => {
    const loggedIn = checkAuth();
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <>

      <section className={classes.home} id="home">
        <div className="text-white h-auto lg:h-screen p-6 lg:p-16">
          {isLoggedIn ? null :
            <h1 className={`${classes.managePlaylist_title} text-2xl lg:text-3xl text-center mt-[2rem]`}>{t('Manage playlist')}</h1>
          }
          <div className={`container h-full ${isLoggedIn ? `text-center lg:mt-44 ${classes.wish_responive}` : ''}`}>
            {isLoggedIn ? null :
              <div className={`${classes.macaddres} mt-4 rounded-xl`}>
                <form onSubmit={handleLogin} id="login-form" className="max-w-xs lg:max-w-sm mx-auto rounded-sm p-6">
                  <h1 className="text-lg lg:text-2xl mb-5 text-center">{t('Login playlist')}</h1>

                  <div className="mb-5">
                    <label htmlFor="macAddress" className="block mb-2 text-sm lg:text-base text-white">MAC ADDRESS</label>
                    <input
                      type="text"
                      id="macAddress"
                      value={macAddress}
                      onChange={(e) => setMacAddress(e.target.value)}
                      className="w-full h-full p-2.5 bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                      required
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="deviceKey" className="block mb-2 text-sm lg:text-base text-white">DEVICE KEY</label>
                    <input
                      type="text"
                      id="deviceKey"
                      value={deviceKey}
                      onChange={(e) => setDeviceKey(e.target.value)}
                      className="w-full p-2.5 bg-gray-50 border text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 text-white bg-[#B269B9] hover:bg-[#a158a3] rounded-lg focus:ring focus:outline-none"
                  >
                   {t('Login')}
                  </button>
                </form>
              </div>
            }
            <div className={`${classes.parent_title}`}>
              <FloatingWhatsApp phoneNumber="+1234567890"  // Replace with your WhatsApp number
                accountName="WishTV"  // Customize with your name or business name
                avatar={whatsapp} // Optional avatar or logo image
                statusMessage="Typically replies within 1 hour"
                chatMessage="Hello! How can we help you?"
                allowEsc
                allowClickAway
                className='text-black w-[18rem]'
                placeholder='Send Us Your Proplem'>
              </FloatingWhatsApp>

              <h1 className={`${classes.wish_title} text-3xl lg:text-4xl sm:text-2xl text-white font-bold max-w-3xl mx-auto`}>WishTv</h1>
              <p className="text-sm lg:text-2xl max-w-3xl mx-auto">
                {t('WishTv website')}
              </p>

            </div>
          </div>
        </div>
      </section>

      <section className={`${classes.poster} w-full h-screen bg-cover bg-center sm:h-96 md:h-[60vh] lg:h-screen z-10 bg-no-repeat`}>

      </section>

      <section className="bg-black py-20 text-center overflow-hidden z-10">
        <h3 className="text-white mb-8 text-lg lg:text-2xl">
          {t('WishTv device')}
        </h3>

        {/* Marquee Container */}
        <div className={classes.marqueeWrapper}>
          <div className={`${classes.marqueeContent} flex space-x-8 justify-center items-center`}>
            {/* Original Set of Images */}
            <img src={samsung} className="w-40 lg:w-64 mx-4" alt="Samsung" />
            <img src={android} className="w-40 lg:w-40 h-[3rem]  mx-4" alt="Android" />
            <img src={lg} className="w-32 lg:w-32  mx-4" alt="LG" />
            <img src={sony} className="w-40 lg:w-48  mx-4" alt="Sony" />
            <img src={windows} className="w-40 lg:w-48  mx-4" alt="Windows" />
            <img src={apple} className="w-40 lg:w-40  mx-4" alt="Apple" />

            {/* Duplicate Set of Images */}
            <img src={samsung} className="w-40 lg:w-64  mx-4" alt="Samsung" />
            <img src={android} className="w-40 lg:w-40 h-[3rem]  mx-4" alt="Android" />
            <img src={lg} className="w-32 lg:w-32  mx-4" alt="LG" />
            <img src={sony} className="w-40 lg:w-48  mx-4" alt="Sony" />
            <img src={windows} className="w-40 lg:w-48  mx-4" alt="Windows" />
            <img src={apple} className="w-40 lg:w-40  mx-4" alt="Apple" />
          </div>
        </div>
      </section>

      <About />
      <Faqs />
      <Contact />
    </>
  );
}
