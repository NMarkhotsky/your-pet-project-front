import { Container } from '../UserPage/UserPage.styled';
import { UserData } from '../../components/UserData/UserData';
import { PetsData } from '../../components/PetsData/PetsData';
import { ModalCongrats } from '../../components/ModalCongrats/ModalCongrats';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { useDispatch } from 'react-redux';
import { setIsNewUserFalse } from '../../redux/auth/authSlice';

function UserPage() {
  const { isNewUser } = useAuth();
  const [showModal, setShowModal] = useState(true);
  const dispatch = useDispatch();

  const closeModal = () => {
    setShowModal(false);
    dispatch(setIsNewUserFalse());
  };

  useEffect(() => {
    if (!isNewUser) return;
  }, [isNewUser]);

  return (
    <Container>
      {isNewUser && showModal && (
        <div>
          <ModalCongrats onClose={closeModal} />
        </div>
      )}
      <UserData />
      <PetsData />
    </Container>
  );
}

export default UserPage;
