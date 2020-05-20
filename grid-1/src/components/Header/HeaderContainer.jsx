import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthMe} from "../../redux/authReducer";



class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthMe()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) =>({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps,{getAuthMe})(HeaderContainer)