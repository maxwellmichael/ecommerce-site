import './App.css';
import './scss/main.scss';
import Layout from './components/layout/index';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createFirestoreInstance} from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { firebase,reactReduxFirebaseConfig as rrfConfig } from './firebase/config';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


function App(){
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider config={rrfConfig} firebase={firebase} dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
        <Router>
          <Layout>
            <div className="App">
              <Routes/>
            </div>
          </Layout>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
