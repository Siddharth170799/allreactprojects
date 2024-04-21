// // // // import React from 'react'
// // // // import { useNavigate } from 'react-router-dom'
// // // // import { addUser } from './Slice'

// // // // const SignUp = () => {
// // // //     const navigate=useNavigate()

// // // //   return (
// // // //     <>
// // // //     <div style={{textAlign:"center",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
// // // //     <div style={{margin:"30px"}} ><h2>Are You a Student?</h2>
// // // //     <div>
// // // //          <button style={{backgroundColor:"green"}} onClick={()=>{
// // // //              navigate("/signupstudent")
// // // //          }}>Click to Sign Up</button>
// // // //     </div>
// // // //     </div>
// // // //     <div ><h2>Are You a Teacher?</h2>
// // // //     <div>
// // // //          <button style={{backgroundColor:"green"}} onClick={()=>{
// // // //              navigate("/signupteacher")
// // // //          }}>Click to Sign Up</button>
// // // //     </div>
// // // //     </div>
// // // //     </div>
// // // //     </>
// // // //   )
// // // // }

// // // // export default SignUp
// // // import React from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { addUser } from './Slice';
// // // import MediaCover from './video'; // Assuming your video component is named MediaCover

// // // const SignUp = () => {
// // //     const navigate = useNavigate();

// // //     return (
// // //         <>
// // //             <div style={{ position: 'relative', height: '100vh' }}>
// // //                 {/* Render the video component */}
// // //                 <MediaCover />

// // //                 {/* Render the SignUp component as an overlay */}
// // //                 <div style={{
// // //                     position: 'absolute',
// // //                     top: 0,
// // //                     left: 0,
// // //                     width: '100%',
// // //                     height: '100%',
// // //                     display: 'flex',
// // //                     justifyContent: 'center',
// // //                     alignItems: 'center',
// // //                     flexDirection: 'column',
// // //                     backgroundColor: 'rgba(0, 0, 0, 0)', // Add a semi-transparent background
// // //                     color: '#fff', // Set text color to white
// // //                 }}>
// // //                     <div style={{ margin: "30px" }}>
// // //                         <h2>Are You a Student?</h2>
// // //                         <div>
// // //                             <button style={{ backgroundColor: "green" }} onClick={() => {
// // //                                 navigate("/signupstudent");
// // //                             }}>Click to Sign Up</button>
// // //                         </div>
// // //                     </div>
// // //                     <div>
// // //                         <h2>Are You a Teacher?</h2>
// // //                         <div>
// // //                             <button style={{ backgroundColor: "green" }} onClick={() => {
// // //                                 navigate("/signupteacher");
// // //                             }}>Click to Sign Up</button>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </>
// // //     );
// // // };

// // // export default SignUp;

// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { addUser } from './Slice';
// // import MediaCover from './video'; // Assuming your video component is named MediaCover

// // const SignUp = () => {
// //     const navigate = useNavigate();

// //     return (
// //         <>
// //             <div style={{ height: '100vh', overflow: 'hidden' }}>
// //                 <div style={{ position: 'relative', height: '100%' }}>
// //                     {/* Render the video component */}
// //                     <MediaCover />

// //                     {/* Render the SignUp component as an overlay */}
// //                     <div style={{
// //                         position: 'absolute',
// //                         top: '50%',
// //                         left: '50%',
// //                         transform: 'translate(-50%, -50%)',
// //                         display: 'flex',
// //                         justifyContent: 'center',
// //                         alignItems: 'center',
// //                         flexDirection: 'column',
// //                         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background
// //                         color: '#fff', // Set text color to white
// //                         padding: '30px',
// //                     }}></div>
// //                     </div>
// //                     </div>
// //                     </>)}
// //                     export default SignUp
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from './Slice';
import MediaCover from './video'; // Assuming your video component is named MediaCover
import SignUpStudent from './SignUpStudent'; // Assuming your signup student component
import SignUpTeacher from './SignUpTeacher'; // Assuming your signup teacher component
// import SignIn from './SignIn'; // Assuming your sign in component

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <>
            <div style={{ height: '100vh', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '100%' }}>
                    {/* Render the video component */}
                    <MediaCover />

                    {/* Render the SignUp component as an overlay */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        backgroundColor: 'rgba(0, 0, 0, 0)', // Add a semi-transparent background
                        color: '#fff', // Set text color to white
                        padding: '30px',
                    }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h2>Are You a Student?</h2>
                            <button style={{ backgroundColor: "green" }} onClick={() => {
                                navigate("/signupstudent");
                            }}>Click to Sign Up</button>
                        </div>
                        <div>
                            <h2>Are You a Teacher?</h2>
                            <button style={{ backgroundColor: "green" }} onClick={() => {
                                navigate("/signupteacher");
                            }}>Click to Sign Up</button>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            {/* <h2>Already have an account?</h2>
                            <button style={{ backgroundColor: "green" }} onClick={() => {
                                navigate("/signin");
                            }}>Sign In</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;




