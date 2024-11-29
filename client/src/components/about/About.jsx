import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.shutterstock.com/image-illustration/about-us-letters-on-wooden-260nw-258283535.jpg);
 width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #FFFFFF; /* Change text color to white for better readability on black background */
`;

const UnderlinedText = styled('span')`
    color: #FF5722;
    text-decoration: underline;
    text-decoration-color: #FFFFFF; /* White color for underline */
    text-decoration-style: double; /* Double underline */
`;

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

const About = () => {
    return (
        <AnimatedBackground sx={{ minHeight: '100vh', color: '#FFFFFF' }}>
            <Banner />
            <Wrapper>
                <Typography variant="h3" style={{ color: '#FFFFFF' }}>About Me</Typography> {/* White color for headings */}
                <Text variant="h5">
                  Who Am I : <br />
                    <span style={{ color: '#B0BEC5' }}> {/* New color for the specific text */}
                        I am a beginner full-stack developer based in Pakistan with a passion for creative development and fresh website designs. As I continue to grow my skills in the world of full-stack development, I look forward to building innovative and visually appealing web solutions. My aim is to combine functionality with creativity, much like the one you're viewing right now.
                    </span>
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/Shayanumair" color="inherit" target="_blank">
                            <GitHub sx={{ color: '#FFFFFF' }} /> {/* White color for GitHub icon */}
                        </Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have a chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/shayanumair9?igsh=MXI4YTd6MzRoM20zcQ==" color="inherit" target="_blank">
                            <Instagram sx={{ color: '#E4405F' }} /> {/* Color for Instagram icon */}
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:shayan19609@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email sx={{ color: '#EA4335' }} /> {/* Color for Email icon */}
                        </Link>.
                </Text>
            </Wrapper>
        </AnimatedBackground>
    );
}

export default About;
