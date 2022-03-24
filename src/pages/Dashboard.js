import { useContext } from 'react';
import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

import addIcon from '../assets/add.svg';

import { PostContext } from '../contexts/post-context';
import ListPost from '../components/Post/ListPost';
import AddPostModal from '../components/Post/AddPostModal';
import UpdatePostModal from '../components/Post/UpdatePostModal';

const Dashboard = () => {
  const {
    postState: { posts },
    setShowAddModal,
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
          <Button variant='primary' onClick={setShowAddModal.bind(this, true)}>
            Add course
          </Button>
        </Card.Body>
      </Card>
    );
  } else {
    content = (
      <>
        <ListPost posts={posts} />

        <OverlayTrigger
          placement='left'
          overlay={
            <Tooltip className='tooltip'>Click here to add course</Tooltip>
          }
        >
          <Button
            className='add-course-button'
            variant='light'
            onClick={setShowAddModal.bind(this, true)}
          >
            <img alt='Add icon' src={addIcon} height={50} width={50} />
          </Button>
        </OverlayTrigger>
      </>
    );
  }

  return (
    <>
      {content}

      <AddPostModal />
      <UpdatePostModal />
    </>
  );
};

export default Dashboard;
