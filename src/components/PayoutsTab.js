import * as React from "react"
import { Container } from "@chakra-ui/react"
import PayoutsWinnersTable from './PayoutsWinnersTable'
import PayoutsLosersTable from "./PayoutsLosersTable"
import PlayoffsTable from "./PlayoffsTable"
import '../styles/payouts.css'

const PayoutsTab = ({payoutsTableData}) => {
    return (
        <>
            <Container className="payouts-container">
                <PayoutsWinnersTable tableData={payoutsTableData} />
            </Container>
            <Container className="payouts-container">
                <PayoutsLosersTable tableData={payoutsTableData} />
            </Container>
            <Container className="payouts-container">
                <PlayoffsTable tableData={payoutsTableData} />
            </Container>
        </>        
    )
}

export default PayoutsTab;