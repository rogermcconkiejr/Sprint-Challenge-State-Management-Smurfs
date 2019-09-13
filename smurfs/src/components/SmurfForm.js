import React from 'react';

import { connect } from 'react-redux';

import { postSmurf } from '../actions';

const SmurfForm = () => {

      return (
        <div>
            <div className = "formContainer">
                <input className ="nameField"
                        placeholder="name"/>
                <input className ="ageField"
                        placeholder="age"/>
                <input className="heightField"
                        placeholder="height"/>

            <button >Add Smurf</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    smurf: state.smurf
})
export default connect(mapStateToProps, {postSmurf})(SmurfForm);