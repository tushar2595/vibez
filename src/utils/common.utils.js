import { LOGGED_USER } from '../constants/common.constants';
export const getLoginUserDetails = () => {
    const user = window.localStorage.getItem(LOGGED_USER);
    return JSON.parse(user);
}