const defaultState = {
  status: 'LOGGED_OUT',
  user: {
    uid: null,
    profile: {
      email: null,
      displayName: null,
    }
  },
  process: {
    pending: false,
    error: null
  }
};

export default function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case 'RESET_PASSWORD_LOADING':
    case 'LOGIN_LOADING':
    case 'SIGNUP_LOADING':
    case 'LOGOUT_LOADING':
      return {
        ...defaultState,
        process: {
          pending: true,
          error: null
        }
      };

    case 'LOGIN_SUCCEEDED':
      return {
        status: 'LOGGED_IN',
        user: {
          ...payload
        },
        process: defaultState.process
      };

    case 'SIGNUP_SUCCEEDED':
      return {
        ...defaultState,
        status: 'SIGNED_UP'
      };

    case 'RESET_PASSWORD_SUCCEEDED':
      return {
        ...defaultState,
        status: 'RESET_PASSWORD_EMAIL_SENT'
      };

    case 'LOGOUT_SUCCEEDED':
      return defaultState;

    case 'LOGIN_FAILED':
    case 'SIGNUP_FAILED':
    case 'LOGOUT_FAILED':
    case 'RESET_PASSWORD_FAILED':
      return {
        ...defaultState,
        process: {
          pending: false,
          error: payload.error
        }
      };

    default:
      return state;
  }
}
