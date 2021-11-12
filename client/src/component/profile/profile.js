import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../actions/profile";

//mui
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import RoomIcon from "@mui/icons-material/Room";
import Chip from "@mui/material/Chip";
import { CatchingPokemonOutlined } from "@mui/icons-material";
import Tab from "./tabs";

const Item = styled(Link)(({ theme }) => ({
  ...theme.typography.body1,
  ...theme.components.MuiLink,
  marginRight: "32px",
  display: "inline-flex",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  textDecoration: "none",
}));
const Chips = styled(Chip)(({ theme }) => ({
  margin: " 0 4px 16px",
  // backgroundColor: "pink",
}));

const Profile = ({ match }) => {
  const profiles = useSelector((state) => state.profile);
  const { loading, profile } = profiles;
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    console.log(match.params.id);
    dispatch(getProfile(match.params.id));
  }, [dispatch, match.params.id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const lifestyles = loading ? (
    <p>...loading</p>
  ) : (
    profile.lifestyle.map((item, i) => <Chips label={item} />)
  );
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "1rem" }}>
        {loading ? (
          <p>...loading</p>
        ) : (
          <Grid container spacing={1}>
            <Grid item sm={3}>
              <Avatar
                src={profile.user.avatar}
                sx={{ width: 140, height: 140 }}
              />
            </Grid>
            <Grid item sm={9}>
              <Typography variant="h4">{profile.user.username}</Typography>
              <div>
                <Item href="#">
                  <span style={{ fontWeight: 500 }}>
                    {profile.following > 0 ? <> {profile.following} </> : 123}{" "}
                    &nbsp;
                  </span>
                  following
                </Item>
                <Item href="#">
                  <span style={{ fontWeight: 500 }}>
                    {profile.follower > 0 ? <> {profile.follower} </> : 24}
                    &nbsp;
                  </span>
                  following
                </Item>
              </div>
              <div style={{ display: "flex" }}>{lifestyles}</div>
              <Button variant="contained" disableElevation>
                Follow
              </Button>
            </Grid>
          </Grid>
        )}
      </Box>
      <Tab />
    </>
  );
};

export default Profile;
