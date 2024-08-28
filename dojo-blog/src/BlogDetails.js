import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {

  const history = useHistory();

  const { id } = useParams()

  const { error, isPending, data: blog } = useFetch('http://localhost:8000/blogs/' + id)

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }



  return (
    <div className="blog-detials">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <h2>Blog Details - New Feature Branch abc{id}</h2>
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );


}

export default BlogDetails;
