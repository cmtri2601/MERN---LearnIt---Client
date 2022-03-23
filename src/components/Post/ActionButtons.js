import { Button } from 'react-bootstrap';

import playIcon from '../../assets/play.svg';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';

const ActionButtons = ({ url }) => {
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
      >
        <img
          alt='edit'
          src={editIcon}
          width='20'
          height='20'
          className='d-inline-block align-top'
        />
      </Button>

      <Button variant='light' className='py-0 px-1 border-3 border-danger'>
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
