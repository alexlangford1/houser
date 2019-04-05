import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default class Wizard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick() {
        let { name, address, city, state, zip } = this.state
        axios
            .post("/api/houses", { name, address, city, state, zip })
            .then(() => {
                this.setState({
                    name: "",
                    address: "",
                    city: "",
                    state: "",
                    zip: '',
                })
            })
            .catch(err => console.log(err))
    }

    handleChange(e) {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        let { name, address, city, state, zip } = this.state
        return (
            <div className="plz-center">
                <div className="wizz">
                    <div className="add-new-header">
                        <h1>Add New Listing</h1>
                        <Link to="/" className="cancel">
                            Cancel
                        </Link>
                    </div>
                    <h3>Property Name</h3>
                    <input
                        type="text"
                        value={name}
                        name='name'
                        onChange={this.handleChange}
                    />
                    <h3>Address</h3>

                    <input
                        type="text"
                        value={address}
                        name='address'
                        onChange={this.handleChange}
                    />
                    <h3>City</h3>

                    <input
                        type="text"
                        value={city}
                        name='city'
                        onChange={this.handleChange}
                    />
                    <h3>State</h3>

                    <input
                        type="text"
                        value={state}
                        name='state'
                        onChange={this.handleChange}
                    />
                    <h3>Zip</h3>

                    <input
                        type="number"
                        value={zip}
                        name='zip'
                        onChange={this.handleChange}
                    />
                    <br/>
                    <br/>
                    <button 
                    className="cancel"
                    onClick={this.handleClick}>Next Step</button>
                </div>
            </div>
        )
    }
}
