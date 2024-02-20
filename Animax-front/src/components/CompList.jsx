import React, { useEffect, useState } from "react";
import Col from "./Col";
import axios from "axios";
import url from "../url";

const CompList = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const getAllVideos = async () => {
      try {

        const { data } = await axios.get(`${url}/video`);
        await setVideo(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllVideos();
  }, []);
  return (
    <div className="lists">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          {video.map((data) => {
            console.log(data);
            return <Col {...data} key={data._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CompList;
1;
