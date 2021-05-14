import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    padding: '20px',
    borderBottom: '1px solid #268689',
    height: '100px',
  },
  btn: {
    color: '#268689',
    border: '1px solid #268689',
    padding: '15px',
    textDecoration: 'none',
  },
  formRegister: {
    marginTop: '25px',
  },
  formInput: {
    width: '100%',
    marginBottom: '25px',
  },
}));

export default useStyles;
