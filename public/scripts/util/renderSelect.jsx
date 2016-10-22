import React from 'react'

export const onSelect = (event) => {
  console.log("In onSelect")
  console.log(event)
  this.setState({selectType: event.value})
}

export const renderSelect = ({ input, label, meta: { touched, error }, children })  => {
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
