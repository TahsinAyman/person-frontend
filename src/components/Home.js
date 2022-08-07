import {React, Component} from "react";
import config from "../config"
import ReactDOM from "react-dom/client";


class Home extends Component {
    constructor() {
        super();
        this.search = this.search.bind(this);
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            const data = JSON.parse(this.responseText);
            const result = ReactDOM.createRoot(document.getElementById("table"));
            result.render(
                data.map(function(i) {
                    return (
                        <tr>
                            <th scope="row">{i.id}</th>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                        </tr>
                    )
                })
            )
        }
        xhttp.open("GET", `${config.url}/person/show/`);
        xhttp.send();
    }

    search(event) {
        event.preventDefault();
        const search = event.target.search.value;
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            const data = JSON.parse(this.responseText);
            console.log(data);
            const result = ReactDOM.createRoot(document.getElementById("table"));
            result.render(
                data.map(function(i) {
                    return (
                        <tr>
                            <th scope="row">{i.id}</th>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                        </tr>
                    )
                })
            )
        }
        xhttp.open("GET", `${config.url}/person/show/query/name/${search}`)
        xhttp.send();
    }

    render() {
        return (
            <div>
                <form action="#" onSubmit={this.search}>
                    <input type="search" class="form-control" name="search" placeholder="Search"/>
                    <input type="submit" class="btn btn-primary" value="Search"/>
                    <br />
                    <br />
                </form>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody id="table">

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home;