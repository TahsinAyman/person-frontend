import {React, Component} from "react";
import ReactDOM from "react-dom/client";
import config from "../config"


class DeleteRecord extends Component {
    constructor() {
        super();
        this.delete = this.delete.bind(this);
    }

    delete(event) {
        event.preventDefault();
        const data = {
            "id": event.target.id.value
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
        xhttp.open("DELETE", `${config.url}/person/delete/`)
        xhttp.send(JSON.stringify(data));
    }

    render() {
        return (
            <div>
                <form action="#" onSubmit={this.delete}>
                    <div class="form-group">
                        <label for="id">ID</label>
                        <input type="number" required class="form-control" id="id" name="id" placeholder="ID" />
                    </div>
                    <br />
                    <br />
                    <input type="submit" class="btn btn-danger" value="Delete"/>
                </form>
                <div id="alert-box">

                </div>
            </div>
        )
    }
}

export default DeleteRecord;