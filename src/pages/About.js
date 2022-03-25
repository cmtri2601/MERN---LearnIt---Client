import { Card } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <Card
        className='m-auto mt-5'
        style={{ width: '400px', textAlign: 'center', fontWeight: 'bolder' }}
      >
        <Card.Body>
          Click{' '}
          <a href='https://www.youtube.com/' target='_blank'>
            here
          </a>{' '}
          to find more interesting course
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
