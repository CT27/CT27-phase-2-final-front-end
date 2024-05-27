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
            <label>Email:</label>
            <input type="email"></input>
          </div>
          <label>Password:</label>
          <input type="password"></input>
          <div>
            <button>Register</button>
          </div>
        </form>
      </header>
    </div>
  );
}
export default NewUser;
