const initState = {
    posts: [
        {id: '1', title: 'sunt aut facere repellat', body: 'quia et suscipitderit molestiae ut ut quashdghdtfygheudjhfju ghdgsyge'},
        {id: '2', title: 'qui est esse', body: 'est rerum tempore vitaesequi sint nihil reprehenderit ftrtwdr4ghdhgfyhdggdfjbgcbj'},
        {id: '3', title: 'ea molestias qua', body: 'et iusto sed quo iurevoluptatem occaecati omnis th loremghdghgfhjhjgbhgbhgtyhgg'}
    ]
}

const rootReducer = (state = initState, action) => {
   if (action.type === 'DELETE_POST') {
     let newPosts = state.posts.filter(post => {
       return action.id !== post.id
     });
     return {
       ...state,
       posts: newPosts
     }
   }
    return state;
}

export default rootReducer;