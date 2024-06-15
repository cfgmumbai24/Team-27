import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/api/login', formValues)
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
        Password:
        <input type="password" value={formValues.password} onChange={(event) => setFormValues({ ...formValues, password: event.target.value })} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
















// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const LoginForm = () => {
//   const [formValues, setFormValues] = useState({
//     username: '',
//     password: '',
//   });

//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required('Username is required'),
//     password: Yup.string().required('Password is required'),
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
//           <Field type="password" name="password" placeholder="Password" />
//           <ErrorMessage name="password" component="div" />
//           <button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? 'Submitting...' : 'Login'}
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default LoginForm;


// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';

// // const Login = () => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState(null);

// //   const handleLogin = async () => {
// //     try {
// //       const response = await axios.post('http://localhost:5000/api/login', {
// //         username,
// //         password,
// //       });
// //       if (response.data.success) {
// //         // Redirect to student dashboard
// //         window.location.href = '/student-dashboard';
// //       } else {
// //         setError('Invalid username or password');
// //       }
// //     } catch (error) {
// //       setError('Error logging in');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Login</h1>
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
// //           Password:
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //         </label>
// //         <br />
// //         <button onClick={handleLogin}>Login</button>
// //         {error && <p style={{ color: 'red' }}>{error}</p>}
// //       </form>
// //       <p>
// //         Don't have an account? <Link to="/signup">Sign up</Link>
// //       </p>
// //     </div>
// //   );
// // };

// // export default Login;
