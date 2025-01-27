import React, { useEffect, useState } from 'react'
import styles from './ActivateDevices.module.css';
import stripe from '../../assets/Image/Stripe-Logo1.png'
import paypal from '../../assets/Image/Stripe-Logo1.png';
import { useTranslation } from 'react-i18next';
export default function ActivateDevices() {

    let [count,setCount] = useState(0);
     const { t } = useTranslation();
    useEffect(() => {},[])
  return (
    <>
       <div className="max-w-lg w-full">
        <h1 className="text-[#3C3C3C] text-3xl font-bold mb-5">{t('ActivateDevice')}</h1>
        <div className="mb-5">
        <h1 className="text-[#4548AC] text-2xl font-medium mb-5">{t("Price")} : 20$</h1>
        </div>
        <div className="flex flex-col items-start mb-5">
           <h1 className="text-[#3C3C3C] text-2xl font-medium mb-5">{t('Payment method')}</h1>
           <div className='flex items-center gap-7'>
            <a href="#">
            <img className='border py-2 px-3 rounded-2xl ' src={stripe} alt="" srcset="" />
            </a>
            <a href="#">
            <img className='border px-3 py-2 rounded-2xl ' src={paypal} alt="" srcset="" />
            </a>
           </div>
        </div>

        <b className="text-[13px] block text-[#7D7E81]">
          <span className="text-red-600">{t('noteOne')} : </span>
         {t('noteDesc')}
        </b>
      </div>
    </>
  )
}
