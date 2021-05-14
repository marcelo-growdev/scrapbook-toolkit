import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  Box, Button, Grid, TextField,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import { addCard, selectIds } from '../../store/cards/cardsSlice';

import useStyles from './styles';

export default function Register() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [saved, setSaved] = useState(false);
  const [invalidData, setInvalidData] = useState(false);
  const ids = useSelector(selectIds);

  const max = Math.max(...ids);
  const id = ids.length ? max + 1 : 1;

  function onSave(event) {
    event.preventDefault();
    setInvalidData(false);
    setSaved(false);

    if (!title || !text) {
      setInvalidData(true);
    } else {
      dispatch(addCard({
        id,
        title,
        text,
      }));

      setTitle('');
      setText('');
      setSaved(true);
    }
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item container sm={12} direction="row" justify="flex-start" className={classes.header}>
        <Link to="/" className={classes.btn}>
          <ArrowBack />
        </Link>
      </Grid>
      <Grid item container sm={5} justify="center" alignItems="center" className={classes.formRegister}>
        <form className={classes.formInput}>
          <TextField
            label="Título"
            variant="outlined"
            className={classes.formInput}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={invalidData}
          />
          <TextField
            label="Texto"
            variant="outlined"
            multiline
            rows={4}
            className={classes.formInput}
            value={text}
            onChange={(e) => setText(e.target.value)}
            error={invalidData}
          />
          <Button
            variant="outlined"
            color="primary"
            className={classes.btn}
            onClick={(e) => onSave(e)}
          >
            Salvar
          </Button>
        </form>
        {saved && (
        <Box p={2} mt={2} bgcolor="green" color="primary.contrastText">
          Salva com sucesso
        </Box>
        )}
      </Grid>
    </Grid>
  );
}
