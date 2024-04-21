// import logo from './logo.svg';
import './App.css';
// import Parent from './parent';
// import FirstChild from './firstChild';
// import Model from './Modal';

// import URl from './Weather';
import Child from './Child';
// import Child2 from './Child2';
// // import Main from './Main';
import Main from './Ref';
// import ModalChild from './ModalChild';
// import ParentComponent from './Modal';
import Home from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './Create';
import Update from './Update';
import URl from './Weather';
import ToDoList from './ToDoList';
import ParentComponent from './Modal';
import SignUp from './SignUp';
import Student from './Student';
import SignUpStudent from './SignUpStudent';
import LoginStudent from './LoginStudent';
import SignUpTeacher from './SignUpTeacher';
import LoginTeacher from './LoginTeacher';
import Teacher from './Teacher';

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
     {/* <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/edit/:id" element={<Update/>}/>
     </Routes>
   </BrowserRouter> */}
    {/* <Home/> */}
    {/* <Main/> */}
    {/* <Child/> */}
    {/* <SignUp/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/signupstudent" element={<SignUpStudent/>}/>
      <Route path="/signinstudent" element={<LoginStudent/>}/>
      <Route path="/student" element={<Student/>}/>
      <Route path="/signupteacher" element={<SignUpTeacher/>}/>
      <Route path="/signinteacher" element={<LoginTeacher/>}/>
      <Route path="/teacher" element={<Teacher/>}/>
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
