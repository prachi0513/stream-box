import React from "react";

const comments = [
  {
    name: "akaksh",
    comment: "Namaste React",
    replies: [
      {
        name: "test user",
        comment: "recommended list",
        replies: [
          {
            name: "user2",
            comment: "nested reply",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "user1",
    comment: "recommended list",
    replies: [],
  },
];

export const Comment = ({ com }) => {
  const { name, comment, replies } = com;
  return (
    <div className="ml-24 my-2 p-2 rounded border-l">
      <p className="text-white">
        👤 {name}: {comment}
      </p>
      <CommentList data={replies} />
    </div>
  );
};

const CommentList = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => {
        return <Comment key={item.name} com={item} />;
      })}
    </div>
  );
};
const CommentContainer = () => {
  return <div>{<CommentList data={comments} />}</div>;
};

export default CommentContainer;
