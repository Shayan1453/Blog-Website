import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

// Reuse the AnimatedBackground styled component
const AnimatedBackground = styled(Box)`
    background: linear-gradient(270deg, #2c2c2c, #4a4a4a, #5c5c5c, #707070, #828282, #999999);
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;

    @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: white;
`;

const Contact = () => {
    return (
        <AnimatedBackground>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Text variant="h5"><br /><br />
                    Reach out to me on
                    <Link href="https://www.instagram.com/shayanumair9?igsh=MXI4YTd6MzRoM20zcQ==" color="inherit" target="_blank">
                        <Instagram sx={{ color: '#E4405F' }} />
                    </Link>
                    or send me an Email 
                    <Link href="mailto:shayan19609@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email sx={{ color: '#EA4335' }} />
                    </Link>.
                </Text>
            </Wrapper>
        </AnimatedBackground>
    );
}

export default Contact;
