import './App.css';
import './scss/main.scss';
import Layout from './components/layout/index';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';

function App(){
  return (
    <Router>
      <Layout>
        <div className="App">
          <Routes/>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
