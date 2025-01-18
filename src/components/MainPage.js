import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) =>({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(3),
      width: '40ch',
    },

list: {
  width: "31.2vh",
},
fullList: {
  width: 'auto',
},
}));

export default function MainPage({ pageIndex, setPageData }) {
  const classes = useStyles();
  
  const [state, setState] = useState({
    left: false,
  });

  const [pageData, setPageDataState] = useState({
    position: '',
    company: '',
    city: '',
    from_year: '',
    to_year: '',
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`Changing ${name} to ${value}`);
    
    setPageDataState((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setPageData(pageIndex, {
      ...pageData,
      [name]: value,
    });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  const list = (anchor) => (
    <div className={clsx(classes.list)}>
      <form>
        <TextField
          required
          name="position"
          label="Позиция в компании"
          variant="outlined"
          className={classes.textField}
          value={pageData.position || ''}
          onChange={handleChange}
          style={{ width: '27.5vh' }}
        />
          <TextField
          required
          name="company"
          label="Компания (где работали)"
          variant="outlined"
          className={classes.textField}
          value={pageData.company || ''}
          onChange={handleChange}
          style={{ width: '27.5vh' }}
        />
          <TextField
          required
          name="to_year"
          label="Года работы"
          variant="outlined"
          className={classes.textField}
          value={pageData.to_year || ''}
          onChange={handleChange}
          style={{ width: '27.5vh' }}
        />
          <TextField
          required
          name="description"
          label="Описание"
          variant="outlined"
          className={classes.textField}
          value={pageData.description || ''}
          onChange={handleChange}
          style={{ width: '27.5vh' }}
          multiline 
          rows={4} 
          inputProps={{ maxLength: 300 }} 
        />

      </form>
    </div>
  );
  return (
    <form className={classes.root} noValidate autoComplete="off">
    <div>
      {['Опыт'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
    </form>
  );
}
