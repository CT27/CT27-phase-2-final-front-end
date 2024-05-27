function LoginBox() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Log-in</h1>

        <form className="Log-in">
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
