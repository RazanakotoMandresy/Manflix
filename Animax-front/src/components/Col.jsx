import React from "react";
import { FiEye, FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import url from "../url";
const Col = ({ title, like, desc, Views, disLike, VideoOriginalName , videosPath }) => {
  return (
    <div className="colonnes">
      <h2> TITRES: {title} </h2>
      <h3>{desc}</h3>
      <video src={`${url}/${videosPath}.mp4`} alt={VideoOriginalName} />
      <ul>
        <li>
          <button>
            <FiThumbsUp />
            {like}
          </button>
          <button>
            <FiThumbsDown />
            {disLike}
          </button>
        </li>
        <li>
          <p>
            <FiEye />
            {Views}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Col;
