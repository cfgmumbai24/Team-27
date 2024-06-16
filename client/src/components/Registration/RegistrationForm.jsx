import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import '../App.css';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const validationSchema = Yup.object().shape({
    fname: Yup.string().matches(/^[A-Za-z]{1,32}$/, "Enter only alphabets").required("First name is required"),
    lname: Yup.string().matches(/^[A-Za-z]{1,32}$/, "Enter only alphabets").required("Last name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phoneNumber: Yup.string().matches(/^[0-9][0-9]{10}$/, "Please enter a valid phone number"),
    gender: Yup.string().required("Gender is required"),
    age: Yup.string().matches(/^[0-9]{2}$/, "Enter numbers only").required("Age is required"),
    dob: Yup.date().required("Date of Birth is required"),
    address: Yup.string().max(100, "Maximum 100 characters allowed").required("Address is required"),
    state: Yup.string().required("State is required"),
    district: Yup.string().matches(/^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/, "Invalid district").required("District is required"),
    pincode: Yup.string().matches(/^[0-9]{6}$/, "Enter a valid pin code").required("Pin code is required"),
    socialCategory: Yup.string().required("Social category is required"),
    mothersProfession: Yup.string().matches(/^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/, "Invalid profession").required("Mother's profession is required"),
    fathersProfession: Yup.string().matches(/^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/, "Invalid profession").required("Father's profession is required"),
    familyIncome: Yup.string().required("Family income is required"),
    hasLaptopOrComputer: Yup.string().required("This field is required"),
    educationQualification: Yup.string().matches(/^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/, "Invalid input").required("Education qualification is required"),
    currentEducationLevel: Yup.string().required("Current education level is required"),
    mothersEducation: Yup.string().matches(/^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/, "Invalid input").required("Mother's education level is required"),
    fathersEducation: Yup.string().matches(/^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/, "Invalid input").required("Father's education level is required"),
    boardIn12th: Yup.string().required("Board in 12th is required"),
    collegeLocationIn10th: Yup.string().required("Location of college in 10th is required"),
    mediumOfEducationIn12th: Yup.string().required("Medium of education in 12th is required"),
    mediumOfEducationInUG: Yup.string().required("Medium of education in UG is required"),
    preparingForExams: Yup.string().matches(/^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/, "Invalid input").required("Exam preparation details are required"),
    desiredInstitute: Yup.string().matches(/^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/, "Invalid input").required("Desired institute is required"),
    interestOfStudy: Yup.string().matches(/^[a-zA-Z][a-zA-Z0-9-_.]{5,12}$/, "Invalid input").required("Interest of study is required"),
    photo: Yup.mixed().required("Photo is required"),
    declaration: Yup.bool().oneOf([true], "Declaration is required")
  });

  return (
    <div className="registration-form">
      <Formik
        initialValues={{
          fname: '',
          lname: '',
          email: '',
          phoneNumber: '',
          gender: '',
          age: '',
          dob: '',
          address: '',
          state: '',
          district: '',
          pincode: '',
          socialCategory: '',
          mothersProfession: '',
          fathersProfession: '',
          familyIncome: '',
          hasLaptopOrComputer: '',
          educationQualification: '',
          currentEducationLevel: '',
          mothersEducation: '',
          fathersEducation: '',
          boardIn12th: '',
          collegeLocationIn10th: '',
          mediumOfEducationIn12th: '',
          mediumOfEducationInUG: '',
          preparingForExams: '',
          desiredInstitute: '',
          interestOfStudy: '',
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
            <div className="title">Student Registration Form</div>
            <div className="form">
            <div className="form-group">
              <label>First Name</label>
              <Field type="text" name="fname" placeholder="Enter first name" />
              <ErrorMessage name="fname" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <Field type="text" name="lname" placeholder="Enter last name" />
              <ErrorMessage name="lname" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <Field type="text" name="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Contact No</label>
              <div className="custom-select">
                {/* <Field as="select" name="phoneCode">
                  <option value="+91">+91</option>
                </Field> */}
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
              <label>Age</label>
              <Field type="text" name="age" placeholder="Enter your age" />
              <ErrorMessage name="age" component="div" className="error" />
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
              <label>Social Category</label>
              <div className="custom-select">
                <Field as="select" name="socialCategory">
                  <option value="">--Select--</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="Other">Other</option>
                </Field>
              </div>
              <ErrorMessage name="socialCategory" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Mother's Profession</label>
              <Field type="text" name="mothersProfession" placeholder="Enter mother's profession" />
              <ErrorMessage name="mothersProfession" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Father's Profession</label>
              <Field type="text" name="fathersProfession" placeholder="Enter father's profession" />
              <ErrorMessage name="fathersProfession" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Family Income</label>
              <div className="custom-select">
                <Field as="select" name="familyIncome">
                  <option value="">--Select--</option>
                  <option value="Less than 1,00,000">Less than 1,00,000</option>
                  <option value="1,00,000 - 3,00,000">1,00,000 - 3,00,000</option>
                  <option value="3,00,000 - 5,00,000">3,00,000 - 5,00,000</option>
                  <option value="More than 5,00,000">More than 5,00,000</option>
                </Field>
              </div>
              <ErrorMessage name="familyIncome" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Do you have a laptop or computer?</label>
              <div role="group" aria-labelledby="hasLaptopOrComputer-group">
                <label>
                  <Field type="radio" name="hasLaptopOrComputer" value="Yes" />
                  Yes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <label>
                  <Field type="radio" name="hasLaptopOrComputer" value="No" />
                  No
                </label>
              </div>
              <ErrorMessage name="hasLaptopOrComputer" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Education Qualification</label>
              <Field type="text" name="educationQualification" placeholder="Enter education qualification" />
              <ErrorMessage name="educationQualification" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Current Education Level</label>
              <div className="custom-select">
                <Field as="select" name="currentEducationLevel">
                  <option value="">--Select--</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                </Field>
              </div>
              <ErrorMessage name="currentEducationLevel" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Mother's Education Level</label>
              <Field type="text" name="mothersEducation" placeholder="Enter mother's education level" />
              <ErrorMessage name="mothersEducation" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Father's Education Level</label>
              <Field type="text" name="fathersEducation" placeholder="Enter father's education level" />
              <ErrorMessage name="fathersEducation" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Board in 12th</label>
              <Field type="text" name="boardIn12th" placeholder="Enter board in 12th" />
              <ErrorMessage name="boardIn12th" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Location of College in 10th</label>
              <Field type="text" name="collegeLocationIn10th" placeholder="Enter location of college in 10th" />
              <ErrorMessage name="collegeLocationIn10th" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Medium of Education in 12th</label>
              <Field type="text" name="mediumOfEducationIn12th" placeholder="Enter medium of education in 12th" />
              <ErrorMessage name="mediumOfEducationIn12th" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Medium of Education in UG</label>
              <Field type="text" name="mediumOfEducationInUG" placeholder="Enter medium of education in UG" />
              <ErrorMessage name="mediumOfEducationInUG" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Exam Preparation Details</label>
              <Field type="text" name="preparingForExams" placeholder="Enter exam preparation details" />
              <ErrorMessage name="preparingForExams" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Desired Institute</label>
              <Field type="text" name="desiredInstitute" placeholder="Enter desired institute" />
              <ErrorMessage name="desiredInstitute" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Interest of Study</label>
              <Field type="text" name="interestOfStudy" placeholder="Enter interest of study" />
              <ErrorMessage name="interestOfStudy" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>Upload Photo</label>
              <input id="file" name="photo" type="file" onChange={(event) => {
                setFieldValue("photo", event.currentTarget.files[0]);
              }} className="form-control" />
              <ErrorMessage name="photo" component="div" className="error" />
            </div>

            <div className="form-group">
              <label>
                <Field type="checkbox" name="declaration" />
                &nbsp;&nbsp;I hereby declare that all the information provided is true to the best of my knowledge.
              </label>
              <ErrorMessage name="declaration" component="div" className="error" />
            </div>
              <Link to="/mentor-selection">
              <button type="submit" className="btn-submit">Submit</button>
              </Link>

            </div></div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;