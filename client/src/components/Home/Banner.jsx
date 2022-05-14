import { makeStyles, Box, Typography } from "@material-ui/core";
const Styles = makeStyles((theme) => ({
  image: {
    // background: `url(${'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg'}) center/55% repeat-x #000`,
   //  background: `url(/bannerlogo_main.png) #000`,
    background: `url(/peakpx.jpg) #000`,
    width: "100%",
    height: "35vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& :first-child": {
      fontSize: 80,
      fontFamily: 'Special Elite,cursive',
      color: "black",
      [theme.breakpoints.down("sm")]: {
        // lineHeight: 1,
        fontSize: 40,
      },
    },
    // "& :last-child": {
    //   fontSize: 20,
    //   background: "#ffffff",
    // },
  },
}));
const Banner = () => {
  const classes = Styles();
  // const url = 'https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg'
  return (
    <Box className={classes.image}>
      <Typography>BLOGGER'S DEN</Typography>
      {/* <Typography>| 5th Semester Project |</Typography> */}
    </Box>
  );
};
export default Banner;
