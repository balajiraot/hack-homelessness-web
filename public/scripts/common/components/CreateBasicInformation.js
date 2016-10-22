import React from 'react'
import {submitBasicInfo,resetBasicInfo} from '../basicInfoActions'
import {connect} from 'react-redux'

import BasicInformationForm from './BasicInformationForm'

class CreateBasicInfo extends React.Component {
  render() {
    return (
      <div>
        <h3>Enter User Information</h3>
        <BasicInformationForm onSubmit={this.props.onSubmitBasicInfo} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
};
const mapStateToDispatch = (dispatch) => {
  return {
    onSubmitBasicInfo:(formData)=>{
      submitBasicInfo(formData,dispatch)
    },
    onResetBasicInfo : (formData)=>{
      dispatch(resetBasicInfo(formData))
    }
  }
};

export default connect(mapStateToProps,mapStateToDispatch)(CreateBasicInfo)

