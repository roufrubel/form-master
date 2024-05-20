
import './App.css'
// import HookForm from './components/HookForm'
import ReuseableForm from './components/ReuseableForm'
// import RefForm from './components/RefForm'

// import SimpleForm from './components/SimpleForm'
// import StatefullForm from './components/StatefullForm'



function App() {
  return (
    <>     
      <h1>Vite + React</h1>
     {/* <SimpleForm></SimpleForm> */}
     {/* <StatefullForm></StatefullForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}
     <ReuseableForm formTitle={'Sign Up'}></ReuseableForm>
     <ReuseableForm formTitle={'Profile Update'} submitBtnText={'Update'}></ReuseableForm>
    
    </>
  )
}

export default App
