import Post from '../model/post.js';

export const createPost = async (request, response) => {
    try {
        // Log the request body to ensure data is received correctly
        console.log(request.body);

        // Create a new post with the request body
        const post = new Post(request.body);

        // Await the save operation to ensure it completes
        await post.save();

        // Respond with a success message
        response.status(200).json('Post saved successfully');
    } catch (error) {
        // Log the error for debugging
        console.error(error);

        // Respond with an error message
        response.status(500).json({ message: 'Error saving post', error });
    }
}

export const updatePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        if (!post) {
            response.status(404).json({ msg: 'Post not found' });
        }

        await Post.findByIdAndUpdate(request.params.id, { $set: request.body });

        response.status(200).json('Post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const deletePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        await post.delete();

        response.status(200).json('Post deleted successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let category = request.query.category;
    let posts;

    try {
        if (username) 
            posts = await Post.find({ username: username });
        else if (category) 
            posts = await Post.find({ categories: category });
        else 
            posts = await Post.find({});
            
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error);
    }
}
