import React from 'react'
import { Link } from 'react-router-dom'
import SidePic from '../assets/imgs/square.png'
import Rarrow from '../assets/svg/arrow-forward-outline.svg'
import '../css/design.css'
import '../css/land-page.css'
function LandPage() {
  return (
    <div>
      <div className='big-field'>
        <div className='head-title'>
            <header id='head-spacing'>
                <p>Visual Notes</p>
                <img src={SidePic} alt="" />
            </header>
        </div>
        <div className='big-boy'>
            <div className='left-cont'>
                <p id='intro'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt consequatur reprehenderit obcaecati rerum inventore delectus voluptatem repudiandae facilis velit quidem amet nulla esse quis, debitis, aperiam, atque excepturi? Commodi.</p>
                <div id='get-btn'>
                    <Link to="/Login" style={{ textDecoration: 'none' }}><button className='btns'>Get Started <img src={Rarrow} alt="" /></button></Link>
                </div>
            </div>
            <div className='right-cont'>
                <img src={SidePic} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default LandPage
