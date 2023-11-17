import {Link} from 'react-router-dom'
import LanguageContext from '../../Context/languageContext'
import Header from '../Header'

const Home = () => (
  <LanguageContext.Consumer>
    {value => {
      const {name, isTrue, activeOption, onClickButton} = value

      const onClickRegisterButton = () => {
        onClickButton(!isTrue)
      }

      return (
        <>
          <Header />
          <div>
            {isTrue ? (
              <div>
                <h1>Hello {name}</h1>
                <p>Welcome to {activeOption}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </div>
            ) : (
              <div>
                <h1>Welcome to Meetup</h1>
                <p>Please register for the topic</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
                <Link to="/register">
                  <button type="button" onClick={onClickRegisterButton}>
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </>
      )
    }}
  </LanguageContext.Consumer>
)

export default Home
