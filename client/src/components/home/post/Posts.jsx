import { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { API } from '../../../service/api';

// components
import Post from './Post';

const Posts = () => {
    const [posts, getPosts] = useState([]);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => { 
            try {
                let response = await API.getAllPosts({ category: category || '' });
                if (response.isSuccess) {
                    getPosts(response.data);
                } else {
                    // Handle error here, e.g., show a message
                    console.error('Failed to fetch posts');
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }
        fetchData();
    }, [category]);

    return (
        <>
            {
                posts.length ? posts.map(post => (
                    <Grid key={post._id} item lg={3} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                )) : (
                    <Box style={{color: '#878787', margin: '140px 370px', fontSize: 18}}>
                        No data is available for the selected category
                    </Box>
                )
            }
        </>
    )
}

export default Posts;
