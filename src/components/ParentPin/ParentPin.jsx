import React, { useEffect, useState } from 'react';
import styles from './ParentPin.module.css';
import { useTranslation } from 'react-i18next';

export default function ParentPin() {
    const [pin, setPin] = useState(''); // State for the new PIN
    const [id, setId] = useState('66fadc1e68f2aa11843053be'); // Set this to your device ID
    const { t } = useTranslation();

    // Effect to run on component mount (if needed)
    useEffect(() => {}, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        const body = {
            id: id,
            pin: pin
        };

        try {
            const response = await fetch('http://62.182.85.163:5053/api/devices/updatePin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            }); 

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data); // Handle success response
            setPin('');
            // You can show a success message or handle redirection here
        } catch (error) {
            console.error('Error:', error); // Handle error response
            // You can show an error message to the user here
        }
    };

    return (
        <>
            <form className="max-w-lg w-full" onSubmit={handleSubmit}>
                <h1 className="text-[#3C3C3C] text-3xl font-bold mb-5">{t('parentPinTitle')}</h1>

                <p className='text-[#3C3C3C] font-medium'>{t('resetParentPIN')}</p>
                <div className="mb-5 mt-7">
                    <label htmlFor="new-pin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        {t('newParentPin')}
                    </label>
                    <input
                        type="password"
                        id="new-pin"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)} // Update state on change
                        className="bg-[#F5F5F5] border-0 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        required
                        maxLength={17}
                    />
                </div>
                <b className="text-[13px] block text-[#7D7E81]">
                    <span className="text-red-600">{t('noteThree')}:</span>
                     {t('noteDescThree')}
                </b>
                <br />
                <center>
                <button type="submit" className="text-white bg-[#C067C8] font-medium rounded-lg text-xm w-[205px]">
                    {t('Save')}
                </button>
                </center>
            </form>
        </>
    );
}
