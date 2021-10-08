import { fundDetailConstants } from '../_constants';


export const fundDetailsInitialState = {
    details: {},
    isSettingDetails: false,
    setDetailsApiLoadingErrors: ''
};

const fundDetail = (state = fundDetailsInitialState, action) => {
    switch (action.type) {
        case fundDetailConstants.SET_DETAILS:
            return { ...state, details: action.payload };
        case fundDetailConstants.SET_IS_SETTING_DETAILS:
            return { ...state, isSettingDetails: action.payload };
        case fundDetailConstants.SET_DETAIL_API_LOADING_ERRORS:
            return { ...state, setDetailsApiLoadingErrors: action.payload };
        default:
            return state;
    }
};

export default fundDetail;
