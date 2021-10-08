import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Card from "@material-ui/core/Card";

import {fetchFundDetail, fetchFunds, userActions} from '../_actions';


class FundDetailPage extends React.Component {
    componentDidMount() {
        this.props.getFunds();
        this.props.getFundDetails(this.props.location.state[0]['schemeCode']);
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const {user, users, funds, fundDetail} = this.props;
        const metaDetails = fundDetail.details.meta;
        const dataDetails = fundDetail.details?.data;
        let slicedArray;
        dataDetails ?
            slicedArray = dataDetails?.slice(0, 5) : slicedArray = []
        return (
            <Card
                style={{
                    width: 600,
                    backgroundColor: "lightblue",
                    padding: 15,
                    margin: 5,
                    fontWeight: "bold",
                }}
            ><h3 style={{fontFamily: "MyCustomFont", fontWeight: "bold", textAlign: "center",}}>Product Detail</h3>
                <div>{metaDetails?.fund_house}</div>
                <div>{metaDetails?.scheme_category}</div>
                <div>{metaDetails?.scheme_name}</div>
                <div>{metaDetails?.scheme_type}</div>
                <div><h3 style={{fontFamily: "MyCustomFont", fontWeight: "bold",}}>Nav Detail</h3></div>
                {slicedArray.map((item) => {
                    return (<div>
                        <div>{item.date}    {item.nav}</div>
                    </div>)
                })

                }
            </Card>
        );
    }
}

function mapState(state) {
    const {users, authentication, funds, fundDetail} = state;
    const {user} = authentication;
    return {user, users, funds, fundDetail};
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete,
    getFunds: fetchFunds,
    getFundDetails: fetchFundDetail,
}

const connectedHomePage = connect(mapState, actionCreators)(FundDetailPage);
export {connectedHomePage as DetailPage};