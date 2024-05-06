export { default as LoginEmail } from './login/login-email'
export { default as LoginPassword } from './login/login-password'

export { default as SignUp } from './signup/sign-up'
export { default as ResetPassword } from './reset-password'

export enum authStateEnum {
  SIGNUP = 'SIGNUP',
  LOGIN_EMAIL = 'LOGIN_EMAIL',
  LOGIN_PASSWORD = 'LOGIN_PASSWORD',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
}
