import { useContext, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { PostContext } from '../../contexts/post-context';

const UpdatePostModal = () => {
  const {
    showUpdateModal,
    setShowUpdateModal,
    updatePost,
    currentUpdateCourse,
    setCurrentUpdateCourse,
    setShowToast,
  } = useContext(PostContext);

  const [validated, setValidated] = useState(false);

  const { title, description, url, status } = currentUpdateCourse;

  const changeCourseHandler = event => {
    setCurrentUpdateCourse({
      ...currentUpdateCourse,
      [event.target.name]: event.target.value,
    });
  };

  const handleClose = () => {
    setShowUpdateModal(false);
    setCurrentUpdateCourse({
      title: '',
      description: '',
      url: '',
      status: '',
    });
    setValidated(false);
  };

  const submitHandler = async () => {
    if (!title) {
      setValidated(true);
      return;
    }

    const { success, message } = await updatePost(
      currentUpdateCourse._id,
      currentUpdateCourse
    );
    setShowToast({ show: true, success, message });
    handleClose();
  };

  return (
    <>
      <Modal show={showUpdateModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How about your progress?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} style={{ fontWeight: 'bold' }}>
            <Form.Group className='mb-3'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                autoFocus
                required={true}
                name='title'
                value={title}
                onChange={changeCourseHandler}
              />
              <Form.Control.Feedback type='invalid'>
                Title is required!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                name='description'
                value={description}
                onChange={changeCourseHandler}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Link</Form.Label>
              <Form.Control
                type='text'
                name='url'
                value={url}
                onChange={changeCourseHandler}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Status</Form.Label>
              <Form.Select
                name='status'
                value={status}
                onChange={changeCourseHandler}
              >
                <option>TO LEARN</option>
                <option>LEARNING</option>
                <option>LEARNED</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancle
          </Button>
          <Button variant='warning' onClick={submitHandler}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdatePostModal;
