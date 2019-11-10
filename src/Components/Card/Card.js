import React from "react";
import "./Card.css";

const Card = props => {
  const { id, name, email } = props;
  return (
    <article className=" br4 ba  bg-light-green grow b--black-10 mv4 dib  w-50-m w-25-l ">
      <div className="tc">
        <img
          src={`https://robohash.org/${id}.png?200x200`}
          className="db br2 br--top center"
          alt=""
        />
        <h1 className="f4">{name}</h1>
        <hr className="mw3 bb bw1 b--black-10" />{" "}
      </div>
      <div className="tc">
        <p className="lh-copy measure center f6 black-70">{email}</p>
      </div>
    </article>
  );
};

export default Card;
