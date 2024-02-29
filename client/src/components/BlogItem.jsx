import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { deepOrange } from "@mui/material/colors";

const BlogItem = ({ post }) => {
  return (
    <>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>
            {post.userFirstName[0]}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={post.title}
          secondary={
            <>
              <Typography
                sx={{ display: "inline", marginRight: 4 }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {post.userFirstName} {post.userLastName}
              </Typography>
              {post.description}
            </>
          }
        />
        <Typography>{post.date}</Typography>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default BlogItem;
