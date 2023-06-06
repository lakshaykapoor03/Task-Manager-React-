
import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import UserContainer from './Components/UserContainer';
import UserTask from './Components/UserTask';

function App() {
  return (
    <div className="App">
    <Outlet/>
    </div>
  );
}

export const appRouter= createBrowserRouter([
  {  path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<UserContainer/>
      },
      {  path:"/userTask",
      element:<UserTask/>,
    }
    ]
 },
 
  ])




export default App;
