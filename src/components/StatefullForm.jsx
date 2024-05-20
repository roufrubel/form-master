import { useState } from "react";


const StateFullForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       if(password.length < 6){
setError('Password must be at least 6 characters long');
       } 
       else{
        setError('');
       }
    }

    const handleNameChange = (e) => {
        setName(e.target.value);        
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);        
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);        
    }

    return (
        <form onSubmit={handleSubmit} className="bg-slate-100 p-6">
        <input
        value={name}
        onChange={handleNameChange}
        type="text" name="name" id="" /><br /><br/>
        <input        
        onChange={handleEmailChange}
        type="email" name="email" id="" /><br /><br/>
        <input
        onChange={handlePasswordChange}
        type="password" name="password" required /> <br />
        <input type="submit" value="Submit" />
        {
            error && <p>{error}</p>
        }
      </form>
    );
};

export default StateFullForm;