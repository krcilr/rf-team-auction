import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Button, Heading, } from "@chakra-ui/react"
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
      <Heading style={{textAlign:'center'}}>Betting Board - RosterFreak</Heading>
      <WinsTable tableData={allGoogleSpreadsheetDisplay} />
    </main>
  )
}

export default IndexPage