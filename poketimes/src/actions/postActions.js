export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        // id: id //property : value (same name)
        id
    }
}