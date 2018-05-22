import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar, FormGroup, FormControl, Button } from "react-bootstrap"
import { Route, RouteHandler, Link } from 'react-router'; 

class NavBarSearch extends Component {

    render() {
        return (
            <div>
                <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#home">react-google-map-foursquare</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl type="text" placeholder="Search" />
                    </FormGroup>{' '}
                    <Button type="submit">Submit</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default NavBarSearch;