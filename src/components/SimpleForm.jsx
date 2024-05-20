

const SimpleForm = () => {
    const handleOnSubmit =e=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
      }
    return (
        <div className="bg-slate-200 p-6">
        <form onSubmit={handleOnSubmit}>
          <input type="text" name="name" id="" /><br /><br/>
          <input  type="email" name="email" id="" /><br /><br/>
          <input type="password" name="password" id="" /> <br /><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
};

export default SimpleForm;