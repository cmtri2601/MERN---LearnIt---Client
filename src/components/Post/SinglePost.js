import { Card, Badge } from 'react-bootstrap';

import ActionButtons from './ActionButtons';

const SinglePost = ({ post: { title, description, status, url, _id } }) => {
  const theme =
    status === 'TO LEARN'
      ? 'info'
      : status === 'LEARNING'
      ? 'warning'
      : 'success';

  return (
    <Card border={theme}>
      <Card.Header className='d-flex justify-content-end'>
        <ActionButtons url={url} _id={_id} />
      </Card.Header>
      <Card.Body className='text-center'>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='overflow'>{description}</Card.Text>
        <Badge bg={theme}>{status}</Badge>
      </Card.Body>
    </Card>
  );
};

export default SinglePost;
