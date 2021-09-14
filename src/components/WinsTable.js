import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, } from "@chakra-ui/react"

const WinsTable = ({tableData}) => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Team</Th>
                    <Th>Owner</Th>
                    <Th>Expected Wins</Th>
                    <Th>Cost Per Expected Win</Th>
                    <Th>Actual Wins</Th>
                    <Th>Cost Per Actual Win</Th>
                    <Th>Other Details</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    tableData.edges.map(edge => (
                        <Tr key={edge.node.id}>
                            <Td>{edge.node.team}</Td>
                            <Td>{edge.node.owner}</Td>
                            <Td>{edge.node.expectedWins}</Td>
                            <Td>{edge.node.costPerExpectedWin}</Td>
                            <Td>{edge.node.actualWins}</Td>
                            <Td>{edge.node.costPerActualWin}</Td>
                        </Tr>
                    ))
                }
            </Tbody>
        </Table>
    );
}

export default WinsTable;