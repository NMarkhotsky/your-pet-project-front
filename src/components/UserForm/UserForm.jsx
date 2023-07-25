import { Field, Formik, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import * as Yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Icon } from '../Icon/Icon';
import { logout } from '../../redux/auth/operations';
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
  ConfirmText,
} from './UserForm.styled';

axios.defaults.baseURL = 'https://mypets-backend.onrender.com/api/';

// const emailRegExp =
//   /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

const phoneRegExp = /^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/;

const FILE_SIZE = 3000000;

// const schema = Yup.object().shape({
//   name: Yup.string()
//   .required('Name  is required field'),
//   email: Yup.string()
//     .required('Email  is required field')
//     .matches(emailRegExp, 'Invalid email address'),
//   birthday: Yup.date()
//     .required('Enter a date of birth')
//     .min(new Date(1900, 0, 1))
//     .max(new Date(), "You can't be born in the future!"),
//   phone: Yup.string()
//     .required('Phone is required field')
//     .matches(phoneRegExp, 'Invalid phone number'),
//   city: Yup.string()
//   .required('City is required field'),
// });

export const UserForm = ({ user }) => {
  const dispatch = useDispatch();

  // Стани для роботи з полями форми
  const [avatar, setAvatar] = useState('');
  const [previewURL, setPreviewURL] = useState(undefined);
  const [values, setValues] = useState({
    name: '',
    email: '',
    birthday: '',
    phone: '',
    city: '',
  });

  // Стани для роботи з редагуванням форми
  const [isActiveEdit, setIsActiveEdit] = useState(false);
  const [isAbleAdd, setIsAbleAdd] = useState(true);

  useEffect(() => {
    if (avatar === '') {
      return;
    }
  }, [avatar]);

  useEffect(() => {
    if (user === null) {
      return;
    }
    setValues({
      name: user && user.name,
      email: user && user.email,
      birthday: user ? user.birthday : '',
      phone: user ? user.phone : '',
      city: user ? user.city : '',
    });
    setPreviewURL(user && user.avatarURL);
  }, [user]);

  // Зміна режимів редагування config i edit
  const handleEditClick = () => {
    setIsAbleAdd(false);
  };

  // Контрольована зміна значень полів форми
  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmClick = () => {
    setIsConfirmed(true);
    alert('Your photo has been successfully added');
  };

  const handleCancelClick = () => {
    setIsAbleAdd(true);
    setAvatar('');
    setPreviewURL(user && user.avatarURL);
  };

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    if (file && file.size <= FILE_SIZE) {
      setAvatar(file);
      setPreviewURL(URL.createObjectURL(file));
    } else {
      toast.error('Your photo is large');
      setAvatar(null);
      setPreviewURL(null);
    }
  };

  const handleSubmit = async () => {
    try {
      toast.success('Changes saved successfully');

      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('birthday', values.birthday);
      formData.append('phone', values.phone);
      formData.append('city', values.city);
      formData.append('avatar', avatar);

      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });

      console.log('formData ==>', formData);

      const response = await axios.patch(`/users`, formData);
      console.log('Дані успішно відправлені:', response);
    } catch (error) {
      console.error('Помилка при відправці даних:', error);
    }
  };

  // Функція, на зміну форми із звичайного стану в стан редагування і навпаки
  const handleEditForm = () => {
    setIsActiveEdit(!isActiveEdit);
  };

  return (
    <ContainerForm>
      <FormTitle>My information:</FormTitle>
      <Formik
        // initialValues={{
        //   name: user  && user.name,
        //   email: user && user.email,
        //   birthday: user ? user.birthday : '',
        //   phone: user ? user.phone : '',
        //   city: user ? user.city : '',
        // }}
        initialValues={values}
        onSubmit={handleSubmit}
        // validationSchema={schema}
      >
        <FormBox>
          <EditIcon onClick={handleEditForm}>
            {!isActiveEdit ? (
              <Icon
                iconName={'icon-edit'}
                width={'24px'}
                height={'24px'}
                fill={'#54ADFF'}
              />
            ) : (
              <Icon
                iconName={'icon-cross'}
                width={'24px'}
                height={'24px'}
                stroke={'#54ADFF'}
              />
            )}
          </EditIcon>
          <ImageInputBox>
            <ImageBox>
              {previewURL && (
                <img
                  src={previewURL}
                  width="100%"
                  height="100%"
                  style={{ borderRadius: 40, objectFit: 'cover' }}
                  alt="Попередній перегляд аватарки"
                />
              )}
            </ImageBox>

            {isActiveEdit && (
              <label
                htmlFor="avatar"
                style={{
                  display: isAbleAdd ? 'flex' : 'none',

                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  cursor: 'pointer',
                }}
                onClick={handleEditClick}
              >
                <Icon
                  iconName={'icon-camera'}
                  width={'24px'}
                  height={'24px'}
                  stroke={'#54ADFF'}
                />
                Edit photo
              </label>
            )}

            <Field
              style={{ display: 'none' }}
              type="file"
              id="avatar"
              name="avatar"
              accept="image/*"
              onChange={handleAvatarChange}
            />
            <ErrorMessage
              name="avatar"
              component="div"
              style={{ color: 'red', fontSize: 12 }}
            />
            {isActiveEdit && !isAbleAdd && (
              <ConfirmText>
                <button type="button" onClick={handleConfirmClick}>
                  <Icon
                    iconName={'icon-check'}
                    width={'24px'}
                    height={'24px'}
                    stroke={'#54ADFF'}
                  />
                </button>
                Confirm
                {isConfirmed && (
                  <button type="button" onClick={handleCancelClick}>
                    <Icon
                      iconName={'icon-cross'}
                      width={'24px'}
                      height={'24px'}
                      stroke={'#F43F5E'}
                    />
                  </button>
                )}
              </ConfirmText>
            )}
          </ImageInputBox>

          <div>
            <InputBox>
              <Label htmlFor="name">Name:</Label>
              <Input
                id="name"
                name="name"
                placeholder="Anna"
                disabled={!isActiveEdit}
                value={values.name}
                onChange={handleChange}
                required
              />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: 'red', fontSize: 12 }}
              />
            </InputBox>
            <InputBox>
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                name="email"
                placeholder="anna00@gmail.com"
                disabled={!isActiveEdit}
                value={values.email}
                onChange={handleChange}
                required
                type="email"
                // pattern={emailRegExp}
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: 'red', fontSize: 12 }}
              />
            </InputBox>
            <InputBox>
              <Label htmlFor="birthday">Birthday:</Label>
              <Input
                type="date"
                id="birthday"
                name="birthday"
                disabled={!isActiveEdit}
                value={values.birthday}
                onChange={handleChange}
                required
                min={new Date(1900, 0, 1)}
                max={new Date()}
              />
              <ErrorMessage
                name="birthday"
                component="div"
                style={{ color: 'red', fontSize: 12 }}
              />
            </InputBox>
            <InputBox>
              <Label htmlFor="phone">Phone:</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="+38000000000"
                disabled={!isActiveEdit}
                value={values.phone}
                onChange={handleChange}
                type="number"
                required
                pattern={phoneRegExp}
              />
              <ErrorMessage
                name="phone"
                component="div"
                style={{ color: 'red', fontSize: 12 }}
              />
            </InputBox>
            <InputBox>
              <Label htmlFor="city">City:</Label>
              <Input
                id="city"
                name="city"
                placeholder="Kyiv"
                disabled={!isActiveEdit}
                value={values.city}
                onChange={handleChange}
                required
              />
              <ErrorMessage
                name="city"
                component="div"
                style={{ color: 'red', fontSize: 12 }}
              />
            </InputBox>
            {isActiveEdit ? (
              <ButtonForm type="submit">Save</ButtonForm>
            ) : (
              <LogoutBox onClick={() => dispatch(logout())}>
                <Icon
                  iconName={'icon-logout'}
                  width={'24px'}
                  height={'24px'}
                  stroke={'#54ADFF'}
                />
                <p>Log Out</p>
              </LogoutBox>
            )}
          </div>
        </FormBox>
      </Formik>
    </ContainerForm>
  );
};

UserForm.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    avatarURL: PropTypes.string,
    birthday: PropTypes.string,
    phone: PropTypes.string,
    city: PropTypes.string,
    _id: PropTypes.string,
  }),
};
