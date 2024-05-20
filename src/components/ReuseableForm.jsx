

const ReuseableForm = ({formTitle, handleSubmit, submitBtnText='Submit', children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    return (
        <>
        {children}
        <div className="bg-slate-200 p-6">
        <form onSubmit={handleLocalSubmit}>
          <input type="text" name="name" id="" /><br /><br/>
          <input  type="email" name="email" id="" /><br /><br/>
          <input type="password" name="password" id="" /> <br /><br/>
          <input type="submit" value={submitBtnText} />
        </form>
      </div>
        </>
    );
};

export default ReuseableForm;