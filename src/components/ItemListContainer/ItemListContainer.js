import React from "react"

export default class ItemListContainer extends React.Component {

  render() {
    console.log(this.props)
    return (
        <div>
          <p>Este es nuestro Item: {this.props.count}</p>
        </div>
        
    )
  }
}