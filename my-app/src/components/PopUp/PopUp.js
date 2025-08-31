import React from 'react'
import './PopUp.css'

const PopUp = ({setPopUp}) => {
  return (
    <div className='popup-container'>
        <div className='popup-section-1'>
            <h4><span>UMF</span> is the strength and purity rating of Manuka honey.</h4>
            <div className='cards'>
               <div className='orange'>
                10+
               </div>
               <div className='div2'>
                15+
               </div>
               <div className='div3'>
            20+
               </div>
               <div className='div4'>
                24+
               </div>
               <div className='div5'>
                26+
               </div>
               <div className='div6'>
                28+
               </div>
               <div className='div7'>
                30+
               </div>
            </div>
            <p>The higher the number, the greater the potency and rarity of Manuka honey.</p>
        </div>
        <div style={{marginTop: '10px'}} className='popup-section-1'>
            <h4><span>MGO</span> is the key natural compound that gives Manuka honey its special antibacterial strength.</h4>
            <div className='cards'>
               <div className='orange'>
                263+
               </div>
               <div className='div2'>
                514+
               </div>
               <div className='div3'>
            829+
               </div>
               <div className='div4'>
                1122+
               </div>
               <div className='div5'>
                1282+
               </div>
               <div className='div6'>
                1450+
               </div>
               <div className='div7'>
                1620+
               </div>
            </div>
            <p>The higher the number, the higher the antibacterial properties in the honey.</p>
        </div>
        <p onClick={() => setPopUp(false)} className='close-btn'>close</p>
    </div>
  )
}

export default PopUp