import React from 'react';
import {connect} from 'react-redux'
class RootComponent extends React.Component{

    render(){
        const {children} = this.props
        return (
            <div>
              <div id="nav-bar" className="gray-bar">
                <img className="center-block img-responsive" src="assets/app-logo.png" alt="Harbor" width="200px" height="65px"></img>
              </div>
              <div id="logo" className="green-bar">
              </div>
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
