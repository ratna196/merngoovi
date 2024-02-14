import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import validation from './LoginValidation';

const Register1 = () => {
    const [allchecked, setAllChecked] = React.useState([]);
    const [values, setValues] = useState({})


    const [errors, setErrors] = useState({})


    const navigate = useNavigate();

    const handleCheckbox = (e) => {
        if (e.target.checked) {

            setAllChecked([...allchecked, e.target.value]);



        } else {
            setAllChecked(allchecked.filter((item) => item !== e.target.value));
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;


        setValues(values => ({ ...values, [name]: value }))
        if(event.target.type == "checkbox" ){
        if (event.target.checked) {

            setAllChecked([...allchecked, event.target.value]);



        } else {
            setAllChecked(allchecked.filter((item) => item !== event.target.value));
        }
      // setValues(values => ({ ...values, [name]: allchecked.toString }))

    }


    }




    


    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values))

        console.log(allchecked)
       setValues({ ...values, course: allchecked.toString()})
        console.log(values)





        if (errors.password === "" && errors.email === "") {

            axios.post('http://localhost:3001/register', { values })
                .then(result => {
                    console.log(result);
                    if (result.data === "Already registered") {
                        alert("E-mail already registered! Please Login to proceed.");
                        navigate('/login');
                    }
                    else {
                        alert("Registered successfully! Please Login to proceed.")
                        navigate('/login');
                    }

                })
                .catch(err => console.log(err));
        }
        else
            console.log('issue')
    }//no error Then POST API will be called...

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}>
                <div className="bg-black p-3 rounded" style={{ width: '50%',color:'white' ,marginTop:20}}>
                    <h2 className='mb-3 text-primary'>Register</h2>
                    <form onSubmit={handleSubmit}  >
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong >Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="form-control"
                                id="exampleInputname"
                                name="name"

                                value={values.name}
                                //onChange={(event) => { setName(event.target.value) }}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control"
                                id="exampleInputEmail1"
                                name="email"
                                value={values.email}
                                onChange={handleChange}

                                //onChange={(event) => { setEmail(event.target.value) }}
                                required
                            />
                            {errors.email && <span className='text-danger'>{errors.email}</span>}
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="form-control"
                                id="exampleInputPassword1"
                                name="password"
                                value={values.password}
                                //onChange={(event) => {setPassword(event.target.value)}}
                                onChange={handleChange}

                                // onKeyUp={passwordValidate}

                                required></input>

                            {errors.password && <span className='text-danger'>{errors.password}</span>}

                        </div>
                        <div className="mb-3 text-start">
                        <label > <strong >Please select Country..</strong></label>
                            <select value={values.country} name="country" onChange={handleChange}>
                                <option value="USA">USA</option>
                                <option value="INDIA">INDIA</option>
                                <option value="UK">UK</option>
                            </select>
                        </div>

                        <div >
                            <label> <strong >Please select course..</strong></label>
                          <input value="ReactJS" type="checkbox" name="course" onChange={handleCheckbox} />
                            ReactJS &nbsp;&nbsp;
                            <input value="Angular" type="checkbox" name="course" onChange={handleCheckbox} />
                            Angular &nbsp;&nbsp;
                            <input value="NodeJS" type="checkbox" name="course" onChange={handleCheckbox} />
                             NodeJS &nbsp;&nbsp;
                        </div>
                       
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>

                  <p>already have an account?</p>
                    <Link to='/login' className="btn btn-secondary">Login</Link>
                </div>
            </div>
        </div>
    )
}
export default Register1