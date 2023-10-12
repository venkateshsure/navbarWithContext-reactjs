// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const background = isDarkTheme ? 'dark-background' : 'light-background'
      return (
        <>
          <Navbar />
          <div className={`${background} not-found-con`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1>Lost your way?</h1>
            <p>we cannot seem to find your page?</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
