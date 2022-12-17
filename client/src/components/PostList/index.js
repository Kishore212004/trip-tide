import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

import { QUERY_ME } from '../../utils/queries';
import LikeButton from '../LikeButton';
import DeleteButton from '../DeleteButton';

const PostList = ({ posts, posts: { _id, likes, likeCount } }) => {
  const { username: userParam } = useParams();
  const { data } = useQuery(QUERY_ME, {
    variables: { username: userParam }
  });
  const user = data?.me || {};

  return (
    <>
    {posts &&
      posts.map((post) => (
      <article key={post._id} className="bg-gray-50 mx-1 my-2 p-4 break-inside-avoid flex flex-col rounded-md shadow-lg hover:shadow-slate-400 transition-all ease-in duration-300">
        <div className="flex items-center">
          <div className="mr-4">
            <img
              src="https://randomuser.me/api/portraits/women/18.jpg"
              alt="user icon"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div>
            <Link
              to={`/profile/${post.username}`}
              className="font-semibold text-teal-400 hover:text-gray-500 uppercase tracking-widest"
            >
              {post.username}
            </Link>
            <p className="text-gray-400 text-sm">{post.createdAt}</p>
          </div>
        </div>
        <h3 className="my-4">
          <Link
            to={`/post/${post._id}`}
            className="text-left hover:text-teal-300"
          >
            {post.postTitle}
          </Link>
        </h3>
        <div className="card-body">
          <p>{post.postText}</p>
          <div className="mt-4 flex justify-between items-center text-gray-500 text-xs md:text-sm">
            <div className="inline-flex">
              <Link to={`/post/${post._id}`} className="mr-4 flex items-center text-teal-400 hover:text-gray-500">
                <ChatBubbleLeftRightIcon width={20} className="mr-1" /> {post.commentCount} {post.commentCount === 1 ? 'comment' : 'comments' }
              </Link>

              <LikeButton user={post.user} posts={{ _id, likes, likeCount }} />
            </div>
            <div>
              {/* gives user the option to delete their own post */}
              {user && post.username === user.username && (<DeleteButton postId={post._id} />)}
            </div>
          </div>
        </div>
      </article>
      ))}
    </>
  );
};

export default PostList;