import React, { PureComponent} from 'react';

import PropTypes from 'prop-types'

class ProgressBar extends PureComponent {
  render() {
    return (
      <div className="container__progressBarV1">
        <div className={`progressBar progress__${this.props.Progress}`}>
          <div className={`progressBar__Rocket rocket_${this.props.ProgressRocket}`}>
            <img alt="" src="http://www.pngmart.com/files/6/Rocket-PNG-File.png" />
            {/* <svg
                      cacheGetRequests={true}
                      src="https://s3.amazonaws.com/pulsarup/Top+Bar+Rocket.svg"
                      className={`progress__Rocket`}
                    /> */}
          </div>
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
    Progress: PropTypes.string.isRequired,
    ProgressRocket: PropTypes.string.isRequired

}

export default ProgressBar;
