import * as yup from "yup";
export const addPostSchema = yup.object({
  title: yup
    .string("Enter a title")
    .required("Title is required")
    .min(3, "Title should be of minimum 3 characters length"),
  description: yup
    .string("Enter a description")
    .min(3, "Description should be of minimum 3 characters length")
    .required("Description is required"),
});
