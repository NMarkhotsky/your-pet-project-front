import { Field, Formik, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { Icon } from '../Icon/Icon';
import {
  ContainerForm,
  FormTitle,
  InputBox,
  ImageBox,
  FormBox,
  Label,
  Input,
  ButtonForm,
  ImageInputBox,
  LogoutBox,
  EditIcon,
} from './UserPageForm.styled';

const emailRegExp =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

const phoneRegExp = /^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/;

const FILE_SIZE = 3000000;

const schema = Yup.object().shape({
  avatar: Yup.mixed()
    .required('Please, add your avatar')
    .test(
      'fileSize',
      'Image too large, max 3mb',
      value => value.size <= FILE_SIZE
    ),
  name: Yup.string().required(),
  email: Yup.string()
    .required("It's Required field")
    .matches(emailRegExp, 'Invalid email address'),
  birthday: Yup.date()
    .required('Enter a date of birth')
    .min(new Date(1900, 0, 1))
    .max(new Date(), "You can't be born in the future!"),
  phone: Yup.string().required().matches(phoneRegExp, 'Invalid phone number'),
  city: Yup.string().required("It's Required field"),
});

export const UserPageForm = () => {
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

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

  return (
    <ContainerForm>
      <FormTitle>My information:</FormTitle>
      <Formik
        initialValues={{ name, email, birthday, phone, city, avatar }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormBox>
          <EditIcon>
            <Icon
              iconName={'icon-edit'}
              width={'24px'}
              height={'24px'}
              fill={'#54ADFF'}
            />
            <Icon
              iconName={'icon-cross'}
              width={'24px'}
              height={'24px'}
              stroke={'#54ADFF'}
            />
          </EditIcon>
          <ImageInputBox>
            <ImageBox></ImageBox>

            <label
              htmlFor="avatar"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              <Icon
                iconName={'icon-check'}
                width={'24px'}
                height={'24px'}
                stroke={'#54ADFF'}
              />
              Confirm
              <Icon
                iconName={'icon-cross'}
                width={'24px'}
                height={'24px'}
                stroke={'#F43F5E'}
              />
            </label>
            <label
              htmlFor="avatar"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              <Icon
                iconName={'icon-camera'}
                width={'24px'}
                height={'24px'}
                stroke={'#54ADFF'}
              />
              Edit photo
            </label>
            <Field
              style={{ display: 'none' }}
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*"
            />
            <ErrorMessage
              name="avatar"
              component="div"
              style={{ color: 'red', fontSize: 14 }}
            />
          </ImageInputBox>
          <InputBox>
            <Label htmlFor="name">Name:</Label>
            <Input id="name" name="name" placeholder="Anna" />
            <ErrorMessage name="name" component="div" />
          </InputBox>
          <InputBox>
            <Label htmlFor="email">Email:</Label>
            <Input id="email" name="email" placeholder="anna00@gmail.com" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: 'red', fontSize: 12 }}
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="birthday">Birthday:</Label>
            <Input type="date" id="birthday" name="birthday" />
            <ErrorMessage
              name="birthday"
              component="div"
              style={{ color: 'red', fontSize: 12 }}
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="phone">Phone:</Label>
            <Input id="phone" name="phone" placeholder="+38000000000" />
            <ErrorMessage
              name="phone"
              component="div"
              style={{ color: 'red', fontSize: 12 }}
            />
          </InputBox>
          <InputBox>
            <Label htmlFor="city">City:</Label>
            <Input id="city" name="city" placeholder="Kyiv" />
            <ErrorMessage
              name="city"
              component="div"
              style={{ color: 'red', fontSize: 12 }}
            />
          </InputBox>
          <ButtonForm type="submit">Save</ButtonForm>

          <LogoutBox>
            <Icon
              iconName={'icon-logout'}
              width={'24px'}
              height={'24px'}
              stroke={'#54ADFF'}
            />
            <p>Log Out</p>
          </LogoutBox>
        </FormBox>
      </Formik>
    </ContainerForm>
  );
};
