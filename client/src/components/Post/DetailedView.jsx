import { Box, makeStyles, Typography } from "@material-ui/core";
import { Edit, Delete}from '@material-ui/icons';
import { useEffect , useState } from "react";
import { Link, useHistory} from "react-router-dom";
import { getPost, deletePost } from "../../services/api";

import Comments from '../Comments/comments';

const Styles=makeStyles((theme) =>({
   container:{
      padding: '0px 100px',
      [theme.breakpoints.down('md')]:{
         padding:0
      }
   },
   image:{
      width: '100%',
      height:'35vh',
      objectFit: 'cover'
   },
   icons:{
      float:'right'
   },
   icon:{
      margin: 5,
      border: '1px solid #878787',
      padding:  5,
      borderRadius:10
   },
   heading:{
      fontSize:38,
      fontWeight: 550,
      textAlign:'center',
      margin: "20px 0px"
   },
   subheading: {
      fontSize:18,
      color: 'grey',
      display:'flex',
      fontWeight: 520,
      margin: "10px 0px",
      [theme.breakpoints.down('sm')]:{
         display:'block'
      }
   },
   details:{
      fontSize:20
   },
   link:{
      color:'inherit',
      textDecoration:'none'
   }
}))
const DetailedView = ({ match }) => {
   const classes = Styles();
   const url = 'https://images.pexels.com/photos/3822335/pexels-photo-3822335.png';
   const history = useHistory();

   const [post,setPost] = useState({});

   useEffect(() => {
      const fetchData = async () => {
         let data = await getPost(match.params.id);
         console.log(data);
         setPost(data);
      }
      fetchData();
   },[match.params.id])
   const deleteBlog= async ()=>{
      await deletePost(post._id);
      history.push('/');
   }
   return(
      <Box className={classes.container}>
         <img src={post.picture || url} alt='banner' className={classes.image}/>
         <Box className={classes.icons}>
            <Link to={`/update/${post._id}`}><Edit className={classes.icon} color='primary'/></Link>
            <Delete onClick={()=> deleteBlog()} className={classes.icon} color='error' cursor='pointer'/>
         </Box>
         <Typography className={classes.heading}>{post.title}</Typography>

         <Box className={classes.subheading}>
            <Typography>Author:&nbsp;
                <Link to={`/?username=${post.username}`} className={classes.link}>
                    <span style={{fontWeight: 550}}>{post.username}</span>
               </Link>
            </Typography>
            <Typography style={{ marginLeft :'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
         </Box>
         <Typography className={classes.details}>{post.description}</Typography>
         <Comments post={post}/>
      </Box>
   )
}
export default DetailedView;