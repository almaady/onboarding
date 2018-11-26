import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'

class ButtonOnboarding extends PureComponent{

    render(){
    return (
        <button disabled={this.props.disabled} className={`btn__onboarding ${this.props.className}`} onClick={this.props.onClick}>{this.props.text} </button>
    )
}
}


ButtonOnboarding.propTypes = {
text: PropTypes.string.isRequired,
className: PropTypes.string.isRequired,
disabled: PropTypes.bool.isRequired,
type: PropTypes.string.isRequired,
onClick: PropTypes.func.isRequired
}	

export default ButtonOnboarding