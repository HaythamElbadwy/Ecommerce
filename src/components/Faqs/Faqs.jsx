import React, { useEffect, useState } from 'react'
import styles from './Faqs.module.css';
import { useTranslation } from 'react-i18next';

export default function Faqs() {

  const [activeIndex, setActiveIndex] = useState(null);
const { t} = useTranslation();
  // Function to toggle the accordion
  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the currently open accordion
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };

  const faqs = [
    {
      question: t("answerOne"),
      answer:
        t("questionOne"),
    },
    {
      question: t("answerTwo"),
      answer:
        t("questionTwo"),
    },
    {
      question: t("answerThree"),
      answer:
        t("questionThree",)
    },
    {
      question: t("answerFour"),
      answer:
        t("questionFour"),
    },
    {
      question: t("answerFive"),
      answer:
        t("questionFive"),
    },
    {
      question:
        t("answerSix"),
      answer:
        t("questionSix"),
    },
    
  ];
  return (
    
    
    
    
    <>
      <section className="bg-[#040404] py-16 px-1" id='faqs'>
        <h1 className="text-[2rem] text-white text-center mb-5">{t('faqsTitle')}</h1>
        <div className="text-white p-4 rounded-lg max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              {/* Question */}
              <div
                className={`p-4 cursor-pointer border-solid border-2 border-[#C067C8] rounded-lg flex justify-between items-center ${
                  activeIndex === index ? "border-b border-[#B269B9] bg-white text-black" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-[1rem] font-semibold">{faq.question}</h3>
                <span>
                  {activeIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </span>
              </div>

              {/* Answer with transition */}
              <div
                className={`${
                  activeIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <div className="p-4 bg-[#F1F1F1] rounded-lg mt-2 ">
                  <p className="text-base text-black">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  



    
    
  )
}
