import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'

class TitleOnboarding extends PureComponent{

    render(){
    return (
        <div className="title__Onboarding">
            <h2>{this.props.title}</h2>
            <p>{this.props.text}</p>
        </div>
    )
}
}


TitleOnboarding.propTypes = {
title: PropTypes.string.isRequired,
text: PropTypes.string.isRequired
}	

export default TitleOnboarding