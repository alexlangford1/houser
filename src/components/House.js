import React, { Component } from "react"

export default class House extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="one-house">
                <h3>{this.props.name}</h3>
                <p>
                    {this.props.address}<br/>
                    {`${this.props.city}
                    ${this.props.state}`}<br/>
                    {this.props.zip}
                </p>
            </div>
        )
    }
}
