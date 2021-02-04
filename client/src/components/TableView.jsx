import React from 'react'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import LinkIcon from '@material-ui/icons/Link'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

function TableView() {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell width="20%">Last modified</TableCell>
                        <TableCell width="20%">Type</TableCell>
                        <TableCell width="15%"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Cat.jpg</TableCell>
                        <TableCell>12.02.2021</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>
                            <IconButton>
                                <ArrowDownwardIcon />
                            </IconButton>
                            <IconButton>
                                <LinkIcon />
                            </IconButton>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableView
