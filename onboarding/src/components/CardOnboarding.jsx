import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'

class CardOnboarding extends PureComponent{

    render(){
    return (
        <div className="title__Onboarding">
            
            {/* <div className="container__info">
                <div className="container__illustration">

                </div>
                <div className="container__input">

                </div>
            </div>
            <div className="container__button">

            </div> */}
        </div>
    )
}
}

CardOnboarding.propTypes = {
title: PropTypes.func.isRequired,
text: PropTypes.string.isRequired
}	

export default CardOnboarding