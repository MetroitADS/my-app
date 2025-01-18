import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonPage = ({ onAdd, onDelete }) => {
  return (
    <div>
      {['Add', 'Delete'].map((text, index) => (
        <React.Fragment key={index}>
          <Button variant="contained" color={index === 0 ? "primary" : "secondary"} onClick={index === 0 ? onAdd : onDelete}>
            {text}
          </Button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ButtonPage;
