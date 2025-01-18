import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import "../App.css"
import { AcroFormChildClass } from 'jspdf';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
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
  button: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    textTransform: 'none', 
  },
}));

export default function MainInfo({ infoIndex, setInfoData }) {
  const classes = useStyles();
  
  const [state, setState] = useState({
    left: false,
  });

  // Изначальные данные формы
  const [infoData, setInfoDataState] = useState({
    zalupa: '',
    home: '',
    email: '',
    web: '',
    call: '',
    last_name: "",
    first_name: "",
    social_network1: "",
    social_network2: "",
    social_network3: "",
    social_network1web: "",
    social_network2web: "",
    social_network3web: "",
    photo:""

  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Обновляем локальное состояние
    setInfoDataState((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Передаем обновленные данные в родительский компонент
    setInfoData(infoIndex, {
      ...infoData,
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
          name="first_name"
          label="Имя"
          variant="outlined"
          className={classes.textField}
          value={infoData.first_name || ''}
          onChange={handleChange}
          style={{ width: '27.5vh' }}
        />
        <TextField
          required
          name="last_name"
          label="Фамилия"
          variant="outlined"
          className={classes.textField}
          value={infoData.last_name || ''}
          onChange={handleChange}
          style={{ width: '27.5vh' }}
        />
        <TextField
          required
          name="web"
          label="Ссылка на сайт"
          variant="outlined"
          className={classes.textField}
          value={infoData.web || ''}
          onChange={handleChange}
          style={{ width: '27.5vh' }}
        />
        <TextField
          required
          name="call"
          label="Номер телефона"
          variant="outlined"
          className={classes.textField}
          value={infoData.call || ''}
          onChange={handleChange}
          style={{ width: '27.5vh' }}
        />
        <TextField
          required
          name="mail"
          label="Почта"
          variant="outlined"
          className={classes.textField}
          value={infoData.mail || ''}
          onChange={handleChange}
          style={{ width: '27.5vh' }}
        />
        <TextField
          required
          name="home"
          label="Адрес дома"
          variant="outlined"
          className={classes.textField}
          value={infoData.home || ''}
          onChange={handleChange}
          style={{ width: '27.5vh' }}
        />
        <TextField
          required
          name="social_network1web"
          label="Соц сети ссылка"
          variant="outlined"
          className={classes.textField}
          value={infoData.social_network1web || ''}
          onChange={handleChange}
          style={{ width: '27.5vh' }}
        />
        <TextField
          required
          name="social_network2web"
          label="Соц сети ссылка"
          variant="outlined"
          className={classes.textField}
          value={infoData.social_network2web || ''}
          onChange={handleChange}
          style={{ width: '27.5vh' }}
        />
        <TextField
          required
          name="social_network3web"
          label="Соц сети ссылка"
          variant="outlined"
          className={classes.textField}
          value={infoData.social_network3web || ''}
          onChange={handleChange}
          style={{ width: '27.5vh' }}
        />
        <TextField
          required
          name="photo"
          label="Фотография"
          variant="outlined"
          className={classes.textField}
          value={infoData.photo || ''}
          onChange={handleChange}
          style={{ width: '27.5vh' }}
        />

      </form>
    </div>
  );

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        {['Заполнить анкету'].map((anchor) => (
          <React.Fragment key={anchor}>
            <div className="buttons-box">
              <Button className={clsx(classes.button, "outline-hover-button")} onClick={toggleDrawer(anchor, true)}>
                {anchor}
              </Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </div>
          </React.Fragment>
        ))}
      </div>
    </form>
  );
}
