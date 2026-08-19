import React from 'react'
import HeroPageTop from './HeroPageTop'
import HeroPageCenter from './HeroPageCenter'
const HeroMainPage = () => {
    return (
        <>
            <div className='heroMainPage'>
                <HeroPageTop />

                <HeroPageCenter/>

            </div>

        </>
    )
}

export default HeroMainPage