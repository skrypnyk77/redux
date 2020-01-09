import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeFirstName, changeSecondName } from "../../store/actions";


/** Class representing a MainComponent. */
class MainComponent extends Component {
  render() {
    console.log(this.props);

    const {
      firstName,
      secondName,
      changeFirstName,
      changeSecondName
    } = this.props;

    return (
      <div>
        <h1>Inputs:</h1>
        <div>
          <input
            type="text"
            value={firstName}
            placeholder="fName"
            onChange={event => {
              changeFirstName(event.target.value);
            }}
          />
          <input
            type="text"
            value={secondName}
            placeholder="sName"
            onChange={event => {
              changeSecondName(event.target.value);
            }}
          />
        </div>
        <h1>Store:</h1>
        <div>{`${firstName} ${secondName}`}</div>
      </div>
    );
  }
}

/**
 * @function putStateToProps - Represents a function
 * @param {string} state - putting state to props
 */
const putStateToProps = state => {
  return {
    firstName: state.firstName,
    secondName: state.secondName
  };
};


/**
 * @function saveActionsToProps - Represents a function
 */
const saveActionsToProps = dispatch => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch)
  };
};

export default connect(putStateToProps, saveActionsToProps)(MainComponent);
