import React from 'react';
import {Field,reduxForm, formValueSelector} from 'redux-form'
import { connect } from 'react-redux'
import CoCInformationForm from '../../coc/components/CoCInformationForm'
import UnempInformationForm from '../../unemployment/components/CreateUnempInformation'
import MedicalInformationForm from '../../medical/components/CreateMedicalInformation'
import { renderSelect, onSelect } from '../../util/renderSelect'

class OrganizationForm extends React.Component {
  constructor(props){
    super(props)
    this.state={selectType:undefined}
  }


  render() {
    const {error,organization, handleSubmit, pristine, reset, submitting} = this.props

    const handleFormSubmit = (formData) => {
        //console.log("in form submit : " + JSON.stringify(formData))
        console.log("select type : " + this.state.selectType)
      let resultsUnemp = this.refs.unempInformationForm.submit();
      let newformData = Object.assign(resultsUnemp);
        console.log("in form submit after assign  : " + newformData)
    }

    const getComponent = (value)=> {
      switch (value) {
        case "Unemployment":
          return <UnempInformationForm ref="unempInformationForm"/>
        case "Continuum of Care":
          return <CoCInformationForm ref="cocInformationForm"/>
        case "Medical":
          return <MedicalInformationForm ref="medicalInformationForm"/>
        default:
          return null;
      }
    }
    return (
      <div className="col-md-3">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Field name="organization" component={renderSelect} onChange={onSelect.bind(this)} label="Organization">
                    <option value="N/A">-Select Organization-</option>
                    <option value="Unemployment">Unemployment</option>
                    <option value="Medical">Medical</option>
                    <option value="FinancialServices">FinancialServices</option>
                    <option value="UtilityCompanies">UtilityCompanies</option>
                    <option value="Continuum of Care">Continuum of Care</option>
                </Field>
            </div>
            <div className="form-group">
              {getComponent(organization)}
            </div>
        </form>
      </div>
    )
  }
}

const orgReduxForm = reduxForm({
    form: 'organizationInformation'  // a unique identifier for this form
})(OrganizationForm)

const selector = formValueSelector('organizationInformation')

function mapStateToProps(state) {
  const organization = selector(state,'organization')
  return {organization}
}

export default connect(mapStateToProps)(orgReduxForm)
