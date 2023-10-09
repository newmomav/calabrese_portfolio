import { Grid, Hidden, Paper } from '@mui/material';
import { Logo } from '../components/Logo';
import { DarkMode } from '../components/DarkMode/DarkMode';
import { Gif } from '../components/Gif';
import { Navbar } from '../components/Navbar';

const Layout = () => {
  return (
    <>
      <Grid container spacing={0.5} className="h-screen">
        {/* First row */}
        <Grid item xs={8} md={10} className="h-1/5">
          <Logo />
        </Grid>
        <Grid item xs={4} md={2} className="h-1/5">
          <DarkMode />
        </Grid>

        {/* Second Row */}
        <Hidden smDown>
          <Grid item sm={1} md={1} className="h-4/5">
            <Paper style={{ height: '100%', background: 'lightgreen' }}>
              1fr
            </Paper>
          </Grid>
          <Grid item sm={2} md={3} className="h-4/5">
            <Paper style={{ height: '100%', background: 'lightyellow' }}>
              3fr
            </Paper>
          </Grid>
        </Hidden>

        <Grid item xs={8} sm={5} md={6} className="h-4/5">
          <Gif />
        </Grid>
        <Grid item xs={4} md={2} className="h-4/5">
          <Navbar />
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;

// <div
//         className={`transition-opacity ${
//           isLoading ? 'opacity-0' : 'opacity-100'
//         }`}
//       >
//         <Logo />
//         <DarkMode />
//         <Navbar />
//         <HomeButton />
//         <LandingPage />
//         <Info />
//         {/* <MouseFollow /> */}
//         <Button />
//         <Button variant="contained" color="primary">
//           MUI Button
//         </Button>
//       </div>
//     </>
