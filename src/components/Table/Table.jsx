import { useState, Fragment } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Menu from '../Menu/Menu';
import Box from '@mui/material/Box';

export default function BasicTable({ onRowSelect, onHeaderSelect, data, headers, activeRowId, menu, onMenuClick }) {
  const [sortDirection, setSortDirection] = useState(true);

  const handleRowSelection = (rowItem) => {
    onRowSelect(rowItem)
  }

  const sortBy = (headerItem) => {
    if (headerItem.sortable) {
      setSortDirection((state) => !state);
      onHeaderSelect({ ...headerItem, sortDirection: sortDirection ? "DESC" : "ASC" })
    }
  }

  const handleMenuClick = (rowItem, menuItem) => {
    onMenuClick({ id: rowItem.id, actionType: menuItem.actionType });
  }

  return (
    <Box sx={{ overflow: "auto" }}>
      <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
        <Paper sx={{ width: '100%', overflow: 'unset' }}>
          <TableContainer component={Paper} sx={{ padding: '10px 0', overflow: 'unset', borderRadius: 0 }}>
            <Table sx={{ minWidth: 650, padding: '0px 0 0 0' }} stickyHeader aria-label="sticky table">
              <TableHead sx={{ 'th:first-of-type ': { border: 0, width: 30 }, 'th': { fontWeight: 600, color: '#959595' } }}>
                <TableRow>
                  {headers && headers.map((header, index) => {
                    return (
                      <TableCell key={'headerItem' + index} onClick={() => { sortBy(header) }} sx={{ cursor: header.sortable ? 'pointer' : 'default' }} align={`${index !== 1 ? 'right' : 'left'}`}>
                        {header.text}
                      </TableCell>
                    )
                  })}
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody sx={{ 'th, td': { border: 0 }, 'th': { fontWeight: 600 }, 'td': { color: '#8b8b8b' } }}>
                {data && data.slice(0).reverse().map((row, index) => (
                  <TableRow
                    key={'tableRow' + index}
                    onClick={() => handleRowSelection(row)}
                    sx={{
                      'td:first-of-type, td:last-child ': { border: 0, width: 30 },
                      backgroundColor: activeRowId === row.id ? '#ebebeb' : '#ffffff',
                      cursor: 'pointer',
                      '&:hover': { backgroundColor: '#ebebeb70' }
                    }}
                  >
                    {headers && headers.map((item, tableCellIndex) => {
                      return (
                        <Fragment key={tableCellIndex + 'tableCell'}>
                          {tableCellIndex === 0 &&
                            <TableCell sx={{ 'img': { objectFit: 'cover', width: 30, height: 30 } }}>
                              <img
                                src={`${row[item.name]}`}
                                alt={'Alt'}
                                loading="lazy"
                              />
                            </TableCell> 
                          }
                          {tableCellIndex === 1 && <TableCell component="th" scope="row"> {row[item.name]}</TableCell>}
                          {tableCellIndex > 1  && <TableCell align="right">{row[item.name]}</TableCell>}
                        </Fragment>
                      )
                    })}
                    <TableCell>
                      <Menu menu={menu} onClose={(menuItem) => { handleMenuClick(row, menuItem) }} />
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
}
