import LanguageContext from './Context/languageContext'
import Header from '../Header'

const Home = () => (
  <LanguageContext.Consumer>
    {value => {
      const {name, isTrue, activeOption, onButton} = value

      onClickRegisterButton = () => {
        onButton(true)
        const {history} = props
        history.push('/register')
      }

      return (
        <div>
          {isTrue ? <h1>Hello {name}</h1> : <h1>Welcome to MeetUp</h1>}
          {isTrue ? (
            <p>Welcome to {activeOption}</p>
          ) : (
            <p>Please register for the topic</p>
          )}
          {isTrue ? (
            ''
          ) : (
            <button type="button" onClick={}>
              Register
            </button>
          )}
        </div>
      )
    }}
  </LanguageContext.Consumer>
)

export default Home
