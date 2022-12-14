import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import {setAuthUserData} from "../../Redux/auth-reducer";


class HeaderComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });

    }

    render() {
        return <Header {...this.props} />
    }


}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        isAvatar: state.auth.isAvatar,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderComponent);