import React, { PureComponent } from 'react'
// import ErrorP from '../utils/error_p';
import PropTypes from 'prop-types'


class InputLogin extends PureComponent{


	render(){
        return (
        <div className="">
            <div className={`input__onboarding ${this.props.className}`}>
              <input autoComplete="off" name={this.props.name}  type={this.props.type} placeholder={this.props.placeholder} className={this.props.error_class}  onChange={this.props.onChange} onBlur={this.props.onBlur}/>
            </div>
            {/* {
              this.props.show_error ? 
              <ErrorP  size='normal'   text={this.props.error_message}/>
              : null
            } */}
        </div>
		)
	}
}


InputLogin.propTypes = {
    // text: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    // type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    error_message: PropTypes.string.isRequired,
    show_error: PropTypes.bool.isRequired,
    error_class: PropTypes.string.isRequired
}

export default InputLogin 