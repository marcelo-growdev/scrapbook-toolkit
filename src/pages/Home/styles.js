import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    padding: '20px',
    borderBottom: '1px solid #268689',
    height: '100px',
  },
  formSearch: {
    width: '75%',
  },
  search: {
    width: '100%',
  },
  btn: {
    color: '#268689',
    border: '1px solid #268689',
    padding: '15px',
    textDecoration: 'none',
  },
  cardList: {
    marginTop: '25px',
  },
  card: {
    width: '98%',
    padding: '2%',
    marginBottom: '25px',
  },
}));

export default useStyles;
