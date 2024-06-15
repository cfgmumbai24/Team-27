import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/api/signup', formValues)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={formValues.username} onChange={(event) => setFormValues({ ...formValues, username: event.target.value })} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={formValues.email} onChange={(event) => setFormValues({ ...formValues, email: event.target.value })} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={formValues.password} onChange={(event) => setFormValues({ ...formValues, password: event.target.value })} />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" value={formValues.confirmPassword} onChange={(event) => setFormValues({ ...formValues, confirmPassword: event.target.value })} />
      </label>
      <br />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignupForm;



















// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const SignupForm = () => {
//   const [formValues, setFormValues] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });


//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required('Username is required'),
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     password: Yup.string().required('Password is required'),
//     confirmPassword: Yup.string().required('Confirm password is required').test(
//       'passwordsMatch',
//       'Passwords do not match',
//       (value) => value === formValues.password
//     ),
//   });

//   const handleSubmit = (values, { setSubmitting }) => {
//     // Submit the form data
//     setSubmitting(false);
//   };

//   return (
//     <Formik
//       initialValues={formValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <Field type="text" name="username" placeholder="Username" />
//           <ErrorMessage name="username" component="div" />
//           <Field type="email" name="email" placeholder="Email" />
//           <ErrorMessage name="email" component="div" />
//           <Field type="password" name="password" placeholder="Password" />
//           <ErrorMessage name="password" component="div" />
//           <Field type="password" name="confirmPassword" placeholder="Confirm password" />
//           <ErrorMessage name="confirmPassword" component="div" />
//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? 'Submitting...' : 'Submit'}
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default SignupForm;




// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';

// // const Signup = () => {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [lastName, setLastName] = useState('');
// //   const [currentSchool, setCurrentSchool] = useState('');
// //   const [tenthSchool, setTenthSchool] = useState('');
// //   const [tenthPercentage, setTenthPercentage] = useState(0);
// //   const [parentsOccupation, setParentsOccupation] = useState('');
// //   const [parentsIncome, setParentsIncome] = useState(0);
// //   const [topThreePreferences, setTopThreePreferences] = useState([]);
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState(null);

// //   const handleSignup = async () => {
// //     try {
// //       const response = await axios.post('http://localhost:5000/api/signup', {
// //         username,
// //         email,
// //         lastName,
// //         currentSchool,
// //         tenthSchool,
// //         tenthPercentage,
// //         parentsOccupation,
// //         parentsIncome,
// //         topThreePreferences,
// //         password,
// //       });
// //       if (response.data.success) {
// //         // Redirect to login page
// //         window.location.href = '/login';
// //       } else {
// //         setError('Error signing up');
// //       }
// //     } catch (error) {
// //       setError('Error signing up');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Sign up</h1>
// //       <form>
// //         <label>
// //           Username:
// //           <input
// //             type="text"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           Email:
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           Last Name:
// //           <input
// //             type="text"
// //             value={lastName}
// //             onChange={(e) => setLastName(e.target.value)}
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           Current School:
// //           <input
// //             type="text"
// //             value={currentSchool}
// //             onChange={(e) => setCurrentSchool(e.target.value)}
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           10th School:
// //           <input
// //             type="text"
// //             value={tenthSchool}
// //             onChange={(e) => setTenthSchool(e.target.value)}
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           10th Percentage:
// //           <input
// //             type="number"
// //             value={tenthPercentage}
// //             onChange={(e) => setTenthPercentage(e.target.value)}
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           Parents Occupation:
// //           <input
// //             type="text"
// //             value={parentsOccupation}
// //             onChange={(e) => setParentsOccupation(e.target.value)}
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           Parents Income:
// //           <input
// //             type="number"
// //             value={parentsIncome}
// //             onChange={(e) => setParentsIncome(e.target.value)}
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           Top Three Preferences:
// //           <input
// //             type="text"
// //             value={topThreePreferences.join(', ')}
// //             onChange={(e) => setTopThreePreferences(e.target.value.split(', '))}
// //           />
// //         </label>
// //         <br />
// //         <label>
// //           Password:
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //         </label>
// //         <br />
// //         <button onClick={handleSignup}>Sign up</button>
// //         {error && <p style={{ color: 'red' }}>{error}</p>}
// //       </form>
// //       <p>
// //         Already have an account? <Link to="/login">Login</Link>
// //       </p>
// //     </div>
// //   );
// // };

// // export default Signup;