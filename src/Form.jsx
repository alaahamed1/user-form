import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSignUp, setOpenSignUp] = useState(false);
  function handleIsOpen() {
    setOpenSignUp((show) => !show);
    console.log("alaa");
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="container">
      <section>
        <article>
          <div className="inner">
            <h1>Welcome</h1>
            <p>To Keep connected with us please Login with your credentials</p>
            <button onClick={handleIsOpen} className="btn">
              {openSignUp ? "Log In" : "Sign Up"}
            </button>
          </div>
        </article>
        <aside>
          <div className="inner">
            <h2>Create Account</h2>
            <nav id="socialLogin">
              <a
                href="mailto:alaa.elzeftawy@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="google"
              ></a>
              <a
                href="https://github.com/alaahamed800"
                target="_blank"
                className="github"
              ></a>
              <a
                href="https://www.linkedin.com/in/alaa-hamed-92a6b9233"
                target="_blank"
                className="linkedin"
              ></a>
            </nav>
            <p>or use your email for Registration</p>
            {openSignUp ? (
              <SignUp
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                onSubmit={handleSubmit}
              />
            ) : (
              <LogIn
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                onSubmit={handleSubmit}
              />
            )}
          </div>
        </aside>
      </section>
    </div>
  );
}

function SignUp({ email, setEmail, password, setPassword, onSubmit }) {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('')
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

function LogIn({ email, setEmail, password, setPassword, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
}
