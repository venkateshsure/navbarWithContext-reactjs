// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <Link className="about-para" to="/about">
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const imgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        const background = isDarkTheme ? 'dark-background' : 'light-background'
        return (
          <>
            <Navbar />
            <div className={`about-con ${background}`}>
              <img src={imgUrl} alt="about" className="about-img" />
              <p>About</p>
            </div>
          </>
        )
      }}
    </ThemeContext.Consumer>
  </Link>
)

export default About

// .light-background {
