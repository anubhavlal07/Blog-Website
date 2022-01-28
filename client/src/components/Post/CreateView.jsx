import { useState,useEffect } from "react";
import {Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { useHistory } from 'react-router-dom';
import { createPost, uploadFile } from "../../services/api";

const Styles = makeStyles((theme) => ({
  container: {
    padding: "0px 100px",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  image: {
    width: "100%",
    height: "50vh",
    objectFit: "cover",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
  },
  textfield: {
    flex: 1,
    fontSize: 24,
    margin: "0px 25px",
  },
  textarea: {
    marginTop: 10,
    width: "100%",
    border: "none",
    fontSize: 20,
    "&:focus-visible": {
      outline: "none",
    },
  },
}));
const initialValues = {
  title: "",
  description: "",
  picture: "",
  username: "anubhavlal",
  categories: "All",
  createdDate: new Date(),
};
const CreateView = () => {
  const classes = Styles();
  const history = useHistory();
  const [post, setPost] = useState(initialValues);
  const [file, setFile] = useState('');
  const [image, setImage] = useState('');
  
  const url = post.picture ? post.picture : "https://images.pexels.com/photos/374631/pexels-photo-374631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  

  useEffect (()=> {
    const getImage = async () =>{
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);
        
        let image = await uploadFile(data);
        post.picture = image.data;
        setImage(image.data);
      }
    }
    getImage();
  }, [file,post])
  const handleChange = (e) =>{
    setPost({...post,[e.target.name]: e.target.value})
  }
  const savePost = async () => {
    await createPost(post);
    history.push('/');
  }

  return (
    <Box className={classes.container}>
      <img src={url} alt="post" className={classes.image} />
      <FormControl className={classes.form}>
        <label htmlFor='fileInput'>
        <AddCircle fontSize="large" color="error" cursor='pointer' />
        </label>
        <input 
          type='file'
          id='fileInput'
          style={{display:'none'}}
          onChange ={(e) => setFile(e.target.files[0])}
        />
        <InputBase
          onChange={(e) => handleChange(e)}
          placeholder="Title ..."
          className={classes.textfield}
          name='title'
        />
        <Button onClick={()=> savePost()} variant="contained" color="primary" cursor='pointer'>Publish</Button>
      </FormControl>
      <TextareaAutosize
        className={classes.textarea}
        minRows={5}
        placeholder="Write your story ..."
        name='description'
        onChange={(e) => handleChange(e)}
      />
    </Box>
  );
};

export default CreateView;