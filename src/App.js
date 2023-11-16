import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import LanguageContext from './Context/languageContext'
import Home from './components/Home'
import Register from './components/Register'
import Header from './components/Header'
import NotFound from './components/NotFound'

// const topicsList = [
//   {
//     id: 'ARTS_AND_CULTURE',
//     displayText: 'Arts and Culture',
//   },
//   {
//     id: 'CAREER_AND_BUSINESS',
//     displayText: 'Career and Business',
//   },
//   {
//     id: 'EDUCATION_AND_LEARNING',
//     displayText: 'Education and Learning',
//   },
//   {
//     id: 'FASHION_AND_BEAUTY',
//     displayText: 'Fashion and Learning',
//   },
//   {
//     id: 'GAMES',
//     displayText: 'Games',
//   },
// ]

class App extends Component {
  state = {
    name: '',
    activeOption: 'Arts and Culture',
    isTrue: false,
  }

  changeSelectOption = activeOption => {
    this.setState({activeOption})
  }

  onChangeName = name => {
    this.setState({name})
  }

  onClickButton = isTrue => {
    this.setState({isTrue})
  }

  render() {
    const {activeOption, name, isTrue} = this.state

    return (
      <LanguageContext.Provider
        value={{
          activeOption,
          changeSelectOption: this.changeSelectOption,
          name,
          onChangeName: this.onChangeName,
          isTrue,
          onClickButton: this.onClickButton,
        }}
      >
        <Switch>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </LanguageContext.Provider>
    )
  }
}

export default App
