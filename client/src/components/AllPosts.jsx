
import { useEffect, useState } from "react";
import Header from "./Header";
import { getAllPosts, deletePost } from "../services/api";
import { Box, Button, Typography, Card, CardContent, InputBase, styled } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';


const SearchWrapper = styled(Box)({
  margin: 74,
  display: "flex",
  justifyContent: "center",
  "& > div": {
    width: 500,
    height: 45,
    border: "1px solid #767676",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    marginRight: 20,
    paddingLeft: 10,
  },
});

const PostWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: 50,
  flexWrap: "wrap",
  "& > div": {
    border: "1px solid #442d0",
    borderRadius: 10,
    margin: 10,
    width: "30%",
    height: 350,
    position: "relative",
  },
});

const DeleteButton = styled(Button)({
  position: "absolute",
  top: 10,
  right: 10,
  zIndex: 1,
});

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  const fetchPosts = async () => {
    try {
      const response = await getAllPosts();
      setPosts(response.data || []);
      console.log("Posts loaded:", response.data?.length); 
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // ✅DELETE FUNCTION 
  const handleDelete = async (id) => {
    console.log("Delete clicked for ID: ", id); 
    
    if (!id) {
      alert("Invalid post ID!");
      return;
    }

    if (window.confirm("Are you sure you want to delete this job post?")) {
      try {
        console.log("Attempting to delete post with ID:", id); 
        const response = await deletePost(id);
        console.log("Delete response:", response); 
        
        alert("Post deleted successfully!");
        await fetchPosts(); 
      } catch (error) {
        console.error("Delete error:", error.response || error); 
        alert(
          "Delete failed! Check console for details. Error: " + 
          (error.response?.data?.message || error.message || "Unknown error")
        );
      }
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <SearchWrapper>
          <InputBase
            placeholder="Search by Job Title"
            onChange={(e) => setText(e.target.value)}
            value={text}

            startAdornment={
          <InputAdornment position="end">
             🔍  
          </InputAdornment>
           }
        />

               {/*Search Button*/}
         <Button
             variant="contained"
             sx={{                      
                  backgroundColor: '#1a73e8', 
                  color: 'white',
                  minWidth: '100px',
                  height: 43,       
                  borderRadius: 10,
                  '&:hover': { backgroundColor: '#1557b0' }
                }}
                  onClick={() => {
                  console.log('Searching for:', text);
                  setPosts([...posts]);                  
                }}
              >
                Find Jobs
              </Button>
      </SearchWrapper>

      <PostWrapper>
        {posts
          .filter((post) =>
            post.profile?.toLowerCase().includes(text.toLowerCase())
          )
          .map((post) => (
            <Card key={post._id} sx={{ height: "100%" }}>
              <DeleteButton
                variant="outlined"
                color="error"
                size="small"
                onClick={() => handleDelete(post._id || post.id)}
              >
                Delete
              </DeleteButton>

              <CardContent sx={{ paddingTop: "40px" }}>
                <Typography variant="h5" gutterBottom> {post.profile || "No Company"} </Typography>

                <Typography variant="h7" color="text.secondary" gutterBottom>{post.type || 'No Job Title'}</Typography>

                <Typography gutterBottom> Salary: {post.salary}</Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {post.description?.length > 150 ? post.description.substring(0, 150) + "...": post.description}</Typography>
                  
                <Typography variant="body2" gutterBottom> Experience: {post.experience} </Typography>
                <Typography variant="body2" gutterBottom> Technology: {post.technology ? String(post.technology).split(',').join(', ') : 'None'} </Typography>   
              
                <Typography variant="caption" color="text.secondary">
                  Posted on {new Date(post.createdAt).toLocaleDateString()} </Typography>
              </CardContent>
            </Card>
          ))}
      </PostWrapper>
    </>
  );
};

export default AllPosts;








