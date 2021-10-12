import * as React from "react"
import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react"
import { trimNumber } from '../util/basic-helpers';

const PlayoffsTable = ({ tableData }) => {
    return (
        <Table variant="striped" colorScheme="blue" size="sm">
            <Thead>
                <Tr>
                    <Th>Playoffs</Th>
                    <Th>Team</Th>
                    <Th>Owner</Th>
                    <Th>$$$</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    tableData.edges.map(edge => (
                        <Tr key={edge.node.id}>
                            <Td>{edge.node.playoffs}</Td>
                            <Td>{edge.node.playoffTeam}</Td>
                            <Td>{edge.node.playoffTeamOwner}</Td>
                            <Td>{trimNumber(edge.node.playoffTeamAmount, 0)}</Td>
                        </Tr>
                    ))
                }
            </Tbody>
        </Table>
    )
}

export default PlayoffsTable;