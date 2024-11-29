import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Phone } from '@mui/icons-material'; // Import Phone icon

const Component = styled(AppBar)`
    background: linear-gradient(to right, #ff7e5f, #feb47b); /* Gradient with shades */
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: normal; /* Default font weight */
        transition: all 0.3s ease; /* Smooth transition for the hover effect */
    }
    & > a:hover {
        font-weight: bold; /* Make text bold on hover */
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* 3D effect with text shadow */
    }
`;

const LogoutButton = styled(Button)`
    background-color: #f44336; /* Red color */
    color: #ffffff;
    &:hover {
        background-color: #d32f2f; /* Darker red on hover */
    }
`;

const ContactIcon = styled(Phone)`
    color: #007bff; /* Blue color */
    font-size: 24px; /* Default size */
    transition: all 0.3s ease; /* Smooth transition for the hover effect */
    &:hover {
        color: #0056b3; /* Darker blue on hover */
        transform: scale(1.1); /* Slightly enlarge icon on hover */
    }
`;

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => {
        // Add your logout logic here if needed
        navigate('/account');
    };

    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>
                    <ContactIcon /> {/* Use Phone icon for contact */}
                </Link>
                <LogoutButton onClick={logout}>LOGOUT</LogoutButton>
            </Container>
        </Component>
    );
}

export default Header;
