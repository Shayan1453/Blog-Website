import React, { useState, useEffect, useContext } from 'react';
import { TextField, Box, Button, Typography, styled, Snackbar, Alert, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// Styled component for body background with multi-shade animation
const BodyBackground = styled('div')`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #ff7e5f, #feb47b, #ff7e5f);
    background-size: 300% 300%;
    animation: gradientAnimation 15s ease infinite;

    @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;

// Styled component with a vibrant gradient background for the login/signup form
const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 0.6);
    border-radius: 10px;
    background: linear-gradient(135deg, #ff6b6b, #f7d94c, #48dbfb);
    color: white;
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    &:hover { background: #C0C0C0; }
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    &:hover { background: #C0C0C0; }
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

// Bubble-like TextField Style
const BubbleTextField = styled(TextField)`
    & .MuiOutlinedInput-root {
        border-radius: 25px;
        background-color: rgba(255, 255, 255, 0.2);
        &.Mui-focused {
            background-color: rgba(255, 255, 255, 0.3);
        }
    }

    & .MuiInputLabel-root {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
        transition: all 0.3s ease;
    }

    & .MuiInputBase-input {
        padding: 15px 12px;
        color: white;
    }

    & .MuiOutlinedInput-notchedOutline {
        border: none;
    }
`;

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [isNameValid, setIsNameValid] = useState(true);
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isUsernameFocused, setIsUsernameFocused] = useState(false);  // Track if username is focused

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    useEffect(() => {
        showError('');
    }, [login]);

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const onInputChange = (e) => {
        let value = e.target.value;

        // Validate Name
        if (e.target.name === 'name') {
            // Auto capitalize the name
            value = value.replace(/\b\w/g, (char) => char.toUpperCase());
            setSignup({ ...signup, name: value });

            // Name should only contain letters and spaces
            setIsNameValid(/^[A-Za-z ]+$/.test(value));
        }

        // Validate Username (letters and digits)
        if (e.target.name === 'username') {
            value = value.toLowerCase(); // Optional: convert username to lowercase
            setSignup({ ...signup, username: value });

            // Username should contain both letters and digits
            setIsUsernameValid(/^[A-Za-z0-9]+$/.test(value));
        }

        // Validate Password (removed validation as per the latest request)
        if (e.target.name === 'password') {
            setSignup({ ...signup, password: value });

            // Password validation removed
            setIsPasswordValid(true);  // No error for password now
        }

        // Update other fields
        setSignup({ ...signup, [e.target.name]: value });
    };

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');
            setSnackbarMessage('');
            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            
            isUserAuthenticated(true);
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            setSnackbarMessage(response.code === 401 ? 'Incorrect username or password' : 'Something went wrong! Please try again later');
            setOpenSnackbar(true);
        }
    };

    const signupUser = async () => {
        if (signup.password !== signup.confirmPassword) {
            showError('Passwords do not match');
            return;
        }

        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
            
            setSuccessMessage('Successfully signed up! Please log in.');
            setOpenSnackbar(true);
        } else {
            showError(response.code === 409 ? 'Username already exists' : 'Something went wrong! Please try again later');
        }
    };

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
        setSuccessMessage('');
    };

    return (
        <BodyBackground>
            <Component>
                <Box>
                    <img src={imageURL} alt="blog" style={{ width: 100, margin: '50px auto 0', display: 'block' }} />
                    {
                        account === 'login' ? (
                            <Wrapper>
                                <BubbleTextField 
                                    variant="outlined" 
                                    value={login.username} 
                                    onChange={onValueChange} 
                                    name='username' 
                                    label='Enter Username' 
                                    fullWidth 
                                    required 
                                    InputLabelProps={{
                                        shrink: login.username.length > 0,
                                    }}
                                />
                                <BubbleTextField 
                                    variant="outlined" 
                                    type={showPassword ? 'text' : 'password'}
                                    value={login.password} 
                                    onChange={onValueChange} 
                                    name='password' 
                                    label='Enter Password' 
                                    fullWidth 
                                    required 
                                    InputLabelProps={{
                                        shrink: login.password.length > 0,
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton onClick={togglePasswordVisibility} edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        )
                                    }}
                                />
                                {error && <Error>{error}</Error>}
                                <LoginButton variant="contained" onClick={loginUser}>Login</LoginButton>
                                <Text style={{ textAlign: 'center' }}>OR</Text>
                                <SignupButton onClick={toggleSignup} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                            </Wrapper>
                        ) : (
                            <Wrapper>
                                <BubbleTextField 
                                    variant="outlined" 
                                    value={signup.name}
                                    onChange={onInputChange} 
                                    name='name' 
                                    label='Enter Name' 
                                    fullWidth 
                                    required 
                                    InputLabelProps={{
                                        shrink: signup.name.length > 0,
                                    }}
                                />
                                <BubbleTextField 
                                    variant="outlined" 
                                    value={signup.username}
                                    onChange={onInputChange} 
                                    name='username' 
                                    label='Enter Username' 
                                    fullWidth 
                                    required 
                                    onFocus={() => setIsUsernameFocused(true)}  // Set focus
                                    onBlur={() => setIsUsernameFocused(false)}   // Remove focus
                                    InputLabelProps={{
                                        shrink: signup.username.length > 0,
                                    }}
                                    error={!isUsernameValid && isUsernameFocused}  // Show error only when invalid and focused
                                    helperText={!isUsernameValid && isUsernameFocused ? "Username should contain both letters and digits" : ""}
                                    FormHelperTextProps={{
                                        style: {
                                            color: !isUsernameValid && isUsernameFocused ? 'green' : 'transparent',
                                        },
                                    }}
                                />
                                <BubbleTextField 
                                    variant="outlined" 
                                    type={showPassword ? 'text' : 'password'}
                                    value={signup.password}
                                    onChange={onInputChange} 
                                    name='password' 
                                    label='Enter Password' 
                                    fullWidth 
                                    required 
                                    InputLabelProps={{
                                        shrink: signup.password.length > 0,
                                    }}
                                />
                                <BubbleTextField 
                                    variant="outlined" 
                                    type={showPassword ? 'text' : 'password'}
                                    value={signup.confirmPassword}
                                    onChange={onInputChange} 
                                    name='confirmPassword' 
                                    label='Confirm Password' 
                                    fullWidth 
                                    required 
                                    InputLabelProps={{
                                        shrink: signup.confirmPassword.length > 0,
                                    }}
                                />
                                {error && <Error>{error}</Error>}
                                <SignupButton onClick={signupUser}>Signup</SignupButton>
                                <Text style={{ textAlign: 'center' }}>OR</Text>
                                <LoginButton variant="contained" onClick={toggleSignup} style={{ marginBottom: 50 }}>Already have an account</LoginButton>
                            </Wrapper>
                        )
                    }
                </Box>

                <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleSnackbarClose}>
                    <Alert onClose={handleSnackbarClose} severity={successMessage ? "success" : "error"}>
                        {successMessage ? successMessage : snackbarMessage}
                    </Alert>
                </Snackbar>
            </Component>
        </BodyBackground>
    );
};

export default Login;
