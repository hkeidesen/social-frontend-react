import './register.css'

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">
                        HK-social
                    </h3>
                    <span className="loginDescription">
                        Connect with your friends without any of your data mined.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="username" className="loginInput" />
                        <input placeholder="email" className="loginInput" />
                        <input placeholder="password" className="loginInput" />
                        <input placeholder="password again" className="loginInput" />
                        <button className="loginButton">Sign up</button>
                        {/* <span className="loginForgot">Forgot password</span> */}
                        <button className="loginRegisterButton">Log into your account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
