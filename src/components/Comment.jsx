import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const Comment = ({ product }) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const comments = [
    {
      id: 1,
      author: "Kcee",
      timestamp: "2w",
      comment: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      author: "Shinel",
      timestamp: "2w",
      comment: "Lorem ipsum dolor sit amet fhh bfhghgh",
    },
    {
      id: 3,
      author: "Peace",
      timestamp: "1w",
      comment: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 4,
      author: "Daniel",
      timestamp: "6d",
      comment: "Lorem amet consectetur",
    },
    {
      id: 5,
      author: "Daniel",
      timestamp: "6d",
      comment: "Lorem amet consectetur",
    },
    {
      id: 6,
      author: "Daniel",
      timestamp: "6d",
      comment: "Lorem amet consectetur",
    },
    {
      id: 7,
      author: "Daniel",
      timestamp: "6d",
      comment: "Lorem amet consectetur",
    },
    {
      id: 8,
      author: "Daniel",
      timestamp: "6d",
      comment: "Lorem amet consectetur",
    },
  ];

  return (
    <>
      <label
        className="flex items-center font-bold text-lg justify-between cursor-pointer mb-2"
        onClick={toggleComments}
      >
        Comments
        <p>
          <MdKeyboardArrowDown />
        </p>
      </label>
      {showComments && (
        <>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="comment-1 flex items-start gap-2 pt-1 pb-4"
            >
              <p className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer text-lg">
                {comment.author.charAt(0)}
              </p>
              <div className="flex-1">
                <p className="mb-1">
                  <span className="font-bold text-lg hover:underline cursor-pointer pr-2">
                    {comment.author}
                  </span>
                  <span className="text-base font-normal">{comment.comment}</span>
                </p>
                <div className="flex items-center gap-5 text-gray-500 font-medium text-sm">
                  <p>{comment.timestamp}</p>
                  <p className="cursor-pointer">Reply</p>
                  <p>Like</p>
                  <p className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <BsThreeDots />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Comment;
