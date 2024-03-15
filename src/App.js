import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, BrowserRouter,Routes} from 'react-router-dom';

import HomeOne from './components/pages/Home01';
import HomeTwo from './components/pages/Home02';
import AboutMain from './components/pages/About';
import CourseOne from './components/pages/CourseOne';
import AdminPanel from './components/admin'
import CourseTwo from './components/pages/CourseTwo';
import CourseThree from './components/pages/CourseThree';
import CourseFour from './components/pages/CourseFour';
import CourseList from './components/pages/CourseList';

import CourseDetails from './components/pages/CourseDetails';
import CourseDetailsTwo from './components/pages/CourseDetailsTwo';

import InstructorOne from './components/pages/InstructorPage';


import Login from './components/pages/Login';
import Register from './components/pages/Register';

import ContactPage from './components/pages/ContactPage';
import BlogPageOne from './components/pages/BlogPageOne';


function App() {

  return (
      <BrowserRouter>
          <Routes>

              <Route exact path='/' element={<HomeOne/>}/>
              <Route exact path= '/home-2' element={<HomeTwo/>}/>
              <Route exact path= '/about' element={<AboutMain/>}/>

              <Route exact path= '/course-1' element={<CourseOne/>}/>
              {/* <Route exact path= '/course-2' element={<CourseTwo/>}/>
              <Route exact path= '/course-3' element={<CourseThree/>}/>
              <Route exact path= '/course-4' element={<CourseFour/>}/>
              <Route exact path= '/course-list' element={<CourseList/>}/> */}
              
              <Route exact path= '/course-details/:id' element={<CourseDetails/>}/>

              <Route exact path= '/course-details-two/:id' element={<CourseDetailsTwo/>}/>

              <Route exact path= '/instructors' element={<InstructorOne/>}/>
              <Route exact path= '/login' element={<Login/>}/>
              <Route exact path= '/register' element={<Register/>}/>

              <Route exact path='/contact' element={<ContactPage/>}/>
              <Route exact path='/news' element={<BlogPageOne/>}/>

              <Route exact path='/admin' element={<AdminPanel />}/>

           </Routes>

      </BrowserRouter>
  );
}

export default App;

