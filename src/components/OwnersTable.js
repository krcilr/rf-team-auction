import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, } from "@chakra-ui/react"

const OwnersTable = ({tableData}) => {
    return (        
        <Table variant="simple" colorScheme="blue" size="md">
            <Thead>
                <Tr>
                    <Th>Ryan</Th>
                    <Th>Brandon</Th>
                    <Th>Adam</Th>
                    <Th>Bones</Th>
                    <Th>Cody</Th>
                    <Th>Shane</Th>
                    <Th>Trevor</Th>
                    <Th>Alex</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    tableData.edges.map(edge => (
                        <Tr key={edge.node.id}>
                            <Td>{edge.node.ryan === null ? `Total ${edge.node.ryanWins}` : `${edge.node.ryan} (${edge.node.ryanWins})`}</Td>
                            <Td>{edge.node.brandon === null ? `Total ${edge.node.brandonWins}` : `${edge.node.brandon} (${edge.node.brandonWins})`}</Td>
                            <Td>{edge.node.adam === null ? `Total ${edge.node.adamWins}` : `${edge.node.adam} (${edge.node.adamWins})`}</Td>
                            <Td>{edge.node.bones === null ? `Total ${edge.node.bonesWins}` : `${edge.node.bones} (${edge.node.bonesWins})`}</Td>
                            <Td>{edge.node.cody === null ? `Total ${edge.node.codyWins}` : `${edge.node.cody} (${edge.node.codyWins})`}</Td>
                            <Td>{edge.node.shane === null ? `Total ${edge.node.shaneWins}` : `${edge.node.shane} (${edge.node.shaneWins})`}</Td>
                            <Td>{edge.node.trevor === null ? `Total ${edge.node.trevorWins}` : `${edge.node.trevor} (${edge.node.trevorWins})`}</Td>
                            <Td>{edge.node.alex === null ? `Total ${edge.node.alexWins}` : `${edge.node.alex} (${edge.node.alexWins})`}</Td>
                        </Tr>
                    ))
                }
            </Tbody>
        </Table>
    );
}

export default OwnersTable;