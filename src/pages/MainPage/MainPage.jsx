import { useState } from 'react';

import { ModalConfirmDelete } from '../../components/ModalConfirmDelete/ModalConfirmDelete';
import { ModalApproveAction } from '../../shared/components/ModalApproveAction/ModalApproveAction';

function MainPage() {
  // return <h1>MainPage</h1>;
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    console.log('click');
  };

  return (
    <>
      <h1>MainPage</h1>;<button onClick={openModal}>Open Modal</button>
      {showModal && (
        <div>
          <ModalApproveAction onClose={closeModal}>
            <ModalConfirmDelete name="Gog" handleModal={closeModal} />
          </ModalApproveAction>
        </div>
      )}
    </>
  );
}

export default MainPage;
