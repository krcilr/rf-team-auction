import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, } from "@chakra-ui/react"
import { trimNumber } from '../util/basic-helpers'
import '../styles/owners.css'

function formatNumberColumn(str, indx) {
    return `${indx > 4 ? "$" : ""} ${trimNumber(str, 0)}`;
}

const OwnersTable = ({ tableData }) => {
    return (
        <Table className="ownersTable" variant="simple" colorScheme="blue" size="md">
            <Thead>
                <Tr>
                    <Th>Krcil</Th>
                    <Th></Th>
                    <Th className="alt-column">Brandon</Th>
                    <Th className="alt-column"></Th>
                    <Th>Adam</Th>
                    <Th></Th>
                    <Th className="alt-column">Bones</Th>
                    <Th className="alt-column"></Th>
                    <Th>Cody</Th>
                    <Th></Th>
                    <Th className="alt-column">Shane</Th>
                    <Th className="alt-column"></Th>
                    <Th>Trevor</Th>
                    <Th></Th>
                    <Th className="alt-column">Jon</Th>
                    <Th className="alt-column"></Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    tableData.edges.map((edge, index) => (
                        <Tr key={edge.node.id}>
                            <Td>{edge.node.krcil}</Td>
                            <Td>{formatNumberColumn(edge.node.krcilWins, index)}</Td>
                            <Td className="alt-column">{edge.node.brandon}</Td>
                            <Td className="alt-column">{formatNumberColumn(edge.node.brandonWins, index)}</Td>
                            <Td>{edge.node.adam}</Td>
                            <Td>{formatNumberColumn(edge.node.adamWins, index)}</Td>
                            <Td className="alt-column">{edge.node.bones}</Td>
                            <Td className="alt-column">{formatNumberColumn(edge.node.bonesWins, index)}</Td>
                            <Td>{edge.node.cody}</Td>
                            <Td>{formatNumberColumn(edge.node.codyWins, index)}</Td>
                            <Td className="alt-column">{edge.node.shane}</Td>
                            <Td className="alt-column">{formatNumberColumn(edge.node.shaneWins, index)}</Td>
                            <Td>{edge.node.trevor}</Td>
                            <Td>{formatNumberColumn(edge.node.trevorWins, index)}</Td>
                            <Td className="alt-column">{edge.node.jon}</Td>
                            <Td className="alt-column">{formatNumberColumn(edge.node.jonWins, index)}</Td>
                        </Tr>
                    ))
                }
            </Tbody>
        </Table>
    );
}

export default OwnersTable;