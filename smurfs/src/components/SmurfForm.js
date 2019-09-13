import React, {useState} from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../actions';

const SmurfForm = props => {
    const postNewSmurf = e => {
        e.preventDefault();
        props.postSmurf();
      };

    const [newSmurf, setNewSmurf] = useState({ Name: "", Age: "", Height: ""});
    const changeHandler = event => {
        console.log(event.target.value);
        setNewSmurf({...newSmurf, [event.target.name]: event.target.value});
        console.log(newSmurf);
    }
    // const submitForm = event => {
    //     event.preventDefault();
    //     const addNewSmurf = {
    //         ...newSmurf,
    //         id: Date.now()
    //     };
    //     const addNewMember = (props.smurf) => {
    //         setMembers([...members, member]);
    //       }
    //     addNewMember(addNewSmurf);
    //     setMember({name:"", age: "", height:""});
    // };
      return (
        <div>
            <div className = "formContainer">
            <form>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                name="name"
                placeholder="name"
                value={newSmurf.name}
                onChange={changeHandler}
                />
                <h1>{newSmurf.name}</h1>
                <label htmlFor="age">Age</label>
                <input
                type="text"
                name="age"
                placeholder="age"
                value={newSmurf.age}
                onChange={changeHandler}
                />
                <h1>{newSmurf.age}</h1>
                <label htmlFor="height">Height</label>
                <input
                type="text"
                name="height"
                placeholder="height"
                value={newSmurf.height}
                onChange={changeHandler}
                />
                <h1>{newSmurf.height}</h1>
            <button type="submit">Add Smurfs</button>
            </form>
            {/* <input className = "itemField"/>
            <button onClick ={() => dispatch({ type: 'ADD_TODO', payload: `${document.querySelector('input').value}`})}>Add Smurf</button> */}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    smurf: state.smurf
})
export default connect(mapStateToProps, {postSmurf})(SmurfForm);