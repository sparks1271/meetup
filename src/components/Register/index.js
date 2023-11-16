import LanguageContext from '../../Context/languageContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = () => (
  <LanguageContext.Consumer>
    {value => {
      const {name, changeName, changeSelectOption, activeOption} = value

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeOption = event => {
        changeSelectOption(event.target.value)
      }

      const onClickRegister = event => {
        event.preventDefault()
        const {history} = this.props

        history.push('/')
      }

      return (
        <div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
          </div>
          <div>
            <h1>Let us Join</h1>
            <form onSubmit={onClickRegister}>
              <label htmlFor="name">NAME</label>
              <input
                id="name"
                type="text"
                onChange={onChangeName}
                value={name}
              />
              <label htmlFor="option">TOPICS</label>
              <select
                id="option"
                value={activeOption}
                onChange={onChangeOption}
              >
                {topicsList.map(eachItem => (
                  <option key={eachItem.id}>{eachItem.displayText}</option>
                ))}
              </select>
              <button type="submit">Register</button>
              {name.length === 0 && <p>"Please enter your name</p>}
            </form>
          </div>
        </div>
      )
    }}
  </LanguageContext.Consumer>
)

export default Register
