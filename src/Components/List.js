import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
function Listcomp() {
  const customAvatarPdf = {
    backgroundColor: "#fd5b5d",
    backgroundSize: "cover",
    width: "40px",
    height: "40px",
  };
  const customAvatarmp3 = {
    backgroundColor: "blue",
    backgroundImage:
      "url('https://i.pinimg.com/originals/49/10/b0/4910b092fe9a309b6036442cf05811d4.jpg')", // Add a background image
    backgroundSize: "cover",
    width: "40px",
    height: "40px",
  };
  const customAvatarmp4 = {
    backgroundColor: "#ff7ead",
    backgroundImage: "url('your-image-url.jpg')",
    backgroundSize: "cover",
    width: "40px",
    height: "40px",
  };
  const customAvatarjepg1 = {
    backgroundImage:
      "url('https://media.gettyimages.com/id/1292575759/photo/loving-parent-and-son-spending-leisure-time-at-park.jpg?s=612x612&w=gi&k=20&c=L4_LjkQvAi2N_hlcC7CksTD6oJkACUWJOLNuRc1LHbM=')", // Add a background image
    backgroundSize: "cover",
    width: "40px",
    height: "40px",
  };
  const customAvatarjepg2 = {
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXb-lbGbd19bMmg5GbQWUjagtqipo_aEXkvAmVn1eI&s')", // Add a background image
    backgroundSize: "cover",
    width: "40px",
    height: "40px",
  };
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={customAvatarPdf}>
            <PictureAsPdfIcon />
          </Avatar>
        </ListItemAvatar>{" "}
        <ListItemText
          primary="Jadwal Meeting.pdf"
          secondary="10/06/2021"
          sx={{
            margin: "0px",
          }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={customAvatarmp3}></Avatar>
        </ListItemAvatar>

        <ListItemText
          primary="Randall- Warhan.mp3"
          secondary="10/06/2021"
          className=""
          sx={{ margin: "0px" }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={customAvatarmp4}>
            <VideoLibraryIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Work Prototype.mp4"
          secondary="10/06/2021"
          sx={{ margin: "0px" }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={customAvatarjepg1}></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Family Photo 1.jepg"
          secondary="10/06/2021"
          sx={{ margin: "0px" }}
        />
      </ListItem>
      {/* <ListItem>
        <ListItemAvatar>
          <Avatar sx={customAvatarjepg2}></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Family Photo 3.jepg"
          secondary="10/06/2021"
          sx={{ margin: "0px" }}
        />
      </ListItem> */}
    </List>
  );
}

export default Listcomp;
