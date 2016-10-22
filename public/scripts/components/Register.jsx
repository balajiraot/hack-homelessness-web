import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from "react-router";
import {APP} from '../constants/constants'
class Register extends React.Component{

    render() {
        return (
            <div>
                <div className='greeting'>
                    <h2>
                        {`An email has been sent for verification.`}
                    </h2>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {user:state.login.loginForm.get('user')}
}


export default withRouter(connect(mapStateToProps)(Register));
