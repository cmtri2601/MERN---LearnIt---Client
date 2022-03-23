import { Row, Col } from 'react-bootstrap';

import SinglePost from './SinglePost';

const ListPost = ({ posts }) => {
  const listPost = posts.map(post => (
    <Col key={post._id} className='mb-3'>
      <SinglePost post={post} />
    </Col>
  ));
  return (
    <Row xs={1} sm={2} lg={3} xl={4} className='mx-0 my-3'>
      {listPost}
    </Row>
  );
};

export default ListPost;
