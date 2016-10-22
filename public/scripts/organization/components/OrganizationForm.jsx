import React from 'react';
import {Field,reduxForm, formValueSelector} from 'redux-form'
import { connect } from 'react-redux'
import CoCInformationForm from '../../coc/components/CoCInformationForm.jsx'
import UnempInformationForm from '../../unemployment/components/CreateUnempInformation.jsx'

const renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div className={touched && error ? 'has-error form-group':'form-group'}>
            <label className="control-label">{label}</label>
            <input className="form-control" {...input} placeholder={label} type={type}/>
            {touched && error && <div><span id="helpBlock2" className="help-block">{error}</span></div>}
        </div>
    )
};

const renderSelect = ({ input, label, meta: { touched, error }, children })  => {
    return (
        <div className={touched && error ? 'has-error form-group':'form-group'}>
            <label className="control-label">{label}</label>
            <select className="form-control" {...input}>
                {children}
            </select>
            {touched && error && <div><span id="helpBlock2" className="help-block">{error}</span></div>}
        </div>
    )
};


const OrganizationForm = (props) =>{
    const { error, handleSubmit, pristine, reset, submitting } = props

    const onSelect = (event) => {
        this.setState({selectType:event.value})
    }

    const getComponent =(value)=>{
        switch(value){
            case "Unemployment":
                return <UnempInformationForm/>
            case "Continuum of Care":
                return <CoCInformationForm/>
            default:
                return null;
        }
    }
    return (
        <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <Field name="organization" component={renderSelect} onChange={onSelect.bind(this)} label="Organization">
                        <option value="N/A">-Select Organization-</option>
                        <option value="Unemployment">Unemployment</option>
                        <option value="Medical">Medical</option>
                        <option value="FinancialServices">FinancialServices</option>
                        <option value="UtilityCompanies">TD-Technology Development</option>
                        <option value="Continuum of Care">PRDTST-PRODUCTION TESTING</option>
                    </Field>
                </div>
                <div className="form-group">
                    {getComponent(this.state.value)}
                </div>

            </form>
    )
};

export default reduxForm({
    form: 'organizationInformation'  // a unique identifier for this form
})(OrganizationForm)

