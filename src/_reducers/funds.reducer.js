import { fundConstants } from '../_constants';


export const fundsInitialState = {
    funds: [],
    isSettingFunds: false,
    setFundsApiLoadingErrors: ''
};

const funds = (state = fundsInitialState, action) => {
    switch (action.type) {
        case fundConstants.SET_FUNDS_LIST:
            return { ...state, funds: action.payload };
        case fundConstants.SET_IS_SETTING_FUNDS:
            return { ...state, isSettingFunds: action.payload };
        case fundConstants.SET_FUND_API_LOADING_ERRORS:
            return { ...state, setFundsApiLoadingErrors: action.payload };
        default:
            return state;
    }
};

export default funds;