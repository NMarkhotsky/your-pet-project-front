import { Icon } from './components/Icon/Icon';
import { useAuth } from './hooks/useAuth/useAuth';

function App() {
  const { user } = useAuth();

  return (
    <>
      <h1>Hello</h1>
      <p>{user.name}</p>
      <Icon iconName={'icon-arrow-left'} stroke={'#54ADFF'} fill={'#54ADFF'} />
    </>
  );
}

export default App;
