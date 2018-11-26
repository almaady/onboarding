import React, { PureComponent} from 'react';

import PropTypes from 'prop-types'

class ProgressBarV2 extends PureComponent {
  render() {
    return (
      <div className="container__progressBar">
          <div className={`progressv2 p_${this.props.Progress}`}>
          </div>
          <img className={`progressv2__rocket r_${this.props.ProgressRocket}`} alt="" src="http://www.pngmart.com/files/6/Rocket-PNG-File.png" />
          <div className={`progressbarv2 b_${this.props.ProgressBar}`}>
          </div>
          {/* <svg
                    cacheGetRequests={true}
                    src="https://s3.amazonaws.com/pulsarup/Top+Bar+Rocket.svg"
                    className={`progress__Rocket`}
          /> */}
      </div>
    );
  }
}

ProgressBarV2.propTypes = {
    Progress: PropTypes.string.isRequired,
    ProgressRocket: PropTypes.string.isRequired,
    ProgressBar: PropTypes.string.isRequired

}

export default ProgressBarV2;
