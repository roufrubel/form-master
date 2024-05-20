import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
    }
    return (
        <div className="bg-slate-100">
            <form onSubmit={handleOnSubmit}>
        <input ref={nameRef} type="text" name="name" id="" /><br /><br/>
        <input ref={emailRef} defaultValue={'roufrubelbd@gmail.com'}   type="email" name="email" id="" /><br /><br/>
        <input ref={passwordRef}  type="password" name="password" id="" /> <br />
        <input type="submit" value="Submit" />
      </form>
        </div>
    );
};

export default RefForm;