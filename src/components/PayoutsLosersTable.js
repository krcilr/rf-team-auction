import * as React from "react"
import { Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react"

const PayoutsLosersTable = ({ tableData }) => {
    return (
        <Table variant="striped" colorScheme="blue" size="sm">
            <Thead>
                <Tr>
                    <Th>Losers</Th>
                    <Th>Team</Th>
                    <Th>Owner</Th>
                    <Th>$$$</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    tableData.edges.map(edge => (
                        <Tr key={edge.node.id}>
                            <Td>{edge.node.losers}</Td>
                            <Td>{edge.node.loserTeam}</Td>
                            <Td>{edge.node.loserTeamOwner}</Td>
                            <Td>{edge.node.loserTeamAmount}</Td>
                        </Tr>
                    ))
                }
            </Tbody>
        </Table>
    )
}

export default PayoutsLosersTable;