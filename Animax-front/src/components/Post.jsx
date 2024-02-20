import axios from "axios";
import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiSave, FiVideo } from "react-icons/fi";
import url from "../url";
const Post = () => {
  const [title, setTitle] = useState("");
  const [desc, setDescription] = useState("");
  const [videosFile, setFiles] = useState("");
  const PostVideos = async (e) => {
    e.preventDefault();
    const theTok = localStorage.getItem("token");
    try {
      const value = {
        desc,
        title,
        videosFile: videosFile[0],
      };
      const connected = {
        headers: {
          Authorization: `Bearer ${theTok}`,
          "Content-Type": "multipart/form-data",
        },
      };    
      const res = await axios.post(`${url}/video/`, value, connected);
      console.log(res);
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
    }
  };
  return (
    <div className="Post">
      <h2>Ajouter une video </h2>
      <h6> TITRE </h6>
      <form onSubmit={PostVideos}>
        <input
          type="text"
          placeholder="le titre du video"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <h6> DESCRIPTION </h6>
        <input
          type="text"
          placeholder="description de la video"
          value={desc}
          onChange={(e) => {
            setDescription(e.target.value);
          }}  
        />
        <input
          type="file"
          // name={videosFile}
          onChange={(e) => {
            setFiles(e.target.files);
            console.log(e.target.files);
          }}
          id="ajout"
          className="file"
        />
        <ul>
          <li>
            <label htmlFor="ajout">
              <FiVideo /> ajout
            </label>
          </li>
          <li>
            <FaRegTrashAlt /> supprime
          </li>
        </ul>
        <button>
          <FiSave />
        </button>
      </form>
    </div>
  );
};

export default Post;
