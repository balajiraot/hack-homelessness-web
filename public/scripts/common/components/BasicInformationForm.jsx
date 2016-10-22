import React from 'react';
import {Field,reduxForm, formValueSelector} from 'redux-form'
import { connect } from 'react-redux'

const validate= (formData) => {
    console.log('in validate : ' + formData.username)
    const errors = {};
    if(!formData.firstName) {
        errors.firstName = "Enter FirstName"
    }
    if(!formData.lastName) {
        errors.lastName = "Enter LastName"
    }
    if(!formData.addressLine1) {
        errors.addressLine1 = "Enter AddressLine 1"
    }
    if(!formData.city) {
        errors.city = "Enter City"
    }
    if(!formData.state) {
        errors.state = "Enter State"
    }
    if(!formData.country) {
        errors.country = "Enter Country"
    }
    if(!formData.countryOfOrigin) {
        errors.countryOfOrigin = "Enter CountryOfOrigin"
    }
    if(!formData.ssn) {
        errors.ssn = "Enter SSN"
    }
    return errors;
};

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

const BasicInformationForm = (props) =>{
    const { error, handleSubmit, pristine, reset, submitting } = props
    return (
      <div className="col-md-3">
        <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <Field name="firstName" component={renderField} type="text" label="FirstName" placeholder="First Name"/>
                </div>
                <div className="form-group">
                    <Field name="middleName" component={renderField} type="text" label="MiddleName" placeholder="Middle Name"/>
                </div>
                <div className="form-group">
                    <Field name="lastName" component={renderField} type="text" label="lastName" placeholder="Last Name"/>
                </div>
                <div className="form-group">
                    <Field name="gender" component={renderField} type="text" label="Gender(M/F/U)" placeholder="Gender"/>
                </div>
                <div className="form-group">
                    <Field name="ethnicity" component={renderField} type="text" label="Ethnicity" placeholder="Ethnicity"/>
                </div>
                <div className="form-group">
                    <Field name="ssn" component={renderPwdField} type="password" label="SSN" placeholder="SSN"/>
                </div>
                <div className="form-group">
                    <Field name="dob" component={renderField} type="text" label="DateOfBirth" placeholder="DateOfBirth"/>
                </div>
                <div className="form-group">
                    <Field name="addressLine1" component={renderField} type="text" label="Address Line 1" placeholder="Address Line 1"/>
                </div>
                <div className="form-group">
                    <Field name="addressLine2" component={renderField} type="text" label="Address Line 2" placeholder="Address Line 2"/>
                </div>
                <div className="form-group">
                    <Field name="city" component={renderField} type="text" label="City" placeholder="City"/>
                </div>
                <div className="form-group">
                    <Field name="state" component={renderField} type="text" label="State" placeholder="State"/>
                </div>
                <div className="form-group">
                    <Field name="country" component={renderField} type="text" label="Country" placeholder="Country"/>
                </div>
                <div className="form-group">
                    <Field name="countryOfOrigin" component={renderField} type="text" label="CountryOfOrigin" placeholder="CountryOfOrigin"/>
                </div>
                <div className="form-group">
                    <Field name="email" component={renderField} type="text" label="Email" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <Field name="phoneNumber" component={renderField} type="text" label="PhoneNumber" placeholder="PhoneNumber"/>
                </div>
                <div className="form-group">
                    <Field name="citizenshipStatus" component={renderField} type="text" label="CitizenshipStatus" placeholder="CitizenshipStatus"/>
                </div>

                <div className="btn-toolbar">
                    <button className="btn btn-primary" type="submit" disabled={pristine || submitting}  >Next</button>
                    <button className="btn btn-default" type="button" disabled={pristine || submitting} onClick={reset} >Clear</button>
                </div>
            </form>
        </div>
    )
};

export default reduxForm({
    form: 'basicInformation'  // a unique identifier for this form
})(BasicInformationForm)

//const basicInformationReduxForm = reduxForm({
//    form:'basicInformation',
//    validate
//})(BasicInformationForm);
//
////export default basicInformationReduxForm;
//
//export default connect((state) => {
//    var basicInfo = state.basicInfo.BasicInformationForm.get('basicInfo');
//    if(!basicInfo) {
//        basicInfo = {"infoname":"","password":""}//todo initialize
//    }
//    console.log('initialvalues : ' + JSON.stringify(basicInfo))
//    return {initialValues : basicInfo}
//})(basicInformationReduxForm)
//
