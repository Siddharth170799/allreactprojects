// import logo from './logo.svg';
import './App.css';
// import Parent from './parent';
// import FirstChild from './firstChild';
// import Model from './Modal';

// import URl from './Weather';
// import Child from './Child';
// import Child2 from './Child2';
// // import Main from './Main';
// import Main from './Ref';
// import ModalChild from './ModalChild';
// import ParentComponent from './Modal';
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './Create';
import Update from './Update';


function App() {
  return (
    <>
    {/* <Parent/> */}
    {/* <FirstChild/> */}
    {/* <ToDoList/> */}
    {/* <URl/> */}
    {/* <Model/> */}
    {/* <Child/>
    <Child2/> */}
    {/* <Main/> */}
    {/* <Main/> */}
    {/* <Model/> */}
    {/* <ParentComponent/> */}
    {/* <ModalChild/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/edit/:id" element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    {/* <Home/> */}

    </>
  );
}

export default App;
