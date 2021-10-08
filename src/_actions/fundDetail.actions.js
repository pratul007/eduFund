import {fundDetailConstants} from '../_constants';
import API from '../axiosConfig/index'

export function setFundDetail(payload) {
    return {type: fundDetailConstants.SET_DETAILS, payload: payload};
}

export function setIsSettingFundDetail(status) {
    return {type: fundDetailConstants.SET_IS_SETTING_DETAILS, payload: status};
}

export function setDetailApiLoadingErrors(payload) {
    return {type: fundDetailConstants.SET_DETAIL_API_LOADING_ERRORS, payload: payload};
}

let FundDetailAPI = new API(false)

export function fetchFundDetail(schemeName) {
    return function (dispatch) {
        FundDetailAPI.get(`mf/${schemeName}`)
            .then((res) => {
                    dispatch(setIsSettingFundDetail(true))
                    dispatch(setFundDetail(res.data))
                    dispatch(setDetailApiLoadingErrors(null))
                    dispatch(setIsSettingFundDetail(false))
                }
            )
            .catch((err) => {
                dispatch(setDetailApiLoadingErrors(err))
            });
    };
}
