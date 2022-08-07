import { React, Component } from "react";

class Header extends Component {
    render() {
        return (    
            <header class="p-3 bg-dark text-white">
                <div class="container">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/" class="nav-link px-2 text-secondary">All Records</a></li>                            
                            <li><a href="/add/" class="nav-link px-2 text-white">Add</a></li>
                            <li><a href="/delete/" class="nav-link px-2 text-white">Delete</a></li>
                            <li><a href="/update/" class="nav-link px-2 text-white">Update</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;