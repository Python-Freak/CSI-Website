import React from "react";
import styles from "./EventCard.module.css";
import "./card.css";
import Button from "react-bootstrap/Button";

function EventCard(props) {
  return (
    <div className="card card-product">
      <div
        className="card-header card-header-image bg-white border-0"
        data-header-animation="true"
      >
        <img
          src="/assets/images/events/upcoming/sample_event.jpeg"
          className="img-fluid"
        />
      </div>
      <div className="card-body">
        <h4 className="card-title text-center">
          <a href="#" title="Toyota" className={`text-decoration-none title__`}>
            {props.eventName}
          </a>
        </h4>
        <div className="card-description text-center">{props.description}</div>
      </div>
      <div className="separator"></div>
      <div className="card-footer">
        <div className="price">
          <h4 className="p-0 m-0">{props.eventDate}</h4>
        </div>
        <div className="stats">
          <p className="card-category p-0 m-0">
            <Button className="reg-button" href={`${props.regLink}`}>
              Explore
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
