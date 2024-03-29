import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './Header'

function Faq() {
  const [showMsg, setShowMsg] = useState(false)
  const { t } = useTranslation()

  return (
    <div>
      <Header />

      <div className=" md:w-10/12 mx-auto md:p-20 p-4">
        <h1 className="font-bold md:text-4xl  text-2xl font-Anek text-center">{t('faq.title')}</h1>

        <div className="flex flex-wrap justify-center mt-20 font-Inter">
          {t('faq.questions', { returnObjects: true }).map((item, index) => (
            <div className="md:w-5/12 m-4" key={index}>
              <p className="text-xl font-bold py-2">{item.q}</p>
              <p className="text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: item.a }} />
            </div>
          ))}
        </div>

        <div className="md:w-1/2 mx-auto text-center mt-20">
          <button className="text-6xl text-center m-2" onClick={() => setShowMsg(!showMsg)}>💡</button>
          <p className="text-xl font-Anek font-semibold text-gray-800">{t('faq.tips.title')}</p>
        </div>

        {
          showMsg
            ? (<div><h2 className="md:w-7/12 text-4xl border text-center mx-auto my-10 p-10 rounded-xl shadow-sm font-Nunito">{t('faq.tips.content')}</h2></div>)
            : (<div />)
        }
      </div>
    </div>
  )
}

export default Faq
