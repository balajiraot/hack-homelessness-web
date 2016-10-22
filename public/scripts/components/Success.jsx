import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from "react-router";
import {APP} from '../constants/constants'
class Success extends React.Component{

    render() {
        const gotoInfo = () => {
            this.props.router.push(`${APP.BASE_PATH}/info`)
        }
        return (
            <div>
            <div className='greeting'>
                <h2>
                    {` Your client information has been saved successfully.Click Continue to enter more client information.`}
                </h2>
            </div>
            <div className="btn-toolbar">
            <button className="btn btn-primary" type="button" onClick={gotoInfo}  >Continue</button>
        </div>
        </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {user:state.login.loginForm.get('user')}
}

export default withRouter(connect(mapStateToProps)(Success));
