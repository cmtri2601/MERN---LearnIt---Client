import { useContext } from 'react';
import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

import addIcon from '../assets/add.svg';

import { PostContext } from '../contexts/post-context';
import ListPost from '../components/Post/ListPost';

const Dashboard = () => {
  const {
    postState: { posts, isLoadingPost },
    getPosts,
  } = useContext(PostContext);

  let content;
  if (posts.length === 0) {
    content = (
      <Card
        className='text-center m-auto mt-5'
        style={{ width: '40rem', maxWidth: '90%' }}
      >
        <Card.Body>
          <Card.Title>No Course Found</Card.Title>
          <Card.Text>
            You haven't have any course. Click button below to add some
            interesting courses!
          </Card.Text>
          <Button variant='primary'>Add course</Button>
        </Card.Body>
      </Card>
    );
  } else {
    content = <ListPost posts={posts} />;
  }

  return (
    <>
      {content}
      <OverlayTrigger
        placement='left'
        overlay={
          <Tooltip className='tooltip'>Click here to add course</Tooltip>
        }
      >
        <Button className='add-course-button' variant='light'>
          <img src={addIcon} height={50} width={50} />
        </Button>
      </OverlayTrigger>
    </>
  );
};

export default Dashboard;
