import { useState } from 'react'
import slideImages from "./assets/images"
import SlideHandler from './Components/SlideHandler/SlideHandler'
import Counter from './Components/Couter/Counter'
import FormValidation from './Components/Formvaldiation/Formvalidation'
import Counterdemo from './Demo/Counterdemo'
import FormValidationddemo from './Demo/FormValidationddemo'
import ReactRedux from './Components/ReactRedux/ReactRedux'
import { UseMemo } from './Components/UseMemo/UseMemo'
import UseCallback from './Components/UseCallback/UseCallback'
import DemuseMemo from './Components/UseMemo/DemuseMemo'
function App() {
 
  return (
    <>
      {/* <SlideHandler/> */}
      {/* <Counterdemo/> */}
      {/* <FormValidationddemo/> */}
      {/* <ReactRedux/> */}
      {/* <UseMemo/> */}
      {/* <UseCallback/> */}
      <DemuseMemo/>
    </>
  )
}

export default App;
