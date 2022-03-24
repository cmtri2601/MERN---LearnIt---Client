import { useContext, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { PostContext } from '../../contexts/post-context';

const AddPostModal = () => {
  const { showAddModal, setShowAddModal, addPost, setShowToast } =
    useContext(PostContext);

  const [course, setCourse] = useState({
    title: '',
    description: '',
    url: '',
  });

  const [validated, setValidated] = useState(false);

  const { title, description, url } = course;

  const changeCourseHandler = event => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const handleClose = () => {
    setShowAddModal(false);
    setCourse({
      title: '',
      description: '',
      url: '',
    });
    setValidated(false);
  };

  const submitHandler = async () => {
    if (!title) {
      setValidated(true);
      return;
    }
    const { success, message } = await addPost(course);
    setShowToast({ show: true, success, message });
    handleClose();
  };

  return (
    <>
      <Modal show={showAddModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What course do you want to track?</Modal.Title>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancle
          </Button>
          <Button variant='success' onClick={submitHandler}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPostModal;
