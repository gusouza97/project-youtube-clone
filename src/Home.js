import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Wrapper = styled('div')(({ theme }) => ({
    height: '100vh',
})) 

const Navbar = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',   
}))

const IconMenu = styled(IconButton)(({ theme }) => ({
    paddingRight: theme.spacing(3)
}))

const SpaceMenu = styled('div')(({theme}) => ({
    flexGrow: 1
}))

function Home() {

    return (
        <Wrapper>
             <Box sx={{ flexGrow: 1 }}>
                <Navbar 
                    color="inherit"
                >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <SpaceMenu/>
                        <IconMenu
                            size="large"
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            <VideoCallIcon />
                        </IconMenu>
                        <IconMenu
                            size="large"
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            <AppsIcon />
                        </IconMenu>
                        <IconMenu
                            size="large"
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            <NotificationsNoneIcon />
                        </IconMenu>
                            <Button variant="outlined" color="secondary" startIcon={<AccountCircleIcon />}>Fazer Login</Button>
                    </Toolbar>
                </Navbar>
            </Box>
        </Wrapper>
    )
}

export default Home;