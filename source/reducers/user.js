const initialState = {
  token: null,
  error: null,
  isLoading: false
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'LOGIN_LOADING':
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case 'LOGIN_SUCCEEDED':
      return {
        token: payload.token,
        error: null,
        isLoading: false
      };
    case 'LOGIN_FAILED':
      return {
        token: null,
        error: payload.error || null,
        isLoading: false
      };
    case 'SIGNUP_LOADING':
      return {
        ...initialState,
        isLoading: true
      };
    case 'SIGNUP_SUCCEEDED':
      return initialState;
    case 'SIGNUP_FAILED':
      return {
        token: null,
        error: payload.error,
        isLoading: false
      };
    case 'LOGOUT_LOADING':
      return {
        ...initialState,
        isLoading: true
      };
    case 'LOGOUT_SUCCEEDED':
      return initialState;
    case 'LOGOUT_FAILED':
      return {
        token: null,
        error: payload.error,
        isLoading: false
      };
    case 'LOGOUT_SUCCEEDED':
      return initialState;
    default:
      return state;
  }
}
