import { Field, Formik, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { schema } from '../../constants/globalConstants';
import { Icon } from '../Icon/Icon';
import { logout } from '../../redux/auth/operations';
import { errorMessage, successMessage } from '../../utils/messages';
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
import { ModalApproveAction } from '../../shared/components/ModalApproveAction/ModalApproveAction';
import { ModalLogout } from '../ModalLogout/ModalLogout';
import { getCurrentUser, updateUser } from '../../services/UserApi';

axios.defaults.baseURL = 'https://mypets-backend.onrender.com/api/';

const FILE_SIZE = 3000000;

export const UserForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  // Стани для роботи з полями форми
  const [previewURL, setPreviewURL] = useState(undefined);
  const [email, setEmail] = useState('');
  const [values, setValues] = useState({
    name: '',
    avatar: '',
    birthday: '',
    phone: '',
    city: '',
  });

  // Стани для роботи з редагуванням форми
  const [isActiveEdit, setIsActiveEdit] = useState(false);
  const [isAbleAdd, setIsAbleAdd] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then(user => {
        setUser(user);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (user === null) {
      return;
    }
  }, [user]);

  // Стан модалки виходу із додатку
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (!user) {
      return;
    }
    setValues({
      name: user && user.name,
      birthday: user ? user.birthday : '',
      phone: user ? user.phone : '',
      city: user ? user.city : '',
      avatar: values.avatar || '',
    });
    setEmail(user && user.email);
    setPreviewURL(
      values.avatar ? URL.createObjectURL(values.avatar) : user.avatarURL
    );
  }, [user, values.avatar]);

  // Зміна режимів редагування config i edit
  const handleEditClick = () => {
    setIsAbleAdd(false);
  };

  // Контрольована зміна значень полів форми
  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleConfirmClick = () => {
    setIsActiveEdit(true);
    setIsAbleAdd(true);
  };

  const handleCancelClick = () => {
    setIsActiveEdit(true);
    setIsAbleAdd(true);
  };

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    if (file && file.size <= FILE_SIZE) {
      setValues({ ...values, avatar: file });
      setPreviewURL(URL.createObjectURL(file));
    } else {
      errorMessage('Your photo is large');
      setValues({ ...values, avatar: user && user.avatarURL });
      setPreviewURL(user && user.avatarURL);
    }
  };

  const handleSubmit = async () => {
    setIsActiveEdit(false);
    try {
      const formData = new FormData();
      const entries = Object.entries(values);

      let validationObject = {};

      entries.forEach(entry => {
        if (entry[1]) {
          formData.append(entry[0], entry[1]);
          validationObject = {
            ...validationObject,
            [entry[0]]: entry[1],
          };
        }
      });

      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });

      console.log('formDataObject----->', formDataObject);

      console.log('validationObject ===>', validationObject);

      await schema.validate(validationObject);

      console.log(await schema.validate(validationObject));

      updateUser(formData);
      successMessage('Changes saved successfully');
    } catch (error) {
      if (error.name === 'ValidationError') {
        console.log('ErrorErrors--->', error.errors[0]);
        errorMessage(error.errors[0]);
      }
    }
  };

  // Функція, на зміну форми із звичайного стану в стан редагування і навпаки
  const handleEditForm = () => {
    setIsActiveEdit(!isActiveEdit);
  };

  return (
    <ContainerForm>
      <FormTitle>My information:</FormTitle>
      <Formik initialValues={values} onSubmit={handleSubmit}>
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
                  style={{
                    borderRadius: 40,
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
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
                <button type="button" onClick={handleCancelClick}>
                  <Icon
                    iconName={'icon-cross'}
                    width={'24px'}
                    height={'24px'}
                    stroke={'#F43F5E'}
                  />
                </button>
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
              />
            </InputBox>
            <InputBox>
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                name="email"
                placeholder="anna00@gmail.com"
                disabled
                value={email}
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
              />
            </InputBox>
            {isActiveEdit ? (
              <ButtonForm type="submit">Save</ButtonForm>
            ) : (
              <LogoutBox onClick={openModal}>
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
      {showModal && (
        <div>
          <ModalApproveAction onClose={closeModal}>
            <ModalLogout
              handleModal={closeModal}
              handleLogout={() => dispatch(logout())}
            />
          </ModalApproveAction>
        </div>
      )}
    </ContainerForm>
  );
};
