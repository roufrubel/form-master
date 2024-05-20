

const ReuseableForm = ({formTitle, handleOnSubmit, submitBtnText='Submit'}) => {

    // const handleOnSubmit = e => {
    //     e.preventDefault();
    // }

    return (
        <>
        <h2>{formTitle}</h2>
        <div className="bg-slate-200 p-6">
        <form onSubmit={handleOnSubmit}>
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