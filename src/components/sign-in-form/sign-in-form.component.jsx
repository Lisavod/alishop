import './sign-in-form.styles.scss'
import { useState } from 'react'; //for form validation
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword, 
} from '../../utils/firebase/firebase.utils';
const defaultFormFields = {
    email: '',
    password: '',

}

function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();

        //check if the user with email and password in DB
        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log('This', response)

            resetFormFields(); //reset form after we successfully created a user document

        } catch (error) {
            switch(error.code) {
                case "auth/wrong-password":
                    alert('Incorrect password or email');
                    break;
                case "auth/user-not-found":
                    alert('No user associated with this email')
                    break;
                default:
                    console.log(error)  
            }
        }
    };

    // console.log(formFields);


    //reset form after submit -> set form fields with a default value
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const SignInWithGoogle = async() => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleChange = (event) => {
        const { name, value } = event.target; //distructure name value from form
        setFormFields({ ...formFields, [name]: value }); //we need to update only current input field
    };


    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span> Sign in with you email and password</span>
            <form onSubmit={handleSubmit}>

                {/* <label htmlFor="">Display Name</label>
            <input type="text" required onChange={handleChange} name="displayName" value={displayName}/> */}
                <FormInput
                    lable="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email} />
                {/* <label htmlFor="">Email</label>
            <input type="email" required onChange={handleChange} name="email" value={email} /> */}
                <FormInput
                    lable="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password} />
                {/* <label htmlFor="">Password</label>
            <input type="password" required onChange={handleChange} name="password" value={password}/> */}

                {/* <label htmlFor="">Confirm Password</label>
            <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
             */}
                <div className='buttons-container'>
                    <Button type="Submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={SignInWithGoogle}>Google sign in</Button>
                </div>
                
            </form>
        </div>

    );
}

export default SignInForm;