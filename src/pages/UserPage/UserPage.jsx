import { Field, Formik, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import {
  Container,
  InputBox,
  ImageBox,
  FormBox,
  Label,
  Input,
  ButtonForm,
  ImageInputBox,
} from "../UserPage/UserPage.styled";

const emailRegExp =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

const phoneRegExp = /^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/;

const schema = Yup.object().shape({
  avatar: Yup.mixed()
    .required("Please, add your avatar")
    .test("fileSize", "File is too large", (value) => value.size <= 2000000),
  name: Yup.string(),
  email: Yup.string()
    .required("Required")
    .matches(emailRegExp, "Invalid email address"),
  birthday: Yup.date()
    .required("Enter a date of birth")
    .min(new Date(1900, 0, 1))
    // .transform((value) => {
    //   return value ? moment(value).toDate() : value;
    // })
    .max(new Date(), "You can't be born in the future!"),
  phone: Yup.string().matches(phoneRegExp, "Invalid phone number"),
  city: Yup.string().email("Invalid email address").required("Required"),
});

function UserPage() {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (values, actions) => {
    setAvatar(values.avatar);
    setName(values.name);
    setEmail(values.email);
    setBirthday(values.birthday);
    setPhone(values.phone);
    setCity(values.city);
    console.log(values);
    console.log(actions);
  };

  // const { name, email, birthday, phone, city } = initialValues;

  return (
    <Container>
      <Formik
        initialValues={{ name, email, birthday, phone, city, avatar }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormBox>
          <ImageInputBox>
            <ImageBox></ImageBox>

            {/* <InputBox> */}
            <label htmlFor="avatar">Edit photo</label>
            <Field
              style={{ display: "none" }}
              type="file"
              id="avatar"
              name="avatar"
            />
            <ErrorMessage
              name="avatar"
              component="div"
              style={{ color: "red", fontSize: 14 }}
            />
            {/* </InputBox> */}
          </ImageInputBox>
          <InputBox>
            <Label htmlFor="name">Name:</Label>
            <Input id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </InputBox>
          <InputBox>
            <Label htmlFor="email">Email:</Label>
            <Input id="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red", fontSize: 12 }}
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="birthday">Birthday:</Label>
            <Input
              // type="date"
              id="birthday"
              name="birthday"
            />
            <ErrorMessage
              name="birthday"
              component="div"
              style={{ color: "red", fontSize: 12 }}
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="phone">Phone:</Label>
            <Input id="phone" name="phone" />
            <ErrorMessage
              name="phone"
              component="div"
              style={{ color: "red", fontSize: 12 }}
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="city">City:</Label>
            <Input id="city" name="city" />
            <ErrorMessage
              name="city"
              component="div"
              style={{ color: "red", fontSize: 12 }}
            />
          </InputBox>
          <ButtonForm type="submit">Save</ButtonForm>

          <p>Log Out</p>
        </FormBox>
      </Formik>
    </Container>
  );
}

export default UserPage;
