import React from 'react';
import {connect} from 'react-redux'
class RootComponent extends React.Component{

    render(){
        const {children} = this.props
        return (
            <div>
            {children}
            </div>
        )
    }
}

RootComponent.displayName = 'RootComponent';

const mapStateToProps = (state)=>{
    return {user:state.login.loginForm.get('user')}
}

export default connect(mapStateToProps)(RootComponent);