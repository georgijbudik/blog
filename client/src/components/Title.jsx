import { Typography } from "@mui/material";

const Title = ({ title }) => {
  return (
    <Typography
      variant="h4"
      component="h2"
      textAlign="center"
      mb={2}
      fontWeight="600"
    >
      {title}
    </Typography>
  );
};

export default Title;
