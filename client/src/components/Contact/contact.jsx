import { Box, makeStyles, Typography, Link } from "@material-ui/core";
import { GitHub, Instagram, Email } from "@material-ui/icons";

const useStyles = makeStyles({
  banner: {
    backgroundImage: `url(${"http://mrtaba.ir/image/bg2.jpg"})`,
    width: "100%",
    height: "50vh",
    backgroundPosition: "left 0px top -100px",
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

const Contact = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.banner}></Box>
      <Box className={classes.wrapper}>
        <Typography variant="h3">Getting in touch is easy!</Typography>
        <Typography variant="h5" className={classes.text}>
          Need something built or simply want to have chat? Reach out to me on
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://www.instagram.com/_anu_bhav/"
              color="inherit"
              target="_blank"
            >
              <Instagram />
            </Link>
          </Box>
          or send me an Email
          <Link
            href="mailto:anubhavlal.15@gmail.com"
            target="_blank"
            color="inherit"
          >
            <Email />
          </Link>
          . If you are interested, you can view my portfolio here
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://anubhavlal07.github.io/Portfolio/"
              color="inherit"
              target="_blank"
            >
              <GitHub /> - Anubhav Lal
            </Link>
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
