import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Card from "@material-ui/core/Card";

import {fetchFundDetail, fetchFunds, userActions} from '../_actions';


class UserDetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        event.target.value = event.target.value;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        console.log(user.fullName)
        if (user.fullName && user.username && user.dateOfBirth && user.gender) {
            console.log('yay')
            this.props.update(user);
        }
    }
    componentDidMount() {
        this.props.getFunds();
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const {user} = this.state;
        return (
            <Card
                style={{
                    width: 600,
                    backgroundColor: "lightblue",
                    padding: 15,
                    margin: 5,
                }}
            >
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group'}>
                        <label htmlFor="fullName">Name</label>
                        <input type="text" className="form-control" name="fullName" value={user.fullName}
                               onChange={this.handleChange}/>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={user.username}
                               onChange={this.handleChange}/>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input type="date" className="form-control" name="dateOfBirth" value={user.dateOfBirth}
                               onChange={this.handleChange}/>
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor="gender">Gender</label>
                        <input type="text" className="form-control" name="gender" value={user.gender}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Save Changes</button>
                        <Link to="/user_detail" className="btn btn-link">Product List</Link>
                    </div>
                </form>
            </Card>
        );
    }
}

function mapState(state) {
    const { updating } = state.update;
    const {users, authentication, funds, fundDetail} = state;
    const {user} = authentication;
    return {user, users, funds, fundDetail, updating};
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete,
    getFunds: fetchFunds,
    getFundDetails: fetchFundDetail,
    update: userActions.update,
}

const connectedHomePage = connect(mapState, actionCreators)(UserDetailPage);
export {connectedHomePage as UserDetailPage};