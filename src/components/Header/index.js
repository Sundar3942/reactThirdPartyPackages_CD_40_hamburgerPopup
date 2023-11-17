/* eslint-disable jsx-a11y/control-has-associated-label */
// Write your code here
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import 'reactjs-popup/dist/index.css'

import './index.css'

const Header = () => (
  <div className="header">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>

    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            data-testid="hamburgerIconButton"
            type="button"
            className="trigger-button"
          >
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <div className="popup-page">
            <button
              data-testid="closeButton"
              type="button"
              className="trigger-button close-btn"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ul className="home-and-about-link-container">
              <li className="link-container">
                <AiFillHome size={25} />
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li className="link-container">
                <BsInfoCircleFill size={25} />
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
