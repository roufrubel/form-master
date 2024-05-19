
import './App.css'

function App() {

  const handleOnSubmit =e=>{
    e.preventDefault();
    console.log(e.target.password.value);
  }


  return (
    <>
     
      <h1>Vite + React</h1>
      <div className="bg-slate-100 p-6">
        <form onSubmit={handleOnSubmit}>
          <input type="text" name="name" id="" /><br />
          <input type="email" name="email" id="" /><br />
          <input type="password" name="password" id="" /> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>

    </>
  )
}

export default App
