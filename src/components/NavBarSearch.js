import React, { Component } from "react";
import { Navbar, FormGroup, FormControl, Button } from "react-bootstrap";

class NavBarSearch extends Component {

    constructor(){
        super()
        this.state = {
            zipCode: ""
        }
    }

    searchVenues(){
        console.log('searchVenues: '+this.state.zipCode)
    }

    updateZipcode(event){
        this.setState({
            zipCode: event.target.value
        })
    }

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
                        <FormControl onChange={this.updateZipcode.bind(this)} type="text" placeholder="Zip Code" />
                    </FormGroup>{' '}
                    <Button onClick={this.searchVenues.bind(this)}>Search</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default NavBarSearch;