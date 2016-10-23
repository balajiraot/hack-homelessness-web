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


const MedicalInformationForm = (props) =>{
    const { error, handleSubmit, pristine, reset, submitting } = props
    return (
       <div>
                <div className="form-group">
                    <Field name="insurance" component={renderField} type="text" label="Insurance" placeholder="Insurance"/>
                </div>
                <div className="form-group">
                    <Field name="medicare" component={renderField} type="text" label="Medicare" placeholder="Medicare"/>
                </div>
                <div className="form-group">
                    <Field name="mentalIllness" component={renderField} type="text" label="MentalIllness" placeholder="MentalIllness"/>
                </div>
                <div className="form-group">
                    <Field name="chronicIllness" component={renderField} type="text" label="ChronicIllness" placeholder="ChronicIllness"/>
                </div>
                <div className="form-group">
                    <Field name="lengthOfStay" component={renderField} type="text" label="LengthOfStay" placeholder="LengthOfStay"/>
                </div>
                <div className="form-group">
                    <Field name="pregnancyStatus" component={renderField} type="text" label="PregnancyStatus" placeholder="PregnancyStatus"/>
                </div>
                <div className="form-group">
                    <Field name="dueDate" component={renderField} type="date" label="DueDate" placeholder="DueDate"/>
                </div>


                <div className="btn-toolbar">
                    <button className="btn btn-harbor" type="submit" disabled={pristine || submitting}  >Submit</button>
                    <button className="btn btn-default" type="button" disabled={pristine || submitting} onClick={reset} >Clear</button>
                </div>
           </div>
    )
};

//export default reduxForm({
//    form: 'medicalInformation'  // a unique identifier for this form
//})(MedicalInformationForm)

export default MedicalInformationForm;
