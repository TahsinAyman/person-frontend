import {React, Component} from "react";
import ReactDOM from "react-dom/client";
import config from "../config"

class UpdateRecord extends Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
    }

    update(event) {
        event.preventDefault();
        const updateId = event.target.updateId.value;
        const id = event.target.id.value == "" ? null : event.target.id.value;
        const name = event.target.name.value == "" ? null : event.target.name.value;
        const age = event.target.age.value == "" ? null : event.target.age.value;
        const data = {
            "id": id,
            "name": name,
            "age": age
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
        xhttp.open("PUT", `${config.url}/person/update/${updateId}`);
        xhttp.send(JSON.stringify(data));
    }

    render() {
        return (
            <div>
                <form action="#" onSubmit={this.update}>
                    <div class="form-group">
                        <br />
                        <label>Update ID</label>
                        <input type="number" required class="form-control" id="updateId" name="updateId" placeholder="Update ID (The Record to be Changed)" />
                        <br />
                        <br />
                        <hr />
                    </div>
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
                    <input type="submit" class="btn btn-primary" value="Update"/>
                </form>
                <div id="alert-box">

                </div>
            </div>
        )
    }
}

export default UpdateRecord;