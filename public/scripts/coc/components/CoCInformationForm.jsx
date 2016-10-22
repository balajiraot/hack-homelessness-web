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

const renderPwdField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <div className={touched && error ? 'has-error form-group':'form-group'}>
            <label className="control-label">{label}</label>
            <input className="form-control" {...input} placeholder={label} type={type}/>
            {touched && error && <div><span id="helpBlock2" className="help-block">{error}</span></div>}
        </div>
    )
};

const CoCInformationForm = (props) =>{
    const { error, handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <Field name="centerName" component={renderField} type="text" label="CenterName" placeholder="Center Name"/>
                </div>
                <div className="form-group">
                    <Field name="approvedOrDenied" component={renderField} type="text" label="Approved/Denied" placeholder="Approved/Denied"/>
                </div>
                <div className="form-group">
                    <Field name="reason" component={renderField} type="text" label="Reason for Approval/Denial" placeholder="Reason for Approval/Denial"/>
                </div>
                <div className="form-group">
                    <Field name="waitingPeriod" component={renderField} type="text" label="WaitingPeriod(Number of Days)" placeholder="WaitingPeriod(Number of Days)"/>
                </div>
                <div className="form-group">
                    <Field name="dependents" component={renderField} type="text" label="Number of Dependents" placeholder="Number of Dependents"/>
                </div>
                <div className="form-group">
                    <Field name="income" component={renderPwdField} type="text" label="Income" placeholder="Income"/>
                </div>

                <div className="btn-toolbar">
                    <button className="btn btn-primary" type="submit" disabled={pristine || submitting}  >Submit</button>
                    <button className="btn btn-default" type="button" disabled={pristine || submitting} onClick={reset} >Clear</button>
                </div>
            </form>
    )
};

export default reduxForm({
    form: 'cocInformation'  // a unique identifier for this form
})(CoCInformationForm)

