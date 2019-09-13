import React from 'react';
import { connect } from 'react-redux';

import { getSmurf } from '../actions';

const Smurfs = props => {
    const fetchSmurf = e => {
        e.preventDefault();
        props.getSmurf();
      };

    if(props.isFetching) {
        return <h3>Loading Player Data...</h3>
    }
    return (
        <div>
            {props.smurf.map(smurf=>(
                <h3> Name: {smurf.name}, Age: {smurf.age}, Height: {smurf.height}</h3>
            ))}
            <button onClick={fetchSmurf}>Show Smurfs!</button>
        </div>
    )
}

const mapStateToProps = state => ({
    smurf: state.smurf
})
export default connect(mapStateToProps, {getSmurf})(Smurfs);