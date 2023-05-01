import React from 'react'
// import '../assets/stylefiles/footer.css'
import { BsFillStarFill } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";


import  appstore  from '../assets/images/appstore.png'
import  googleplastore  from '../assets/images/platstore.png'
import  visa  from '../assets/images/visa.png'
import  mastercard  from '../assets/images/mastercard.png'
import  debitcard  from '../assets/images/debitcard.png'









function Footer() {
    return (
        <>
            <div className='bg-custom'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='foot_col_1'>
                                <p className='web_name'>Profixingdubai</p>
                                <p className='foot_content'>At Profixingdubai, we are working hard to build your trusted one-stop home services destination. By continuously challenging the status quo and seeking new ways to make home services simple, reliable and affordable, we want to do our bit to take some hassle away from your daily life</p>
                                <p className='reveiw' >Based on Reveiws</p>
                                <div className='reviw_stars'>
                                    <BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /> (Read Reveiws)

                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='foot_col_1'>
                                <p className='web_name'>Contact for Support</p>
                                <p className='foot_content'>Profixingdubai Mobile Services DMCC Jumeirah Lake Towers, Dubai, UAE</p>
                                <p className='reveiw_2' ><span className='win_number'>+971 50 636 7091</span>
                                    <br></br>
                                    <br></br>
                                    support@Profixingdubai.com 8AM - 8PM, everyday
                                    (except public holidays)


                                </p>

                                {/* <div className='reviw_stars_2'>
                                    <AiFillFacebook /><AiFillInstagram /><AiFillTwitterSquare /><AiOutlineYoutube /><BsLinkedin />

                                </div> */}

                                <div className="social-menu">

                                    <ul>
                                        <li><a href="" className='footer-icons'>
                                            <AiFillFacebook /></a></li>
                                        {/* <li><a href=""><AiFillFacebook /></a></li> */}
                                        <li><a href="" className='footer-icons'><AiFillTwitterSquare /></a></li>
                                        <li><a href="" className='footer-icons'><AiFillInstagram /></a></li>
                                        <li><a href="" className='footer-icons'><AiOutlineYoutube /></a></li>
                                        <li><a href="" className='footer-icons'><BsLinkedin /></a></li>
                                    </ul>
                                </div>









                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='foot_col_1'>
                                <p className='web_name'>Book Now</p>
                                <p className='foot_content_2'><span className='win_aviliable'>Online Booking available 24/7</span>
                                <br></br>
                                
                                   <span className='win_donload'> Download your Home Services app</span></p>
                                <p className='reveiw' >We accept payments in cash or online using VISA and Master Card (Credit or Debit cards)</p>
                                {/* <div className='reviw_stars'>
                                    <BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /> (Read Reveiws)

                                </div> */}
                                <div className='stores'>
                                <img  className='store_app' src={ appstore } alt='' />
                               
                                <img className='apple_store' src= { googleplastore } alt='' />
                                </div>

                                <p className='pament' >We accept payments in cash or online using VISA and Master Card (Credit or Debit cards)</p>

                                <div className='visa_imgs'>
                                    <div className='visa_1'>
                                    <img src={visa} alt='' />
                                    </div>
                                    <div className='visa_1'>
                                    <img src={mastercard} alt='' />
                                    </div>
                                    <div className='visa_1'>
                                    <img src={debitcard} alt='' />
                                    </div>
                                </div>

                             </div>
                        </div>
                    </div>

                </div>
            </div>















        </>
    )
}

export default Footer