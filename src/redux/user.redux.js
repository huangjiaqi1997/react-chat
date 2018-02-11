import axios from 'axios'
import { getRedirectPath } from '../util'

const USER_INFO = 'USER_INFO'
const AUTH_SUCCESS = 'REGISTER_SUCCESS'
const ERR_MSG = 'ERR_MSG'

const initialState = {
  name: '',
  pwd: '',
  type: '',
  msg: '',
  redirectTo: ''
}

export const user = (state = initialState, action) => {
  switch(action.type) {
    case USER_INFO:
      return { ...state, ...action.payload }
    case AUTH_SUCCESS:
      return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), ...action.payload }
    case ERR_MSG:
      return { ...state, isAuth: false, msg: action.msg }
    default:
      return state
  }
}

export const userInfo = (payload) => ({ payload, type: USER_INFO })
const authSuccess = (payload) => ({ payload, type: AUTH_SUCCESS })
const errMsg = (msg) => ({ msg, type: ERR_MSG })

export const register = ({name, pwd, repeatPwd, type}) => {
  // 表单填写验证
  if (!name || !pwd) {
    return errMsg('用户名密码必须填写')
  }
  if (pwd !== repeatPwd) {
    return errMsg('两次密码输入不一致')
  }

  return dispatch => {
    axios.post('/user/register', {name, pwd, type})
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(authSuccess(res.data.data))
        } else {
          dispatch(errMsg(res.data.msg))
        }
      })
  }
}

export const login = ({ name, pwd }) => {
  if (!name || !pwd) {
    return errMsg('用户名密码必须填写')
  }

  return dispatch => {
    axios.post('/user/login', { name, pwd })
      .then(res => {
        if (res.status === 200 && res.data.code ===0) {
          dispatch(authSuccess(res.data.data))
        } else {
          dispatch(errMsg(res.data.msg))
        }
      })
  }
}

export const update = (data) => {
  return dispatch => {
    axios.post('/user/update', data)
      .then(res => {
        if (res.status === 200 && res.data.code === 0) {
          dispatch(authSuccess(res.data.data))
        } else {
          dispatch(errMsg(res.data.msg))
        }
      })
  }
}
