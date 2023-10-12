// Write your code here

import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <Link className="home-para" to="/">
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
        const background = isDarkTheme ? 'dark-background' : 'light-background'
        return (
          <>
            <Navbar />
            <div className={`home-con ${background}`}>
              <img src={imageUrl} alt="home" className="home-img" />
              <p>Home</p>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  </Link>
)

export default Home
