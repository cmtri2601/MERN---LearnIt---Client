import { useContext } from 'react';
import { Button } from 'react-bootstrap';

import { PostContext } from '../../contexts/post-context';

import playIcon from '../../assets/play.svg';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';

const ActionButtons = ({ url, _id }) => {
  const {
    postState: { posts },
    deletePost,
    setShowUpdateModal,
    setCurrentUpdateCourse,
    setShowToast,
  } = useContext(PostContext);

  const updateHandler = () => {
    setCurrentUpdateCourse(posts.find(course => course._id === _id));
    setShowUpdateModal(true);
  };

  const deleteHandler = async () => {
    const { success, message } = await deletePost(_id);
    setShowToast({ show: true, success, message });
  };

  return (
    <>
      <Button
        href={url}
        target='_blank'
        variant='light'
        className='py-0 px-1 me-1 border-3 border-info'
      >
        <img
          alt='play'
          src={playIcon}
          width='23'
          height='23'
          className='d-inline-block align-top'
        />
      </Button>

      <Button
        variant='light'
        className='py-0 px-1 me-1 border-3 border-warning'
        onClick={updateHandler}
      >
        <img
          alt='edit'
          src={editIcon}
          width='20'
          height='20'
          className='d-inline-block align-top'
        />
      </Button>

      <Button
        variant='light'
        className='py-0 px-1 border-3 border-danger'
        onClick={deleteHandler}
      >
        <img
          alt='delete'
          src={deleteIcon}
          width='20'
          height='20'
          className='d-inline-block align-top'
        />
      </Button>
    </>
  );
};

export default ActionButtons;
