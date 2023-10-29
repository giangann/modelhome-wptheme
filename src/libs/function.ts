export function updatePostStorage(postId: number, newContent: string) {
  const listPostStorage = localStorage.getItem('list-post');

  console.log('postStorage', listPostStorage);
}
