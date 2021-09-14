import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Heading, } from "@chakra-ui/react"
import WinsTable from "../components/WinsTable";

const QUERY = graphql`
query MyQuery {
  allGoogleSpreadsheetDisplay {
    edges {
      node {
        team
        owner
        expectedWins
        costPerExpectedWin
        actualWins
        costPerActualWin
      }
    }
  }
}`;

const IndexPage = () => {
  const { allGoogleSpreadsheetDisplay } = useStaticQuery(QUERY);

  return (
    <main>
      <title>Betting Board</title>
      <Heading style={{textAlign:'center'}}>Team Auction - RosterFreak</Heading>
      <WinsTable tableData={allGoogleSpreadsheetDisplay} />
    </main>
  )
}

export default IndexPage