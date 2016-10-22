import React from 'react'
import {submitOrgInfo,resetOrgInfo} from '../orgInfoActions'
import {connect} from 'react-redux'
import OrganizationForm from './OrganizationForm'

class CreateOrgInfo extends React.Component {
  render() {
    return (
      <div>
        <h3>Enter Organization Information</h3>
        <OrganizationForm onSubmit={this.props.onSubmitOrgInfo} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
};
const mapStateToDispatch = (dispatch) => {
  return {
    onSubmitOrgInfo:(formData)=>{
      submitOrgInfo(formData,dispatch)
    },
    onResetOrgInfo : (formData)=>{
      dispatch(resetOrgInfo(formData))
    }
  }
};

export default connect(mapStateToProps,mapStateToDispatch)(CreateOrgInfo)

