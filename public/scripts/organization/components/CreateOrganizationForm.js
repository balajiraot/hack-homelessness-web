import React from 'react'
import {submitUnempInfo,resetUnempInfo} from '../orgInfoActions'
import {connect} from 'react-redux'

import UnempInformationForm from './OrganizationForm'

class CreateUnempInfo extends React.Component {
  render() {
    return (
      <div>
        <h3>Enter Unemployment Information</h3>
        <UnempInformationForm onSubmit={this.props.onSubmitUnempInfo} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
};
const mapStateToDispatch = (dispatch) => {
  return {
    onSubmitUnempInfo:(formData)=>{
      submitUnempInfo(formData,dispatch)
    },
    onResetUnempInfo : (formData)=>{
      dispatch(resetUnempInfo(formData))
    }
  }
};

export default connect(mapStateToProps,mapStateToDispatch)(CreateUnempInfo)

