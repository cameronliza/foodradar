import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../actions/profile";

const Profile = ({ match }) => {
  const profiles = useSelector((state) => state.profile);
  const { loading, profile } = profiles;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile(match.params.id));
  }, [dispatch, match.params.id]);

  return <div>{loading ? <p>...loading</p> : <p>{profile.username}</p>}</div>;
};

export default Profile;
