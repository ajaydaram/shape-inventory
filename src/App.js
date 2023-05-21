import './App.css';
import Nav from './Nav';
import PersonalInfo from './personal-info';
import { LoginForm } from './LoginForm';

function App() {
  return (
    <div className="App">
      <Nav />
      <PersonalInfo />
      <LoginForm />
     </div>
  );
}

export default App;
