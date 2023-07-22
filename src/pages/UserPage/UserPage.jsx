import { Container } from '../UserPage/UserPage.styled';
import { UserPageForm } from '../../components/UserPageForm/UserPageForm';
import { PetsList } from '../../components/PetsList/PetsList';

function UserPage() {
  return (
    <Container>
      <UserPageForm />
      <PetsList/>
    </Container>
  );
}

export default UserPage;
