import Router from "./shared/Router";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
}

export default App;
