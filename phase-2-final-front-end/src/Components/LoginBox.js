function LoginBox() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }
  return (
    <div className="Log-in">
      <header className="Log-in-header">
        <h1>Log-in</h1>

        <form className="Log-in-form" onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email"></input>
          </div>
          <label>Password:</label>
          <input type="password"></input>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </header>
    </div>
  );
}
export default LoginBox;
