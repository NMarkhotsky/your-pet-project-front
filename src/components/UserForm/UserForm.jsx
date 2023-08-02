import { Field, Formik, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { FILE_SIZE } from '../../constants/globalConstants';
import { Loader } from '../../shared/components/Loader/Loader';
import { t } from 'i18next';

export const UserForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
  const [fileAvatar, setFileAvatar] = useState(null);

  // Стани для роботи з редагуванням форми
  const [isActiveEdit, setIsActiveEdit] = useState(false);
  const [isAbleAdd, setIsAbleAdd] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCurrentUser()
      .then(user => {
        setUser(user);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
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
      avatarURL: user.avatarURL,
    });
    setEmail(user && user.email);
    setPreviewURL(fileAvatar ? previewURL : user.avatarURL);
  }, [fileAvatar, previewURL, user, values.avatar]);

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
    setValues({ ...values, avatar: fileAvatar });
    setIsActiveEdit(true);
    setIsAbleAdd(true);
  };

  const handleCancelClick = () => {
    setFileAvatar(null);
    setIsActiveEdit(true);
    setIsAbleAdd(true);
  };

  const handleAvatarChange = e => {
    const file = e.target.files[0];
    if (file && file.size <= FILE_SIZE) {
      setFileAvatar(file);
      setPreviewURL(URL.createObjectURL(file));
    } else {
      errorMessage('Your photo is large');
      setIsAbleAdd(true);
      setPreviewURL(user && user.avatarURL);
    }
  };

  const handleSubmit = async () => {
    if (fileAvatar && !values.avatar) {
      errorMessage('Press confirm or cancel your new photo');
      return;
    }
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

      await schema.validate(validationObject);

      setIsLoading(true);
      updateUser(formData);
      successMessage('Changes saved successfully');
    } catch (error) {
      if (error.name === 'ValidationError') {
        setIsActiveEdit(true);
        errorMessage(error.errors[0]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Функція, на зміну форми із звичайного стану в стан редагування і навпаки
  const handleEditForm = () => {
    setIsActiveEdit(!isActiveEdit);
  };

  return (
    <ContainerForm>
      <FormTitle>{t('user_myinfo_title')}</FormTitle>
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
                {t('user_myinfo_editPhoto')}
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
                {t('other_confirm')}
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
              <Label htmlFor="name"> {t('other_name')}:</Label>
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
              <Label htmlFor="email">{t('other_mail')}:</Label>
              <Input
                id="email"
                name="email"
                placeholder="anna00@gmail.com"
                disabled
                value={email}
              />
            </InputBox>
            <InputBox>
              <Label htmlFor="birthday">{t('other_birthday')}:</Label>
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
              <Label htmlFor="phone">{t('other_phone')}:</Label>
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
              <Label htmlFor="city">{t('other_city')}:</Label>
              <Input
                id="city"
                name="city"
                placeholder={t('user_myinfo_formPlaceholder_city')}
                disabled={!isActiveEdit}
                value={values.city}
                onChange={handleChange}
              />
            </InputBox>
            {isActiveEdit ? (
              <ButtonForm type="submit">{t('user_myinfo_saveBtn')}</ButtonForm>
            ) : (
              <LogoutBox onClick={openModal}>
                <Icon
                  iconName={'icon-logout'}
                  width={'24px'}
                  height={'24px'}
                  stroke={'#54ADFF'}
                />
                <p>{t('user_myinfo_logout')}</p>
              </LogoutBox>
            )}
          </div>
        </FormBox>
      </Formik>
      {showModal && (
        <ModalApproveAction onClose={closeModal}>
          <ModalLogout
            handleModal={closeModal}
            handleLogout={() => dispatch(logout())}
          />
        </ModalApproveAction>
      )}
      {isLoading ? <Loader /> : null}
    </ContainerForm>
  );
};
