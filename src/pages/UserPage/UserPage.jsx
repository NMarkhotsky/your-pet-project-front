import { Container } from '../UserPage/UserPage.styled';
import { PetsList } from '../../components/PetsList/PetsList';
import { UserForm } from '../../components/UserForm/UserForm';

function UserPage() {
  return (
    <Container>
     <UserForm/>
      <PetsList/>
    </Container>
  );
}

export default UserPage;
