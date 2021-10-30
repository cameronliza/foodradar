import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../actions/user";

const AllProfiles = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { loading, users } = user;
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  const userItem = loading ? (
    <p>...loading</p>
  ) : (
    users.users.map((item, i) => <p key={i}>{item.username}</p>)
  );
  return (
    <div>
      <p>get users </p>
      {/* {loading ? <p>...loading</p> : { userItem }} */}
      {userItem}
    </div>
  );
};

export default AllProfiles;
