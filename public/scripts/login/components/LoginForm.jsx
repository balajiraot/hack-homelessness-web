import React from 'react';
import {Field,reduxForm, formValueSelector} from 'redux-form'
import { connect } from 'react-redux'

const validate= (formData) => {
  console.log('in validate : ' + formData.username)
  const errors = {};
  if(!formData.username) {
    errors.username = "Enter Username"
  }
  if(!formData.password) {
    errors.password = "Enter Password"
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

const loginForm = (props) =>{
  const {handelSubmit, resetForm, pristine, submitting} = props;
  return (
    <div className="col-md-3">
      <div >
        <div className="form-group">
          <Field name="username" component={renderField} type="text" label="UserName" placeholder="User Name"/>
        </div>
        <div className="form-group">
          <Field name="password" component={renderPwdField} type="password" label="Password" placeholder="Password"/>
        </div>

        <div className="btn-toolbar">
          <button className="btn btn-primary" type="button" disabled={pristine || submitting} onClick={handelSubmit} >Submit</button>
          <button className="btn btn-default" type="button" disabled={pristine || submitting} onClick={resetForm} >Clear</button>
        </div>
      </div>
    </div>
  )
};

const selector = formValueSelector('login')

const loginReduxForm = reduxForm({
  form:'login',
  validate
})(loginForm);

//export default loginReduxForm;

export default connect((state) => {
  var user = state.login.loginForm.get('user');
  if(!user) {
    user = {"username":"","password":""}
  }
  console.log('initialvalues : ' + JSON.stringify(user))
  return {initialValues : user}
})(loginReduxForm)

