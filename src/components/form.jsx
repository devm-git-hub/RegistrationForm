import React from 'react'
import './form.css'

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted')
    }
  return (
    <div className="container">
        <h2>Registration Form</h2>
        <form action="#" method="post" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" />
            </div>
            <div className="form-group">
                <label>Gender:</label>
                <div className="gender-options">
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">Female</label>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="country">Country:</label>
                <select id="country" name="country">
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                    <option value="india">India</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="bio">Bio:</label>
                <textarea id="bio" name="bio" rows="4"></textarea>
            </div>
            <div className="button-group">
                <input type="submit" value="Register" />
                <input type="reset" value="Reset" />
            </div>
        </form>
    </div>
  )
}

export default Form


