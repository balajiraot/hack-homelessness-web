import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from "react-router";
import {APP} from '../constants/constants'
class Hello extends React.Component{

    componentWillMount(){
        console.log("componentWillMount")
        if(!this.props.user){
            this.props.router.push(`${APP.BASE_PATH}/login`)
            this.render = ()=>{ //temp fix
                return false;
            }
        }
    }

    render() {
        const {user} = this.props;
        return (
            <div className='greeting'>
                <h1>
                    {`Hello, ${user.username}`}
                </h1>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {user:state.login.loginForm.get('user')}
}

export default withRouter(connect(mapStateToProps)(Hello));
