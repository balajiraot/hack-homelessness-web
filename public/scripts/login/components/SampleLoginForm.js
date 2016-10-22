
import React from 'react'
import { Field, reduxForm,SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
function submit(values) {
  return sleep(1000) // simulate server latency
    .then(() => {
      if (![ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
        throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
      } else if (values.password !== 'test') {
        throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' })
      }
      return {}
    })
}

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
  const { error, handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
        <div className="greeting">
        <Field classname= "form-group" name="username" type="text" component={renderField} label="Username"/>
        <Field classname= "form-group" name="password" type="password" component={renderField} label="Password"/>
      {error && <strong>{error}</strong>}
            </div>
        <div className="greeting btn-toolbar">
        <button className="btn btn-primary form-group" type="submit" disabled={submitting}>Login</button>
        <button className="btn btn-default form-group" type="button" onClick={reset}>Register</button>
        </div>
    </form>
  )
}

export default reduxForm({
  form: 'submitValidation'  // a unique identifier for this form
})(SubmitValidationForm)