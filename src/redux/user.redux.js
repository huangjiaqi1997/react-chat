import axios from 'axios'
import { getRedirectPath } from '../util'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERR_MSG = 'ERR_MSG'

const initialState = {
  name: '',
  isAuth: false,
  pwd: '',
  type: '',
  msg: '',
  redirectTo: ''
}

export const user = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_SUCCESS:
      console.log(action.payload);
      return { ...state, isAuth: true, msg: '', redirectTo: getRedirectPath(action.payload), ...action.payload }
    case ERR_MSG:
      return { ...state, isAuth: false, msg: action.msg }
    default:
      return state
  }
}

export const registerSuccess = (payload) => ({ payload, type: REGISTER_SUCCESS })
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
          dispatch(registerSuccess(res.data.data))
        } else {
          dispatch(errMsg(res.data.msg))
        }
      })
  }
}
