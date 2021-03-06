import PropTypes from 'prop-types';
import { useState } from 'react'

function LogIn({ setLogInToken }) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    async function loginUser(credentials) {
        return fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setLogInToken(token);
    }

    return (
            <div className="login-wrapper">
                <h1>Welcome to Spudify!</h1>
                <h2>Please Log In</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input type="text" onChange={e => setUserName(e.target.value)}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <div>
                        <br></br>
                        <button className="btn" type="submit">Submit</button>
                    </div>
                </form>
            </div>
    )
}


LogIn.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default LogIn