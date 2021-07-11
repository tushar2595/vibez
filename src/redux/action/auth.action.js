import { userConstants } from '../../constants/redux.constants';
import { loginRequest } from '../../api/auth.api';

export const userActions = {
    login,
};

function login(data) {
    return dispatch => {
        dispatch(request(data));
        loginRequest(data)
            .then(
                user => {
                    dispatch(success(user));
                    //history.push('/');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
