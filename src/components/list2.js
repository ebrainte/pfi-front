// import React from 'react';
// const List = (props) => {
//   const { repos, option } = props;
//   if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
//   return (
//     <ul>
//       <h2 className='list-head'>Available Public Repositories</h2>
//       {repos.map((repo) => {
//         if(repo.deviceId === option){
//         return (
//           <li key={repo.id} className='list'>
//             <span className='repo-text'>{repo.deviceId} </span>
//             <span className='repo-description'>{repo.date}</span>
//           </li>
//         );}
//       })}
//     </ul>
//   );
// };
// export default List;



import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';

function createData(matchId, startDate, gameId, data, protein, price) {
  let gameList =[ 
    {
      name: "Puzzle"
    },
    {
      name: "Bubbles"
    },
    {
      name: "Fruity"
    }
  ];
  let game = parseInt(gameId,10);
  gameId = gameList[game-1].name;
  // fat = gameId;
  return {
    matchId,
    startDate,
    gameId,
    history: data
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.matchId}
        </TableCell>
        <TableCell align="right">{row.startDate}</TableCell>
        <TableCell align="right">{row.gameId}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detalle
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha</TableCell>
                    <TableCell align="right">Inicio/Fin</TableCell>
                    <TableCell align="right">Aburrido</TableCell>
                    <TableCell align="right">Tenso</TableCell>
                    <TableCell align="right">Tranquilo</TableCell>
                    <TableCell align="right">Enojado</TableCell>
                    <TableCell align="right">Ansioso</TableCell>
                    <TableCell align="right">Feliz</TableCell>
                    <TableCell align="right">Triste</TableCell>
                    <TableCell align="right">Cansado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    // <TableRow key={historyRow.date}>
                      <TableRow key={(new Date(historyRow.date)).toLocaleDateString()}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                        {/* {(new Date(historyRow.date)).format('DD-MM-YYYY')} */}
                      </TableCell>
                      <TableCell align="right">{historyRow.gameEnding ? "Fin" : "Inicio"}</TableCell>
                      <TableCell align="right">{historyRow.bored ? <CheckTwoToneIcon /> : <ClearTwoToneIcon />}</TableCell>
                      <TableCell align="right">{historyRow.tense ? <CheckTwoToneIcon /> : <ClearTwoToneIcon />}</TableCell>
                      <TableCell align="right">{historyRow.quiet ? <CheckTwoToneIcon /> : <ClearTwoToneIcon />}</TableCell>
                      <TableCell align="right">{historyRow.angry ? <CheckTwoToneIcon /> : <ClearTwoToneIcon />}</TableCell>
                      <TableCell align="right">{historyRow.anxious ? <CheckTwoToneIcon /> : <ClearTwoToneIcon />}</TableCell>
                      <TableCell align="right">{historyRow.happy ? <CheckTwoToneIcon /> : <ClearTwoToneIcon />}</TableCell>
                      <TableCell align="right">{historyRow.sad ? <CheckTwoToneIcon /> : <ClearTwoToneIcon />}</TableCell>
                      <TableCell align="right">{historyRow.tired ? <CheckTwoToneIcon /> : <ClearTwoToneIcon />}</TableCell>
                      <TableCell align="right">
                        {/* {Math.round(historyRow.amount * row.price * 100) / 100} */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.bool.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

export default function list2(props) {
  const { repos, option } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Juego #</TableCell>
            <TableCell align="right">Fecha de Inicio</TableCell>
            <TableCell align="right">Juego</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {repos.map((data) => {
        if(data.deviceId === option){
          const row = createData(data.data[0].randomGameId, data.data[0].date, data.data[0].matchId, data.data);
        return (
          
          <Row key={data.deviceId} row={row} />
        );}
      })}
          {/* {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


