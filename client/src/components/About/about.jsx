import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${"https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg"})`,
    width: "100%",
    height: "50vh",
    backgroundPosition: "left 0px bottom 0px",
    backgroundSize: "cover",
  },
  wrapper: {
    padding: 20,
    "& > *": {
      marginTop: 50,
    },
  },
  text: {
    color: "#878787",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.banner}></Box>
      <Box className={classes.wrapper}>
        <Typography variant="h3">Anubhav Lal & Nehal Deb</Typography>
        <Typography variant="h5" className={classes.text}>
          We are the students of Acharya Institute of Graduate Studies,
          Bangalore, India.
          <br />
          <br />
          The “Blogger’s Den” is developed to overcome the problems prevailing
          in the practicing manual system. This application is supported to
          eliminate and, in some case, reduce the hardships faced by this
          existing system. Moreover, this system is designed for the particular
          need of a single user to carry out operations in a smooth and
          effective manner. <br />
          <br />
          The main challenges to overcome were managing the updated information
          of Blogs and Images. Every person likes to have different category of
          blogs which he/she would like to write on.
          <br />
          <br />
          The application is reduced as much as possible to avoid errors while
          entering the data. No formal knowledge is needed for the user to use
          this system. Thus, by this all proves it is user friendly. It assists
          the user to concentrate on their productivity.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
