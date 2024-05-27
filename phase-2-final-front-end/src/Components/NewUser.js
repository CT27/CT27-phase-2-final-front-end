function NewUser() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("registered");
  }
  return (
    <div className="Log-in">
      <header className="Log-in-header">
        <h1>New User</h1>

        <form className="Log-in-form" onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input type="name"></input>
            <div></div>
            <label>Last Name:</label>
            <input type="name"></input>
            <div></div>
            <label>Mobile phone:</label>
            <input type="number"></input>
            <div></div>
            <label>Email:</label>
            <input type="email"></input>
            <div></div>
          </div>
          <div>
            <label>Password:</label>
            <input type="password"></input>
          </div>
          <div>
            <h3>Payroll details</h3>
            <label>Approver name:</label>
            <select>"Candice", "Troy"</select>
            <div></div>
            <label>Bank account name:</label>
            <input type="account name"></input>
            <div></div>
            <label>BSB:</label>
            <input type="number"></input>
            <div></div>
            <label>Bank account number:</label>
            <input type="number"></input>
            <div></div>
          </div>

          <div>
            <button>Register</button>
          </div>
        </form>
      </header>
    </div>
  );
}
export default NewUser;
