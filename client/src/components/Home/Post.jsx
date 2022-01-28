import { Box, Typography, makeStyles } from "@material-ui/core"

const Styles = makeStyles({
   container:{
      height:400,
      margin: 10,
      border:'1px solid #d3cede',
      borderRadius:10,
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      '& > *':{
         padding: '0px 5px 5px 5px'
      }
   },
   image:{
      borderRadius:'10px 10px 0px 0px',
      height:150,
      width:'100%',
      objectFit:'cover'
   },
   text :{
      fontSize: 14,
      fontWeight:550,
      color: 'grey'
   },
   heading:{
      fontSize:19,
      fontWeight:600,
      color:'black',
      textAlign:'center'
   },
   details:{
      fontSize:14,
      fontWeight:550,
      color:'#2A272E',
      wordBreak: 'break-word'
   }
})
const Post = ({ post }) => {
   const classes = Styles();
   const url = post.picture || 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg';

   const addElipsis = (str,limit) => {
      return str.length > limit ? str.substring(0, limit) + ' ...' : str;
   }
   return (
      <Box className= {classes.container}>
         <img src={url} alt='Bannerimage' className= {classes.image}/>
         <Typography className= {classes.text}>{post.categories}</Typography>
         <Typography className= {classes.heading}>{addElipsis(post.title,25)}</Typography>
         <Typography className= {classes.text}>Author: {post.username}</Typography>
         <Typography className= {classes.details}>{addElipsis(post.description,200)}</Typography>
      </Box>
   );
};
export default Post;