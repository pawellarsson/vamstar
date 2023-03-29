import React, {useState} from 'react';

const LoginForm = () => {
    const [ error, setError ] = useState(null);

    const formSubmit = e => {
      e.preventDefault();
        const object = {
            name: e.target.user_email.value,
            email: e.target.user_pass.value
        }

      try {
          fetch('http://localhost:3000/signin', {
              method: 'POST',
              header:
                  {
                      Accept: "application/json",
                      "Content-Type": "application/json"

                  },
              body:JSON.stringify(object)

          })
          .then(res => {
            if (res.status === 404) {
                console.log(res);
                setError('Hrm, those credentials don\'t seem to be correct');
            }
            return res;
          });
      } catch (e) {
          setError('Hrm, those credentials don\'t seem to be correct');
          console.error(e);
      }
    };

    return (
        <>
            <form onSubmit={formSubmit}>
                {error && (
                    <div className="error">{error}</div>
                )}
                <div>
                    <div>
                        <label htmlFor="user_email">Email</label>
                        <input id="user_email" autoFocus="autofocus" type="email" name="user_email"/>
                    </div>
                    <div className="password-container">
                        <div className="label-container">
                            <label htmlFor="user_pass">Password</label>
                            <a tabIndex="-1" href="https://statushero.com/users/password/new">Forgot password?</a>
                        </div>
                        <input id="user_pass" autoFocus="autofocus" type="password" name="user_pass"/>
                    </div>
                </div>
                <button name="button" type="submit" data-disable-with="Signing in..." className="form-button">
                    <span>Sign in</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="w-5 h-5 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </button>
            </form>
            <div className="bottom-links">
                <ul className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between">
                    <li><a href="https://statushero.com/saml/signin">Sign in with SAML SSO</a></li>
                    <li><a href="https://statushero.com/magic_link/new">Sign in with a magic link ✨</a></li>
                </ul>
            </div>

            <style jsx>{`
              form {
                  margin: 0 0 1.5rem 0;
                }
                form::before,
                form::after {
                  border-top: 1px solid rgb(51,65,85);
                  box-sizing: border-box;
                  content: "";
                  display: block;
                }
                .error {
                  background-color: #ff9b8a26;
                  margin-bottom: 2rem;
                  padding: .5rem;
                  border-radius: .5rem;
                }
                label {
                  display: block;
                  font-weight: 500;
                  margin: 1rem 0 .125rem;
                }
                input {
                  height: 2.5rem;
                  background-color: #1e293b80;
                  border-color: #33415599;
                  border-style: solid;
                  border-radius: .25rem;
                  border-width: 1px;
                  color: rgb(248 250 252);
                  max-width: 36rem;
                  accent-color: #5352ed;
                  display: flex;
                  font-weight: 400;
                  margin-bottom: .5rem;
                  width: 100%;
                }
                input:focus {
                  border-color: rgb(83 82 237);
                  outline: 2px solid transparent;
                }
                form a {
                  color: rgb(79 149 254);
                  font-size: .875rem;
                  line-height: 1.25rem;
                  text-decoration: none;  
                }
                .label-container {
                  display: flex;
                  justify-content: space-between;
                }
                .form-button {
                  background-color: #5352edbf;
                  border-color: rgb(46 45 233);
                  border-radius: .375rem;
                  border-width: 1px;
                  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.05) 0 2px 4px 0 inset;
                  width: 11rem;
                  font-weight: 500;
                  padding-left: 1rem;
                  padding-right: 1rem;
                  white-space: nowrap;
                  align-items: center;
                  display: inline-flex;
                  height: 2.5rem;
                  justify-content: center;
                  color: #fff;
                  margin-bottom: 1rem;
                }
                .form-button svg {
                  width: 1.25rem;
                  height: 1.25rem;
                  margin-left: 4px;
                }
                .bottom-links {
                  
                }
                .bottom-links ul {
                  display: flex;
                  justify-content: space-between;
                  list-style: none;
                  margin: 0;
                  padding: 0;
                }
            `}</style>
        </>
    )
};

export default LoginForm;
