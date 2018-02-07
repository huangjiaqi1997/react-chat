const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

export const user = (state={user: 'huangjiaqi', auth: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {...state, auth: true}
    case LOGOUT:
      return {...state, auth: false}
    default:
      return state
  }
}

export const login = () => ({ type: LOGIN })
export const logout = () => ({ type: LOGOUT })
