import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class Login extends React.PureComponent {

  state = {
    email: '',
    password: '',
  }

  handleEmailChange = (e) => {
    e.persist();
    this.setState(() => ({ email: e.target && e.target.value }));
  }

  handlePasswordChange = (e) => {
    e.persist();
    this.setState(() => ({ password: e.target && e.target.value }));
  }

  handleLogin = () => {
    const { email, password } = this.state;
    this.props.login({ email, password });
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                  <div className="form-group">
                    <div className="nes-field">
                      <span className="nes-text is-primary">Email</span>
                      <input
                        className="nes-input"
                        id="email"
                        onChange={this.handleEmailChange}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="nes-field">
                      <span className="nes-text is-primary">Password</span>
                      <input
                        className="nes-input"
                        id="password"
                        onChange={this.handlePasswordChange}
                        type="password"
                      />
                    </div>
                  </div>
                  <button
                    className="nes-btn col-12"
                    onClick={this.handleLogin}
                  >
                    Login
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(null, { login })(Login);
