// Extracting Impurity

// Here's the impure function looks like
const addComment = (userId, comment) => {
  const record = {
    id: Math.random(),
    userId,
    text: comment,
  };

  const element = buildCommentElement(record);
  commentList.appendChild(element);
};

// How about this

const addComment2 = (userId, commentId, comment) => {
  const record = {
    id: commentId,
    userId,
    text: comment,
  };

  return buildCommentElement(record);
};
const commentId = Math.random();
const element = addComment2(16, commentId, "COK");

commentList.appendChild(element);
