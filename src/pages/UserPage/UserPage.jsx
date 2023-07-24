import { Container } from '../UserPage/UserPage.styled';
import { UserData } from '../../components/UserData/UserData';
import { PetsData } from '../../components/PetsData/PetsData';
import { ModalCongrats } from '../../components/ModalCongrats/ModalCongrats';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth/useAuth';

function UserPage() {
  const { isNewUser } = useAuth();
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
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
