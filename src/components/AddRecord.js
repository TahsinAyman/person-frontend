import {React, Component} from "react";
import ReactDOM from "react-dom/client";
import config from "../config"


class AddRecord extends Component {
    constructor() {
        super();
        this.add = this.add.bind(this)
    }

    add(event) {
        event.preventDefault();
        const data = {
            "id": (event.target.id.value == "" ? null : event.target.id.value),
            "name": event.target.name.value,
            "age": event.target.age.value
        } 
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            try {
                const data = JSON.parse(this.responseText);
                const result = ReactDOM.createRoot(document.getElementById("alert-box"));
                if (data.result == true) {
                    result.render(
                        <div class="alert alert-success" role="alert">
                            {data.message}
                        </div>
                    );
                } else {
                    result.render(
                        <div class="alert alert-danger" role="alert">
                            {data.message}
                        </div>
                    );
                }
            } catch (exception) {
                const result = ReactDOM.createRoot(document.getElementById("alert-box"));
                result.render(
                    <div class="alert alert-danger" role="alert">
                        {data.message}
                    </div>
                );
            }
        }
        xhttp.open("POST", `${config.url}/person/add/`);
        console.log(JSON.stringify(data))
        xhttp.send(JSON.stringify(data));
    }

    render() {
        return (
            <form action="#" onSubmit={this.add}>
                <br />
                <br />
                <div class="form-group">
                    <label for="id">ID</label>
                    <input type="number" class="form-control" id="id" name="id" placeholder="ID" />
                </div>
                <br />
                <br />
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" required class="form-control" id="name" name="name" placeholder="Name" />
                </div>
                <br />
                <br />
                <div class="form-group">
                    <label for="age">Age</label>
                    <input type="number" required class="form-control" id="age" name="age" placeholder="Age" />
                </div>
                <br />
                <br />                
                <input type="submit" class="btn btn-success" value="Add"/>
                <br />
                <br />                
                <div id="alert-box">

                </div>
            </form>
        )
    }
}

export default AddRecord;
