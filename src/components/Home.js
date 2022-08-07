import {React, Component} from "react";
import icon from "./static/icon.png"

class Home extends Component {
    render() {
        return (
            <div>
                <div class="col">
                    <img class="img-responsive center-block d-block mx-auto" src={icon}/>
                </div>
                <p>
                This is a Sample CRUD Exaple using Flask as a Backend and React.JS Application in Frontend.
                <br />
                The Source Code Can be Found at Github:  
                <br /> 
                <a href="https://github.com/TahsinAyman/person-frontend.git">Frontend</a>
                <br />
                <a href="https://github.com/TahsinAyman/personBackend.git">Backend</a>
                <br />
                The Steps Of Running this Whole Application will be at both README.md
                <br />
                Make Sure to Run The Backend and then The Frontend
                <br />
                The Database Used in Backend is SQLITE Database For Tests.
                <br />
                If you are a Programmer You Can change in the Backend Source Code and Change the SQLITE to MYSQL OR POSTGRESQL.
                </p>
            </div>
        )
    }
}

export default Home;
