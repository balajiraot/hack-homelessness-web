import React from 'react'
import {submitOrgInfo,resetOrgInfo} from '../orgInfoActions'
import {connect} from 'react-redux'
import OrganizationForm from './OrganizationForm'

class CreateOrgInfo extends React.Component {
  render() {

    const onSubmit = (orgData)=>{
      const formData = Object.assign({},orgData,this.props.basicInfo)
      this.props.onSubmitOrgInfo(formData)
    }

    return (
      <div>
        <h3>Enter Organization Information</h3>
        <OrganizationForm onSubmit={onSubmit.bind(this)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  var basicInfo = state.basicInfo.basicInformationForm;
  console.log("in createorg basicinfo : "+ JSON.stringify(basicInfo))
  var basicInfo = basicInfo.toJSON().basicInfo
  return {basicInfo}
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

