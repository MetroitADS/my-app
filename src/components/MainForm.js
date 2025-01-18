import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
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

export default function MainForm({ formIndex, setFormData }) {
  const classes = useStyles();
  
  const [state, setState] = useState({
    left: false,
  });

  // Изначальные данные формы
  const [formData, setFormDataState] = useState({
    opit: '',
    description: '',
    title: '',
    photopotom: '',
    adress: '',
    phone_number: '',
    email: '',
    description: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Обновляем локальное состояние
    setFormDataState((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Передаем обновленные данные в родительский компонент
    setFormData(formIndex, {
      ...formData,
      [name]: value,
    });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className={clsx(classes.list)}>
      <form>
        <TextField
          required
          name="opit"
          label="Название темы"
          variant="outlined"
          className={classes.textField}
          value={formData.opit || ''}
          onChange={handleChange}
          style={{ width: '27.5vh' }}
        />
        <TextField
          required
          name="description"
          label="Описание"
          variant="outlined"
          className={classes.textField}
          value={formData.description || ''}
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
      {['Описание'].map((anchor) => (
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
