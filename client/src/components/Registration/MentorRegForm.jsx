import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './MentorRegForm.css';

const MentorRegistrationForm = () => {
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().matches(/^[A-Za-z]{1,32}$/, "Enter only alphabets").required("First name is required"),
    lastname: Yup.string().matches(/^[A-Za-z]{1,32}$/, "Enter only alphabets").required("Last name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phoneNumber: Yup.string().matches(/^[7-9][0-9]{9}$/, "Please enter a valid phone number").required("Phone number is required"),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.date().required("Date of Birth is required"),
    address: Yup.string().max(100, "Maximum 100 characters allowed").required("Address is required"),
    state: Yup.string().required("State is required"),
    district: Yup.string().matches(/^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/, "Invalid district").required("District is required"),
    pincode: Yup.string().matches(/^[0-9]{6}$/, "Enter a valid pin code").required("Pin code is required"),
    highestQualification: Yup.string().required("Highest qualification is required"),
    currentOccupation: Yup.string().matches(/^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/, "Invalid occupation").required("Current occupation is required"),
    yearsOfExperience: Yup.number().min(0, "Invalid years of experience").required("Years of experience is required"),
    skills: Yup.string().required("Skills are required"),
    linkedinProfile: Yup.string().url("Invalid URL").required("LinkedIn profile is required"),
    photo: Yup.mixed().required("Photo is required"),
    declaration: Yup.bool().oneOf([true], "Declaration is required")
  });

  return (
    <div className="mentor-registration-form">
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          phoneNumber: '',
          gender: '',
          dob: '',
          address: '',
          state: '',
          district: '',
          pincode: '',
          highestQualification: '',
          currentOccupation: '',
          yearsOfExperience: '',
          skills: '',
          linkedinProfile: '',
          photo: null,
          declaration: false
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="wrapper">
            <div className="title">Mentor Registration Form</div>
            <div className="form">
            <div className="form-group">
              <label>First Name</label>
              <Field type="text" name="firstname" placeholder="Enter first name" />
              <ErrorMessage name="firstname" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <Field type="text" name="lastname" placeholder="Enter last name" />
              <ErrorMessage name="lastname" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <Field type="text" name="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Contact No</label>
              <div className="custom-select">
              <Field type="Tel" name="phoneNumber" placeholder="Enter your phone number" />
              <ErrorMessage name="phoneNumber" component="div" className="error" />
            </div>
            </div>

            <div className="form-group">
              <label>Gender</label>
              <div role="group" aria-labelledby="gender-group">
                <label>
                  <Field type="radio" name="gender" value="Male" />
                  Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <label>
                  <Field type="radio" name="gender" value="Female" />
                  Female
                </label>
              </div>
              <ErrorMessage name="gender" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Date of Birth</label>
              <Field type="date" name="dob" />
              <ErrorMessage name="dob" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Address</label>
              <Field as="textarea" name="address" placeholder="Enter your address" />
              <ErrorMessage name="address" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>State</label>
              <div className="custom-select">
                <Field as="select" name="state">
                  <option value="">--Select your state--</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </Field>
              </div>
              <ErrorMessage name="state" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>District</label>
              <Field type="text" name="district" placeholder="Enter your district" />
              <ErrorMessage name="district" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Pincode</label>
              <Field type="text" name="pincode" placeholder="Enter your pincode" />
              <ErrorMessage name="pincode" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Highest Qualification</label>
              <Field type="text" name="highestQualification" placeholder="Enter your highest qualification" />
              <ErrorMessage name="highestQualification" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Current Occupation</label>
              <Field type="text" name="currentOccupation" placeholder="Enter your current occupation" />
              <ErrorMessage name="currentOccupation" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Years of Experience</label>
              <Field type="number" name="yearsOfExperience" placeholder="Enter your years of experience" />
              <ErrorMessage name="yearsOfExperience" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Skills</label>
              <Field as="textarea" name="skills" placeholder="Enter your skills" />
              <ErrorMessage name="skills" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>LinkedIn Profile</label>
              <Field type="text" name="linkedinProfile" placeholder="Enter your LinkedIn profile URL" />
              <ErrorMessage name="linkedinProfile" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Upload Photo</label>
              <input type="file" name="photo" onChange={(event) => {
                setFieldValue("photo", event.currentTarget.files[0]);
              }} />
              <ErrorMessage name="photo" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>
                <Field type="checkbox" name="declaration" />
                &nbsp;&nbsp;I hereby declare that all the information provided is true to the best of my knowledge.
              </label>
              <ErrorMessage name="declaration" component="div" className="error" />
            </div>

            <div className="form-group">

              <Link to="/mentor-dashboard">
              <button type="submit" className="bt-submit">Submit</button>
              </Link>
            </div>
            </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MentorRegistrationForm;