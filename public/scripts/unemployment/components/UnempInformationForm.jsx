import React from 'react';
import {Field,reduxForm, formValueSelector} from 'redux-form'
import { connect } from 'react-redux'

const renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div className={touched && error ? 'has-error form-group':'form-group'}>
            <label className="control-label">{label}</label>
            <input className="form-control" {...input} placeholder={label} type={type}/>
            {touched && error && <div><span id="helpBlock2" className="help-block">{error}</span></div>}
        </div>
    )
};


const UnempInformationForm = (props) =>{
    const { error, handleSubmit, pristine, reset, submitting } = props
    return (
        <div>
                <div className="form-group">
                    <Field name="employmentStatus" component={renderField} type="text" label="Employed/Unemployed/InSufficientIncome(E/U/I)" placeholder="Employed/Unemployed/InSufficientIncome"/>
                </div>
                <div className="form-group">
                    <Field name="income" component={renderField} type="number" label="Income" placeholder="Income"/>
                </div>
                <div className="form-group">
                    <Field name="education" component={renderField} type="text" label="Education" placeholder="Education"/>
                </div>
                <div className="form-group">
                    <Field name="degree" component={renderField} type="text" label="Degree" placeholder="Degree"/>
                </div>
                <div className="form-group">
                    <Field name="studentStatus" component={renderField} type="text" label="Student Status" placeholder="Student Status"/>
                </div>
                <div className="form-group">
                    <Field name="lastEmployedDate" component={renderField} type="date" label="LastEmployedDate" placeholder="LastEmployedDate"/>
                </div>
                <div className="form-group">
                    <Field name="numberOfDependents" component={renderField} type="number" label="NumberOfDependents" placeholder="NumberOfDependents"/>
                </div>
                <div className="form-group">
                    <Field name="headOfHouseHold" component={renderField} type="text" label="HeadOfHouseHold" placeholder="HeadOfHouseHold"/>
                </div>
                <div className="form-group">
                    <Field name="disability" component={renderField} type="text" label="Disability" placeholder="Disability"/>
                </div>
                <div className="form-group">
                    <Field name="unemploymentBenefitsClaimed" component={renderField} type="text" label="UnemploymentBenefits(Y/N)" placeholder="UnemploymentBenefits"/>
                </div>

                <div className="btn-toolbar">
                    <button className="btn btn-primary" type="submit" disabled={pristine || submitting}  >Submit</button>
                    <button className="btn btn-default" type="button" disabled={pristine || submitting} onClick={reset} >Clear</button>
                </div>
            </div>
    )
};

//export default reduxForm({
//    form: 'unempInformation'  // a unique identifier for this form
//})(UnempInformationForm)
export default UnempInformationForm;
