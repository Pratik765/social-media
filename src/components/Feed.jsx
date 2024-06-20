import { MdDelete } from "react-icons/md";
import Welcome from "./Welcome";
const Feed = ({ defaultFeed, deletePost }) => {
  const handleDelete = (item) => {
    deletePost(item);
    alert("Post deleted");
  };
  return (
    <>
      {defaultFeed.length === 0 && <Welcome />}

      {defaultFeed.map((item) => {
        return (
          <div class="card" style={{ margin: "20px 10px" }}>
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.body}</p>
              <a href="#" class="btn btn-primary">
                {item.hashtags}
              </a>
              <div class="alert alert-success alert" role="alert">
                This post is reacted by {item.reactions} people!
              </div>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                onClick={() => {
                  handleDelete(item);
                }}
              >
                <MdDelete />
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Feed;
