import LanguageContext from '../../Context/languageContext'

const Home = props => (
  <LanguageContext.Consumer>
    {value => {
      const {name, isTrue, activeOption, onClickButton} = value

      const onClickRegisterButton = () => {
        onClickButton(true)
        const {history} = props
        history.push('/register')
      }

      return (
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
              <button type="button" onClick={onClickRegisterButton}>
                Register
              </button>
            </div>
          )}
        </div>
      )
    }}
  </LanguageContext.Consumer>
)

export default Home
