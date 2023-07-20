import { useAuth } from "./hooks/useAuth/useAuth";


function App() {
  const { user } = useAuth();

  return (
    <>
      <h1>Hello</h1>
      <p>{user.name}</p>
    </>
  );
}

export default App;
