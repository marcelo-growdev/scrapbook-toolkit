import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Container,
  Grid, TextField,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

import useStyles from './styles';
import { selectCards } from '../../store/cards/cardsSlice';
import CardComponent from '../../components/card';

export default function Home() {
  const classes = useStyles();
  const cardsRedux = useSelector(selectCards);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsRedux);
  }, [cardsRedux]);

  return (
    <Container>
      <Grid container spacing={3} direction="column">
        <Grid item container sm={12} direction="row" justify="flex-end" className={classes.header}>
          <Grid item container sm={7} justify="flex-end" alignItems="center">
            <form>
              <TextField label="Pesquisar..." variant="outlined" className={classes.search} />
            </form>
          </Grid>
          <Grid item container sm={5} justify="flex-end">
            <Link to="/register" className={classes.btn}>
              <Add />
            </Link>
          </Grid>
        </Grid>
        <Grid item container xs={12} className={classes.cardList}>
          {cards.map((item) => <CardComponent key={item.id} card={item} />)}
        </Grid>
      </Grid>
    </Container>
  );
}
