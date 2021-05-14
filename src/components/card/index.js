import React from 'react';
import { useDispatch } from 'react-redux';

import {
  Card, CardActions, CardContent, Grid, IconButton, TextField, Typography,
} from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';

import useStyles from './styles';
import { removeCard } from '../../store/cards/cardsSlice';

export default function CardComponent({ card }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeCard(id));
  };

  return (
    <Grid item container xs={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4">
            {card.title}
          </Typography>
          <Typography variant="h6">
            {card.text}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            onClick={() => handleDelete(card.id)}
            size="small"
            color="secondary"
          >
            <DeleteForever />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
