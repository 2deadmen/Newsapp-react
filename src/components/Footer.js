import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className='container text-dark' ><div className="card bg-dark text-dark ">
      <img className="card-img" style={{height:"300px"}} src="https://i.pinimg.com/736x/f7/13/6e/f7136eed02b82131cbb2324f18f36462.jpg" alt="News"/>
      <div className="card-img-overlay">
        <h5 className="card-title">powered by react</h5>
        <p className="card-text">This is a News application made using react and populated by using NewsApi</p>
        <p className="card-text">made by Kartik Hegde</p>
      </div>
    </div></div>
    )
    }}

export default Footer
