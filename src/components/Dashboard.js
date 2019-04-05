import React, { Component } from "react"
import { Link } from "react-router-dom"
import House from "./House"
import axios from "axios"

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            houses: [],
        }
    }

    handleClick = (e) => {
        axios.delete(`/api/houses/${e}`).then(() => {
            axios.get("/api/houses").then((res) => {
                this.setState({
                    houses: res.data,
                })
            })
        })
    }

    componentDidMount() {
        axios.get("/api/houses").then((res) => {
            this.setState({
                houses: res.data,
            })
        })
    }

    render() {
        const { houses } = this.state
        let newHouse = houses.map((e) => {
            return (
                <div key={e.id} className='house'>
                    <House
                        key={e.id}
                        name={e.name}
                        address={e.address}
                        city={e.city}
                        state={e.state}
                        zip={e.zip}
                    />
                    <button 
                    className='button'
                    onClick={() => this.handleClick(e.id)}>
                        <img
                            src="https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/delete_button.png"
                            alt=""
                        />
                    </button>
                </div>
            )
        })
        return (
            <div className="center_dash">
                <div className="dashboard">
                    <div className="dashheader">
                        <h1>Dashboard</h1>
                        <Link to="/wizard" className="add_new">
                            Add New Property
                        </Link>
                    </div>
                    <div className="house-list">{newHouse}</div>
                </div>
            </div>
        )
    }
}
