import React from 'react'
import {submitLogin,resetLogin} from '../loginActions'
import {connect} from 'react-redux'

import SampleLoginForm from './SampleLoginForm'

class CreateLogin extends React.Component {
  render() {
    return (
      <div>
        <div class="wrapper col-md-3">
          <img class="img-responsive" src=""/>
        </div>
        <div className="greeting">
            <h3>Welcome</h3>
        </div>
        <SampleLoginForm onSubmit={this.props.onSubmitLogin} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
};
const mapStateToDispatch = (dispatch) => {
  return {
    onSubmitLogin:(formData)=>{
      submitLogin(formData,dispatch)
    },
    onResetLogin : (formData)=>{
      dispatch(resetLogin(formData))
    }
  }
};

export default connect(mapStateToProps,mapStateToDispatch)(CreateLogin)

