import { Container } from '../UserPage/UserPage.styled';
import { UserData } from '../../components/UserData/UserData';
import { PetsData } from '../../components/PetsData/PetsData';

function UserPage() {
  return (
    <Container>
      <UserData />
      <PetsData />
    </Container>
  );
}

export default UserPage;
