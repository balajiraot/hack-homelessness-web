
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
        <div className="greeting form-group">
        <Field name="username" type="text" component={renderField} label="Username"/>
            </div>
        <div className="greeting form-group">
      <Field name="password" type="password" component={renderField} label="Password"/>
      {error && <strong>{error}</strong>}
            </div>
        <div className="greeting form-group">
        <button type="submit" disabled={submitting}>Login</button>
            </div>
        <div className="greeting form-group">
        <button type="button" disabled={pristine || submitting} onClick={reset}>Register</button>
        </div>
    </form>
  )
}

export default reduxForm({
  form: 'submitValidation'  // a unique identifier for this form
})(SubmitValidationForm)