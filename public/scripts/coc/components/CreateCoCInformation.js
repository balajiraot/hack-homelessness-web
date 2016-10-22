import React from 'react'
import {submitCoCInfo,resetCoCInfo} from '../cocInfoActions'
import {connect} from 'react-redux'

import CoCInformationForm from './CoCInformationForm'

class CreateCoCInfo extends React.Component {
  render() {
    return (
      <div>
        <h3>Enter Center Information</h3>
        <CoCInformationForm onSubmit={this.props.onSubmitCoCInfo} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
};
const mapStateToDispatch = (dispatch) => {
  return {
    onSubmitCoCInfo:(formData)=>{
      submitCoCInfo(formData,dispatch)
    },
    onResetCoCInfo : (formData)=>{
      dispatch(resetCoCInfo(formData))
    }
  }
};

export default connect(mapStateToProps,mapStateToDispatch)(CreateCoCInfo)

