import { Table, TableCell, TableContainer, TableHead, TableRow,TableBody } from '@mui/material'
import React from 'react'

const Tab = () => {
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableCell>name</TableCell>
                <TableCell>age</TableCell>
                <TableCell>place</TableCell>
                <TableRow>
                    <TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>tiya</TableCell>
                                <TableCell>12</TableCell>
                                <TableCell>ekm</TableCell>
                            </TableRow>
                        </TableBody>
                    </TableHead>
                </TableRow>
            </TableHead>
        </Table>
      </TableContainer>
      

                


    </div>
  )
}

export default Tab

