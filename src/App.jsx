
import './App.css'
// import HookForm from './components/HookForm'
import ReuseableForm from './components/ReuseableForm'
// import RefForm from './components/RefForm'

// import SimpleForm from './components/SimpleForm'
// import StatefullForm from './components/StatefullForm'



function App() {
  const handleSignUpSubmit = data => {
    console.log('singn up', data)
  }
  const handleUpdateProfile = data => {
    console.log('update profile', data)
  }
  return (
    <>     
      <h1>Vite + React</h1>
     {/* <SimpleForm></SimpleForm> */}
     {/* <StatefullForm></StatefullForm> */}
     {/* <RefForm></RefForm> */}
     {/* <HookForm></HookForm> */}
     <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
      <h2>Sign Up</h2>
      <p>Please sign up here.</p>
     </ReuseableForm>
     <ReuseableForm formTitle={'Profile Update'} submitBtnText={'Update'} handleSubmit={handleUpdateProfile}>
     <h2>Update Profile</h2>
      <p>Please always keep update your profile.</p>
     </ReuseableForm>
    
    </>
  )
}

export default App
