
import React from 'react'
import { Field, reduxForm,SubmissionError } from 'redux-form'
import {withRouter} from "react-router";
import {APP} from '../constants'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const SubmitValidationForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting,router } = props
    const register = () =>{
        router.push(`${APP.BASE_PATH}/register`)
    }
    return (
    <form onSubmit={handleSubmit}>
        <div className="greeting">
        <Field classname= "form-group" name="username" type="text" component={renderField} label="Username"/>
        <Field classname= "form-group" name="password" type="password" component={renderField} label="Password"/>
      {error && <strong>{error}</strong>}
            </div>
        <div className="greeting btn-toolbar">
        <button className="btn btn-harbor form-group" type="submit" disabled={submitting}>Login</button>
        <button className="btn btn-default form-group" type="button" onClick={register}>Register</button>
        </div>
    </form>
  )
}

 const sampleLoginForm = reduxForm({
  form: 'submitValidation'  // a unique identifier for this form
})(SubmitValidationForm)


export default withRouter(sampleLoginForm)
