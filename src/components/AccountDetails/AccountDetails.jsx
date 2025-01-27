import React, { useEffect, useState } from 'react'
import styles from './AccountDetails.module.css';
import { useTranslation } from 'react-i18next';

export default function AccountDetails() {

    let [count,setCount] = useState(0);
    const { t } = useTranslation();
    useEffect(() => {},[])
  return (
    <>
     <div className='max-w-lg w-full'>
     <h1 className="text-[#3C3C3C] text-3xl font-bold mb-5">{t('AccountDetailstTitle')}</h1>

     <div className="AccInfo flex flex-col gap-3 mt-16">
     <div className="macAddress AccDetails">
        <span className='text-[#3C3C3C] text-xl font-bold'>Mac Address:</span>
        <span className='text-[#3C3C3C] font-medium'>8c:om:48:n1:ia:c6</span>
      </div>
      <div className="Status AccDetails">
        <span className='text-[#3C3C3C] text-xl font-bold'>{t('Status')}:</span>
        <span className='font-medium text-[#07C548]'>Active</span>
      </div>
      <div className="creationDate AccDetails">
        <span className='text-[#3C3C3C] text-xl font-bold'>{t('CreationDate')}:</span>
        <span className='text-[#3C3C3C] font-medium'>6 Apr. 2024</span>
      </div>
      <div className="ExpirationDate AccDetails">
        <span className='text-[#3C3C3C] text-xl font-bold'>{t('ExpirationDate')}:</span>
        <span className='text-[#3C3C3C] font-medium'>6 Apr. 2026</span>
      </div>
     </div>
     </div>
    </>
  )
}
