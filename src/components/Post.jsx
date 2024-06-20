import { useRef } from "react";

const Post = ({ addPost }) => {
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const hashtagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const hashtags = hashtagsElement.current.value.split(" ");
    addPost(title, body, reactions, hashtags);

    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    hashtagsElement.current.value = "";
  };
  return (
    <form style={{ margin: "10px" }} onSubmit={handleSubmit}>
      <div class="mb-3">
        <label htmlFor="title" class="form-label">
          Post Title
        </label>
        <input
          type="input"
          class="form-control"
          id="title"
          placeholder="Enter Post Title"
          ref={titleElement}
        />
      </div>
      <div class="mb-3">
        <label htmlFor="body" class="form-label">
          Write something
        </label>
        <textarea
          type="input"
          class="form-control"
          id="body"
          placeholder="Tell us something more"
          rows="5"
          ref={bodyElement}
        />
        <div class="mb-3">
          <label htmlFor="reactions" class="form-label">
            Reactions
          </label>
          <input
            type="input"
            class="form-control"
            id="reactions"
            placeholder="Enter Number(s) Of Reactions"
            ref={reactionsElement}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="hashtags" class="form-label">
            Hashtags
          </label>
          <input
            type="input"
            class="form-control"
            id="hashtags"
            placeholder="Enter Hashtags"
            ref={hashtagsElement}
          />
        </div>
      </div>

      <button type="submit" class="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default Post;
