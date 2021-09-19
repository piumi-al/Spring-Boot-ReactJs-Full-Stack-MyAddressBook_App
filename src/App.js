import './App.css';

import{BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';
import ListofUsersComponent from './components/ListofUsersComponent';
//import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import createUserComponent from './components/createUserComponent';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div>
    
        <Router>
        
        <HeaderComponent />
        <Sidebar />
        
       
                <div className="container">
                  <Switch>
                      <Route  path= "/" exact component={ListofUsersComponent}></Route>
                      <Route  path= "/users" component={ListofUsersComponent}></Route>
                      <Route  path= "/add-user" component={createUserComponent}></Route>
                      

                  </Switch>
                </div>
         
   
        </Router>

   

    </div>

   

  );



  
}

export default App;
