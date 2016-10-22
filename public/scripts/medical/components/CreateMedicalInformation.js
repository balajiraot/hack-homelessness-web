import React from 'react'
import {submitMedicalInfo,resetMedicalInfo} from '../medicalInfoActions'
import {connect} from 'react-redux'

import MedicalInformationForm from './MedicalInformationForm'

class CreateMedicalInfo extends React.Component {
  render() {
    return (
      <div>
        <h3>Enter Medical/Health Information</h3>
        <MedicalInformationForm onSubmit={this.props.onSubmitMedicalInfo} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
};
const mapStateToDispatch = (dispatch) => {
  return {
    onSubmitMedicalInfo:(formData)=>{
      submitMedicalInfo(formData,dispatch)
    },
    onResetMedicalInfo : (formData)=>{
      dispatch(resetMedicalInfo(formData))
    }
  }
};

export default connect(mapStateToProps,mapStateToDispatch)(CreateMedicalInfo)

