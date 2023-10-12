// Write your code here

import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      return isDarkTheme ? (
        <div className="navbar-light-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
            alt="website logo"
            className="website-logo-img"
          />
          <div className="text-con-light">
            <Link className="text-decoration" to="/">
              <p>Home</p>
            </Link>
            <Link className="text-decoration" to="/about">
              <p>About</p>
            </Link>
          </div>
          <button onClick={toggleTheme} type="button" data-testid="theme">
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="theme"
              className="theme-img"
            />
          </button>
        </div>
      ) : (
        <div className="navbar-dark-con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
            alt="website logo"
            className="website-logo-img"
          />
          <div className="text-con-dark">
            <Link className="text-decoration" to="/">
              <p>Home</p>
            </Link>
            <Link className="text-decoration" to="/about">
              <p>About</p>
            </Link>
          </div>
          <button onClick={toggleTheme} type="button" data-testid="theme">
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
              className="theme-img"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
