import { Box, Button, Container } from "@mui/material";
import BlogList from "../components/BlogList";
import AddPostForm from "../components/AddPostForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Blog = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    try {
      const getPosts = async () => {
        const { data } = await axios.get("http://localhost:3003/api/posts", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setPosts(data);
      };

      getPosts();
    } catch (error) {}
  }, [token]);

  const handleLogout = async () => {
    await axios.post(`http://localhost:3003/api/auth/logout`, "", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    localStorage.setItem("token", "");
    return navigate("/signin");
  };
  return (
    <Container component="main" maxWidth="md">
      <Box display="flex">
        <AddPostForm setPosts={setPosts} />
        <Box paddingTop={10}>
          <Button variant="contained" size="large" onClick={handleLogout}>
            Log out
          </Button>
        </Box>
      </Box>
      <BlogList posts={posts} />
    </Container>
  );
};

export default Blog;
