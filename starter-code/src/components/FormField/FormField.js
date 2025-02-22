import React, { Component } from 'react'
import './FormField.css'


export default class FormField extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className='FormField'>
        <div className="field">
          <label className={this.props.label}>{this.props.label}</label>
          <div className="control">
            <input className="input" type={this.props.type} placeholder={this.props.placeholder} />
          </div>
        </div>
      </div>
    )
  }
}




