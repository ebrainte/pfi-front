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
import Green from '../images/green.png';
import Red from '../images/red.png';
import UpArrow from '../images/uparrow.png';

function createData(matchId, startDate, gameId, data, protein, price) {
  let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
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
  let date = new Date(startDate).toLocaleDateString('es-AR', dateOptions);
  return {
    matchId,
    date,
    gameId,
    history: data
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return (
    <React.Fragment style={{width: '90%'}}>
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
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.gameId}</TableCell>
        {/* <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
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
                        {historyRow.diff ? "¿Existe Diferencias?" : (new Date(historyRow.date)).toLocaleDateString('es-AR', dateOptions)}
                        {/* {(new Date(historyRow.date)).format('DD-MM-YYYY')} */}
                      </TableCell>
                      <TableCell align="right">{historyRow.diff ? "" : historyRow.gameEnding ? "Fin" : "Inicio"}</TableCell>
                      <TableCell align="right">{historyRow.diff ? (historyRow.bored ? <img src={UpArrow} alt="Logo" width="30" height="30" /> : "" ) : (historyRow.bored ? <img src={Green} alt="Logo" width="30" height="30" /> : <img src={Red} alt="Logo" width="30" height="30" />) }</TableCell>
                      <TableCell align="right">{historyRow.diff ? (historyRow.tense ? <img src={UpArrow} alt="Logo" width="30" height="30" /> : "" ) : (historyRow.tense ? <img src={Green} alt="Logo" width="30" height="30" /> : <img src={Red} alt="Logo" width="30" height="30" />)}</TableCell>
                      <TableCell align="right">{historyRow.diff ? (historyRow.quiet ? <img src={UpArrow} alt="Logo" width="30" height="30" /> : "" ) : (historyRow.quiet ? <img src={Green} alt="Logo" width="30" height="30" /> : <img src={Red} alt="Logo" width="30" height="30" />)}</TableCell>
                      <TableCell align="right">{historyRow.diff ? (historyRow.angry ? <img src={UpArrow} alt="Logo" width="30" height="30" /> : "" ) : (historyRow.angry ? <img src={Green} alt="Logo" width="30" height="30" /> : <img src={Red} alt="Logo" width="30" height="30" />)}</TableCell>
                      <TableCell align="right">{historyRow.diff ? (historyRow.anxious ? <img src={UpArrow} alt="Logo" width="30" height="30" /> : "" ) : (historyRow.anxious ? <img src={Green} alt="Logo" width="30" height="30" /> : <img src={Red} alt="Logo" width="30" height="30" />)}</TableCell>
                      <TableCell align="right">{historyRow.diff ? (historyRow.happy ? <img src={UpArrow} alt="Logo" width="30" height="30" /> : "" ) : (historyRow.happy ? <img src={Green} alt="Logo" width="30" height="30" /> : <img src={Red} alt="Logo" width="30" height="30" />)}</TableCell>
                      <TableCell align="right">{historyRow.diff ? (historyRow.sad ? <img src={UpArrow} alt="Logo" width="30" height="30" /> : "" ) : (historyRow.sad ? <img src={Green} alt="Logo" width="30" height="30" /> : <img src={Red} alt="Logo" width="30" height="30" />)}</TableCell>
                      <TableCell align="right">{historyRow.diff ? (historyRow.tired ? <img src={UpArrow} alt="Logo" width="30" height="30" /> : "" ) : (historyRow.tired ? <img src={Green} alt="Logo" width="30" height="30" /> : <img src={Red} alt="Logo" width="30" height="30" />)}</TableCell>
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

export default function list2(props) {
  const { repos, option } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID del Juego</TableCell>
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

        </TableBody>
      </Table>
    </TableContainer>
  );
}


