import React from 'react'

const LanguageContext = React.createContext({
  activeOption: 'Arts and Culture',
  name: '',
  isTrue: false,
  changeSelectOption: () => {},
  onChangeName: () => {},
  onClickButton: () => {},
})
export default LanguageContext
