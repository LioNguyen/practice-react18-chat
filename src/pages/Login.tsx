import { useState } from "react";

const Login = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e: any) => {};

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
