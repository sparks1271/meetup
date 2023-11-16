import React from "react"

const LanguageContext=React.createContext({
    name:""
    activeOption:"Arts and Culture"
    isTrue:false,
    onButton=()=>{},
    changeName=()=>{},
    changeSelectOption=()=>{},
})
export default LanguageContext