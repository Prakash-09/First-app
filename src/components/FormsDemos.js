import React, { Component } from 'react';
import './css/FormsDemos.css';

class FormsDemos extends Component {
    render() {
        return (
            <div>
                <form action="do_stuff.php" className="mainForm">
                    <div>Foucus Field: <input type="text" name="name" autoFocus className="focusField" /></div> <br />
                    <div>Name: <input type="text" name="name" className="nameField" /></div> <br />
                    <div>Color Box: <input type="color" name="color box" className="colorBox" /></div> <br />
                    <datalist id="cars">
                        <option value="Lexus">Lexus</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Jeep">Jeep</option>
                    </datalist>
                    <div>Cars:
                    <input type="text" name="cars" list="cars" className="lists" /></div> <br />
                    <div>Select Week: <input type="week" className="week" /></div> <br />
                    <div>select Month: <input type="month" className="month" /></div> <br />
                    <div>Email: <input type="email" name="email" className="email" /></div> <br />
                    <div>Meter: <meter min="0" max="100" value="50" className="meter" ></meter></div> <br />
                    <div>Progress: <progress id="file" value="32" max="100" className="progress" > 32% </progress></div> <br />
                    <div>Multiple Files: <input type="file" name="file" multiple className="multipleFiles" /></div> <br />
                    <div>Range: <input type="range" min="0" max="10" step="1" /></div><br />
                    <div>time: <input type="time" /></div><br />
                    <div><input type="submit" className="submitButton" /></div>
                </form>
            </div>
        );
    }
}
export default FormsDemos;