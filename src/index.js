import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return(
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
        author = 'Jane'
        timeAgo = 'Today at 4:45pm'
        content = 'Nice comment'
        avatar = {faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
        author = 'Sam'
        timeAgo = 'Today at 5:30pm'
        content = 'Hola, i had not read sumething so sweet in a while'
        avatar = {faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
        author = 'Joel'
        timeAgo = 'Yesterday at 8:00pm'
        content = 'Hey, you cute as this post?!'
        avatar = {faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
