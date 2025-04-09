import * as yup from "yup";

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const newAccountSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(PASSWORD_REGEX, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    })
    .required("Required"),
});

export const addUserSchema = yup.object().shape({
  name: yup.string().required("Required"),
  userId: yup.string().required("Required"),
  type: yup.string().required("Required"),
});

export const addHotlineSchema = yup.object().shape({
  nickname: yup.string().required("Required"),
  contactNumber: yup.string().required("Required"),
  hotlineType: yup.string().required("Required"),
  city: yup.string().required("Required"),
  barangay: yup.string().required("Required"),
});
