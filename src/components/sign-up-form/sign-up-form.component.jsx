import './sign-up-form.styles.scss'
import React, { useState } from 'react'; //for form validation
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
// import { UserContext } from '../../contexts/user.contex';

import { createAuthUserWithEmailAndPassowrd, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword } = formFields;

    // const { setCurrentUser } = useContext(UserContext);
    const handleSubmit = async (event) => {
        event.preventDefault();
        //check if the passord is the same as confirmed password
        if (password !== confirmPassword) {
            alert('password do not match');
            return;
        }
        //is tring to create a new user
        try {
            //const response = await createAuthUserWithEmailAndPassowrd(email, password)
            const {user} = await createAuthUserWithEmailAndPassowrd(email, password)

            console.log(user);
            // setCurrentUser(user);

            //then passing email and password date into the getDoc func to create a new user (or generate new document)
            await createUserDocumentFromAuth(user, { displayName });

            resetFormFields(); //reset form after we successfully created a user document

                } catch (error){
                    if (error.code === "auth/email-already-in-use") {
                        alert('Cannot create user, email already in use');
                    } else {
                        console.error('user creation encountered an error:', error);
                    }
                }

    };

    console.log(formFields);


//reset form after submit -> set form fields with a default value
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const {name, value} = event.target; //distructure name value from form
        setFormFields({...formFields, [name]: value }); //we need to update only current input field
    };
   

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span> Sign up with you email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    lable="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName" 
                    value={displayName}
                />
                
                {/* <label htmlFor="">Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName}/> */}
                <FormInput 
                    lable="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email" 
                    value={email}
                />
                {/* <label htmlFor="">Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} /> */}
                <FormInput 
                    lable="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password" 
                    value={password}
                />
                {/* <label htmlFor="">Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password}/> */}
                <FormInput 
                    lable="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword" 
                    value={confirmPassword}
                />
                {/* <label htmlFor="">Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                 */}
                <Button type="Submit">Sign Up</Button>
            </form>
        </div>

            );
}

export default SignUpForm;