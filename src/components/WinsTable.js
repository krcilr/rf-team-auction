import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, } from "@chakra-ui/react"
import { trimNumber } from '../util/basic-helpers';

const WinsTable = ({tableData}) => {
    return (
        <Table variant="striped" colorScheme="blue" size="lg">
            <Thead>
                <Tr>
                    <Th>Team</Th>
                    <Th>Owner</Th>
                    <Th isNumeric>Cost</Th>
                    <Th isNumeric>Actual Wins</Th>
                    <Th isNumeric>Cost Per Actual Win</Th>
                    <Th isNumeric>Expected Wins</Th>
                    <Th isNumeric>Cost Per Expected Win</Th>                    
                </Tr>
            </Thead>
            <Tbody>
                {
                    tableData.edges.map(edge => (
                        <Tr key={edge.node.id}>
                            <Td>{edge.node.team}</Td>
                            <Td>{edge.node.owner}</Td>
                            <Td isNumeric>${edge.node.cost}</Td>
                            <Td isNumeric>{edge.node.actualWins}</Td>
                            <Td isNumeric>${trimNumber(edge.node.costPerActualWin)}</Td>
                            <Td isNumeric>{edge.node.expectedWins}</Td>
                            <Td isNumeric>${trimNumber(edge.node.costPerExpectedWin)}</Td>                            
                        </Tr>
                    ))
                }
            </Tbody>
        </Table>
    );
}

export default WinsTable;
