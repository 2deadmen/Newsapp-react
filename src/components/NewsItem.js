import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,ImageUrl,Url } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={ImageUrl?ImageUrl:"https://i.pinimg.com/564x/35/10/45/35104574bc605ac325f887e64a6e9a81.jpg"}
            alt="news "
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <a href={Url}   rel="noreferrer" target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
