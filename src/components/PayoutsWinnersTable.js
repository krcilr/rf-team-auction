import * as React from "react"
import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react"

const PayoutsWinnersTable = ({ tableData }) => {
    return (
        <Table variant="striped" colorScheme="blue" size="sm">
            <Thead>
                <Tr>
                    <Th>Winners</Th>
                    <Th>Team</Th>
                    <Th>Owner</Th>
                    <Th>$$$</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    tableData.edges.map(edge => (
                        <Tr key={edge.node.id}>
                            <Td>{edge.node.winners}</Td>
                            <Td>{edge.node.winnerTeam}</Td>
                            <Td>{edge.node.winnerTeamOwner}</Td>
                            <Td>{edge.node.winnerTeamAmount}</Td>
                        </Tr>
                    ))
                }
            </Tbody>
        </Table>
    )
}

export default PayoutsWinnersTable;