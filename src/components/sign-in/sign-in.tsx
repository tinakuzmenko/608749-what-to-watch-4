import React, {PureComponent, createRef} from 'react';
import PageFooter from '../page-footer/page-footer';
import PageHeader from '../page-header/page-header';
import {connect} from 'react-redux';
import {ActionCreator, Operations as UserOperations} from '../../store/user/user';
import {getAuthorizationError} from '../../store/user/selectors';
import {Pages} from '../../helpers/constants';

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this._handleSubmitClick = this._handleSubmitClick.bind(this);
  }

  _handleSubmitClick(evt) {
    const {onFormSubmit} = this.props;

    const userSignInData = {
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    };

    evt.preventDefault();
    onFormSubmit(userSignInData);
  }

  render() {
    const {isAuthorizationError, clearAuthError} = this.props;

    const isInvalidForm = isAuthorizationError &&
      <React.Fragment>
        <div className="sign-in__message">
          <p>Please enter a valid email address</p>
        </div>
      </React.Fragment>;

    return (
      <React.Fragment>
        <div className="user-page">
          <PageHeader
            currentPage={Pages.SIGN_IN}
          />
          <div className="sign-in user-page__content">
            <form
              action="#"
              className="sign-in__form"
              onSubmit={this._handleSubmitClick}
              onChange={clearAuthError}
            >
              {isInvalidForm}
              <div className="sign-in__fields">
                <div className={`sign-in__field ${isAuthorizationError && `sign-in__field--error`}`}>
                  <input
                    className="sign-in__input"
                    type="email"
                    placeholder="Email address"
                    name="user-email"
                    id="user-email"
                    ref={this.loginRef}
                    required
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
                </div>
                <div className="sign-in__field">
                  <input
                    className="sign-in__input"
                    type="password"
                    placeholder="Password"
                    name="user-password"
                    id="user-password"
                    ref={this.passwordRef}
                    required
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
                </div>
              </div>
              <div className="sign-in__submit">
                <button className="sign-in__btn" type="submit">Sign in</button>
              </div>
            </form>
          </div>
          <PageFooter />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthorizationError: getAuthorizationError(state),
});

const mapDispatchToProps = (dispatch) => ({
  clearAuthError() {
    dispatch(ActionCreator.clearAuthorizationError());
  },

  onFormSubmit(authData) {
    dispatch(UserOperations.login(authData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
