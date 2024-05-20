import useInputState from "../hooks/useInputState";


const HookForm = () => {
    // const [name, handleNameChange] = useInputState('rojoni');
    const emailState = useInputState('mail@g.co');

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log('from hook', emailState.value);
    }
    return (
        <div className="bg-slate-200 p-6">
        <form onSubmit={handleOnSubmit}>
          {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" /><br /><br/> */}
          <input {...emailState}  type="email" name="email" id="" /><br /><br/>
          <input type="password" name="password" id="" /> <br /><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
};

export default HookForm;