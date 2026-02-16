import { useState } from 'react';
import Header from './Header'; 
import { Box, styled, Typography, TextField, Button} from '@mui/material';
import PostImage from './post.webp'
import Dropdown from './Dropdown';
import { savePost } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../routes/route';


const Component = styled(Box) ({
    padding:'80px 200px', 
    background: '#F5F5F5'
    
})

const Container = styled(Box) ({
    display: 'flex',
    background: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 70px', 
    '& > p': {
         fontSize: 35,
         fontWeight: 700,
         opacity: '.6'
    }
})

const FormWrapper = styled(Box)({
     display: 'flex',
     flexDirection: 'column',
     marginTop: 20,
     padding: 20,
     background: '#FFFFFF',
     borderRadius: 20,    
     '& > *': {
       marginTop:'10px !important'
     } 
})
      
const defaultobj = {
    profile:"",
    type:"",
    description :"",
    experience:"",
    technology:[],   
    salary:""
}

const options = {
    type: ["Online", "Offline", "Remote"],
    experience: ["0-2 Years", "3-5 Years", "5-8 Years", "8 and more Years"],
    technology: ["Java", "C++", "React", "SpringBoot", "Python", "HTML", "CSS", "MySQL", "MongoDB", "C#", "Javascript","Go","Kotlin","Flutter", "Figma", "Angular", "Node.js", "Docker", "AWS", "Ruby", "R" ],                  
    salary:["Rs 0-300000", "Rs 300000-500000", "Rs 500000-800000", "Rs 800000-1300000", "Rs 130000 and more"]
}


const CreatePost = () => {
    const [data, setData]= useState(defaultobj) ;

    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
      
    const saveJob = async () => {
        await savePost(data);
        navigate(routePath.posts);
    }

  return (
  <>
     <Header/>
      <Component>
           <Container> 
           <Typography> Create a job post </Typography>
             
            <img src={PostImage} alt="post" style={{ width: 350, height: 'auto'}} />
           </Container>
         <FormWrapper>

              <TextField 
                   name="profile"                     
                   label="Profile" 
                   value={data.profile}          
                   onChange={handleChange} 
             />
                        
              <Dropdown
                   label="Job Type"
                   id="job-type-label"
                   value={data.type || ""}  
                   handleChange={handleChange}
                   options={options.type || []}  
                   name="type"
                />

              <TextField
                   placeholder="Job description"
                   name="description"
                   onChange={handleChange}
               />      
              <Dropdown
                  label="Experience"
                  id="job-experience-label"
                  value={data.experience}
                  handleChange={handleChange}
                  options={options.experience}
                  name="experience"
              /> 
              <Dropdown
                   label="Technology"
                   id="job-technology-label"
                   value={data.technology}
                   handleChange={handleChange}
                   options={options.technology}
                   name="technology"
                   multiple
              />
              <Dropdown
                   label="Salary"
                   id="job-salary-label"
                   value={data.salary}
                   handleChange={handleChange}
                   options={options.salary}
                   name="salary"
              />  
              <Button onClick={() => saveJob()} variant="contained">Save Job</Button>
           </FormWrapper>
      </Component>   
  </>
  )
}
export default CreatePost;

