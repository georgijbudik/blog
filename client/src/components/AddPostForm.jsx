import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Title from "../components/Title";
import { useFormik } from "formik";
import { addPostSchema } from "../validationSchemas/addPostSchema";
import axios from "axios";

const initialValues = {
  title: "",
  description: "",
};

const AddPostForm = ({ setPosts }) => {
  const token = localStorage.getItem("token");
  const formik = useFormik({
    initialValues,
    validationSchema: addPostSchema,
    onSubmit: async ({ title, description }) => {
      try {
        const response = await axios.post(
          `http://localhost:3003/api/posts/add`,
          {
            title,
            description,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        const newPost = response.data;

        setPosts((prevPosts) => [newPost, ...prevPosts]);
      } catch (error) {
        console.error("Error adding post:", error);
      }
    },
  });

  const { touched, errors } = formik;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <Title title={"Add your post"} />
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            fullWidth
            id="title"
            label="Post title"
            name="title"
            autoComplete="title"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.title}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
          />
          <TextField
            margin="normal"
            fullWidth
            name="description"
            label="Post description"
            id="description"
            autoComplete="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description && errors.description}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddPostForm;
