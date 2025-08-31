import React, { useState } from 'react'
import leftArrow from '../../assests/leftarrow.png'
import rightArrow from '../../assests/rightarrow.png'
import bgImg from '../../assests/productBg.png'
import productImg from '../../assests/product.png'
import note from '../../assests/note.png'
import stars from '../../assests/stars.png'
import certificate1 from '../../assests/certificate1.png'
import certificate2 from '../../assests/certificate2.png'
import certificate3 from '../../assests/certificate3.png'
import certificate4 from '../../assests/certificate4.png'
import certificate5 from '../../assests/certificate5.png'
import certificate6 from '../../assests/certificate6.png'
import bottle7 from '../../assests/bottle1.png'
import bottle6 from '../../assests/bottle2.png'
import bottle5 from '../../assests/bottle3.png'
import bottle4 from '../../assests/bottle4.png'
import bottle3 from '../../assests/bottle5.png'
import bottle2 from '../../assests/bottle6.png'
import bottle1 from '../../assests/bottle7.png'
import bbBottle1 from '../../assests/bbBottle1.png'
import bbBottle2 from '../../assests/bbBottle2.png'
import spoon from '../../assests/woodenSpoon.png'
import rotate from '../../assests/rotate.png'
import PopUp from '../PopUp/PopUp'
import './Banner.css'


const Banner = () => {
    const [popUp, setPopUp] = useState(false)
    const handlePopup = () => {
        setPopUp(prevState => !prevState)
    }
    return (
        <div className='banner-container'>
            <div className='product-container'>
                <img src={leftArrow} alt='left-arrow' className='arrow' />
                <img src={bgImg} alt='bg-image' className='bg-image' />
                <img src={productImg} alt='product' className='product-img' />
                <img src={rightArrow} alt='right-arrow' className='arrow' />
            </div>
            <div className='banner-details-container'>
                <div className='details-section'>
                    <h1>Manuka Honey</h1>
                    <p>UMF™  <span> 24+</span></p>
                    <p>MGO  <span> 1122+</span></p>
                </div>
                <div className='section2' onClick={handlePopup}>
                    <img src={note} alt='note-icon' className='note-icon' />
                    <p>What is UMF and MGO?</p>
                </div>
                {popUp && <PopUp setPopUp={setPopUp} />}
                <div className='description-container'>
                    <div className='rating-card'>
                        <p>The Optimiser</p>
                        <div className='rating-section'>
                            <img src={stars} alt='rating-star' className='rating-icon' />
                            <p>825 Reviews</p>
                        </div>
                    </div>
                    <p className='description-section'>
                        For those times in life when quality comes first. This pure UMF™ 24+ Manuka
                        Honey is powerfully active, sourced from wild and rugged locations around
                        Aotearoa New Zealand and great for almost all uses. It has a full, delicious
                        flavour and your body will love you for it.
                    </p>
                    <div className='certificate-container'>
                        <img src={certificate1} alt='' className='certificate-image' />
                        <img src={certificate2} alt='' className='certificate-image' />

                        <img src={certificate3} alt='' className='certificate-image' />

                        <img src={certificate4} alt='' className='certificate-image' />

                        <img src={certificate5} alt='' className='certificate-image' />
                        <img src={certificate6} alt='' className='certificate-image' />

                    </div>
                </div>
                <div className='bottle-container'>
                     <p className='select-paragraph'>SIZE (SELECT ONE)</p>
                     <p className='variant-paragraph'>Variant: 125g | 4.4oz</p>
                     <div className='bottles-section'>
                        <img src={bottle1} alt='bottles' className='bottles-image' />
                        <img src={bottle2} alt='bottles' className='bottles-image' />
                        <img src={bottle3} alt='bottles' className='bottles-image' />
                        <img src={bottle4} alt='bottles' className='bottles-image' />
                        <img src={bottle5} alt='bottles' className='bottles-image' />
                        <img src={bottle6} alt='bottles' className='bottles-image' />
                        <img src={bottle7} alt='bottles' className='bottles-image' />
                     </div>
                </div>
                <div style={{marginTop: '20px'}} className='payment-container'> 
                    <p className='payment-paragraph'>
                        PAYMENT OPTIONS (SELECT ONE)
                    </p>
                    <div className='payment-section'>
                         <div className='section1'>
                            <div className='left-card'>
                               <p>One-time <br /> purchase</p>
                               <p>$55.88 <br />USD</p>
                            </div>
                            <div className='right-card'>
                                  <p>Subscribe & save <br /> 20%</p>
                               <p>$44.70 <br />USD</p>
                            </div>
                         </div>
                         <div className='what-subscription-section'>
                            <img src={rotate} alt='reload' className='reload-icon' />
                            <p>What is a Subscription?</p>
                         </div>
                    </div>
                </div>
                <div className='quantity-container'> 
                    <p className='sub-paragraph'>SELECT QUANTITY</p>
                    <div className='button-section'>
                       <div className='quantity-counter-container'>
                            <p>
                                -
                            </p> 
                            <span>
                                1
                            </span> 
                            <p>
                                +
                            </p>
                       </div>
                       <div className='add-to-cart'>
                        ADD TO CART
                       </div>
                    </div>
                </div>
                <div className='beauty-bundle-container'>
                    <div className='section1'>
                         <img src={leftArrow} alt='leftarrow' className='leftarrow' />
                          <h2>Beauty Bundle</h2>
                          <img src={rightArrow} alt='rightarrow' className='rightarrow' />
                    </div>
                    <div className='sectionb2'>
                        <div className='part1'>
                            <div>
                            <div className='image-container'>
                                <img src={bbBottle1} alt='' className='' />
                            </div>
                            <h3>UMF 20+</h3>
                            <select>
                                <option>250 g</option>
                                <option>500 g</option>
                            </select>
                         </div>
                         <h4>+</h4>
                         <div>
                            <div className='image-container'>
                                <img src={bbBottle2} alt='' className='' />
                            </div>
                            <h3>UMF 24+</h3>
                            <select>
                                <option>250 g</option>
                                <option>500 g</option>
                            </select>
                         </div>
                         <h4>+</h4>
                         <div>
                            <div className='image-container'>
                                <img src={spoon} alt='' className='' />
                            </div>
                            <h3>Wooden Spoon</h3>
                            
                         </div>
                        </div>
                         <div className='part2'>
                              <div>
                                 <p className='underline-paragraph'>$478.75 USD</p>
                                 <p className='bold-paragraph'>$430.88 USD</p>
                                 <p className='save'>
                                    Save 10% 
                                 </p>
                              </div>
                              <button>
                                 Add bundle to cart 
                              </button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner