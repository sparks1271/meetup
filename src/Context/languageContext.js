import React from 'react'

const LanguageContext = React.createContext({
  activeOption: 'Arts and Culture',
  name: '',
  isTrue: false,
  selectOption: 'ARTS_AND_CULTURE',
  changeSelectOption: () => {},
  onChangeName: () => {},
  onClickButton: () => {},
})
export default LanguageContext
