import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { useEffect, useState } from "react";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   isLoading: false,
  //   isError: false,
  // }

  const [comments, setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => async () => {
    if (props.asin !== props.asin) {
      // this.setState({
      //   isLoading: true,
      // });
      setLoading(loading);
      try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
          headers: {
            Authorization: "Bearer inserisci-qui-il-tuo-token",
          },
        });
        console.log(response);
        if (response.ok) {
          let comments = await response.json();
          // this.setState({
          //   comments: comments,
          //   isLoading: false,
          //   isError: false,
          // });
          setComment(comments);
        } else {
          setLoading({ loading: false, error: true });
        }
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading({ loading: false, error: true });
      }
    }
  });

  return (
    <div className="text-center">
      {loading && <Loading />}
      {error && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
