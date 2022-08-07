import {React, Component} from "react";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Home from "./Home"
import UrlError from "./UrlError"
import AddRecord from "./AddRecord";
import DeleteRecord from "./DeleteRecord";
import UpdateRecord from "./UpdateRecord"


class Routing extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/add/" element={<AddRecord />} />
                    <Route path="/delete/" element={<DeleteRecord />} />
                    <Route path="/update/" element={<UpdateRecord />} />
                    <Route path="/*" element={<UrlError />} />
                </Routes>
            </Router>
        )
    }
}

export default Routing;