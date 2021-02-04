import React from 'react'
import { Container, Typography } from '@material-ui/core'
import TableView from '../components/TableView'

function Files() {
    return (
        <Container maxWidth="xl">
            <Typography 
            component="h1" 
            variant="h2" 
            align="center">
                Files
            </Typography>

            <TableView />
        </Container>
    )
}

export default Files
