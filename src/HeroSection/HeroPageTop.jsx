import React from 'react'
import HeroBackgroundImage from '../assets/images/HeroBackgroundImage.jpg'
import Navbar from '../Navbar/Navbar'
import { ArrowDown } from 'lucide-react'

const HeroPageTop = () => {
    return (
        <>
            <div className="container-fluid heroPage-container">

                <div className="row heroPage-wrapper justify-content-center pb-3 px-2  ">
                    <Navbar />

                    <div className='HeroText_container col-8 py-5'>
                        <div className="hero_text text-center ">

                            <div className="hero_headline p-2">

                                <div className="hero_title hero_title1 d-block d-lg-flex justify-content-center align-items-center gap-3">
                                    <span className="hero_word">Type</span>
                                    <span className="hero_word hero_highlight"> Faster</span>
                                </div>

                                <div className="hero_title hero_title2 d-block d-lg-flex justify-content-center align-items-center gap-3">
                                    <span className="hero_word">Think</span>
                                    <span className="hero_word hero_highlight"> Sharper</span>
                                </div>

                            </div>

                            <p className="hero_description">
                                Challenge yourself, track your performance, and become a faster, more accurate typist.
                            </p>

                        </div>
                    </div>

                    <div className='downArrow_container text-center py-3'>
                        <button className='downArrow_wrapper rounded-circle'>
                            <ArrowDown size='28px' className=' text-white arrowDownIcon' />
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeroPageTop