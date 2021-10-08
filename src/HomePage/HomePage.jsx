import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Card from "@material-ui/core/Card";

import {fetchFunds, userActions} from '../_actions';


class HomePage extends React.Component {
    componentDidMount() {
        this.props.getFunds();
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const {user, users, funds} = this.props;
        // console.log(funds)
        const listItems = funds.funds.filter((fund) => {
            return fund.schemeCode < 100032;
        }).map((fund) =>
            (<Card
                style={{
                    width: 600,
                    backgroundColor: "lightyellow",
                    padding: 15,
                    margin:5,
                }}
            ><Link to={{
                pathname: "/detail",
                state: [{schemeCode: fund.schemeCode}]
            }}><div>{fund.schemeCode}</div>
                <div>{fund.schemeName}</div></Link>
            </Card>)
        );
        return (
            <div>{listItems}</div>
        );
    }
}

function mapState(state) {
    const {users, authentication, funds} = state;
    const {user} = authentication;
    return {user, users, funds};
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete,
    getFunds: fetchFunds,
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export {connectedHomePage as HomePage};