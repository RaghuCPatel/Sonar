import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from '../../Components/Footer';
import './Auth.css';

const ResetPasswordFailed = () => {
    const navigate = useNavigate()

    return (
        <Box>
            <div className="login-fields">
                <Box className="inner-panel"
                >
                    <Box>
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={2}
                        >
                            <img width='100' src='../../igs_logo.png' />
                            <p className="test-viz-logo" color='primary' variant="h5">Test-Viz</p>
                        </Stack>
                    </Box>
                    <p className="welcome-text" sx={{ mt: 3 }}>
                        Sorry, your token is expired!
                    </p>
                    <Typography sx={{ width: 400, textAlign: 'center' }}>
                        Please send request again for reset password.
                    </Typography>
                    <Box sx={{
                        width: 500,
                    }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 4 }}
                            onClick={() => navigate('/forgot-password')}
                        >
                            Forgot Password
                        </Button>
                    </Box>
                    <Footer />
                </Box>
            </div>
            <div className="image"></div>
        </Box>
    );
}

export default ResetPasswordFailed;