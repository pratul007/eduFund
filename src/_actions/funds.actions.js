import {fundConstants} from '../_constants';
import API from '../axiosConfig/index'

export function setFundsList(payload) {
    return {type: fundConstants.SET_FUNDS_LIST, payload: payload};
}

export function setIsSettingFunds(status) {
    return {type: fundConstants.SET_IS_SETTING_FUNDS, payload: status};
}

export function setFundsApiLoadingErrors(payload) {
    return {type: fundConstants.SET_FUND_API_LOADING_ERRORS, payload: payload};
}

let FundsAPI = new API(false)

export function fetchFunds() {
    return function (dispatch) {
        FundsAPI.get(`mf`)
            .then((res) => {
                    dispatch(setIsSettingFunds(true))
                    dispatch(setFundsList(res.data))
                    dispatch(setFundsApiLoadingErrors(null))
                    dispatch(setIsSettingFunds(false))
                }
            )
            .catch((err) => {
                dispatch(setFundsApiLoadingErrors(err))
            });
    };
}

