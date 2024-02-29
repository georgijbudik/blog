import * as React from "react";
import List from "@mui/material/List";

import BlogItem from "./BlogItem";

const BlogList = ({ posts }) => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => {
          return <BlogItem key={post.id} post={post} />;
        })}
    </List>
  );
};

export default BlogList;
