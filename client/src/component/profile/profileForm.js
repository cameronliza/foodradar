import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setProfile } from "../../actions/profile";

const Profileform = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ bio: "", location: "", lifestyle: "" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setProfile(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h4>Bio</h4>
          <input
            name="bio"
            value={data.bio}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <h4>location:</h4>
          <input
            name="location"
            value={data.location}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <h4>lifestyle</h4>
          <input
            name="lifestyle"
            value={data.lifestyle}
            onChange={handleChange}
            type="text"
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Profileform;
