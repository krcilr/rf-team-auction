import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Heading, Tabs, Tab, TabList, TabPanels, TabPanel, } from "@chakra-ui/react"
import WinsTable from "../components/WinsTable";
import OwnersTable from "../components/OwnersTable";

const DISPLAY_QUERY = graphql`
query MyQuery {
  allGoogleSpreadsheetDisplay {
    edges {
      node {
        team
        owner
        cost
        expectedWins
        costPerExpectedWin
        actualWins
        costPerActualWin
      }
    }
  }

  allGoogleSpreadsheetDisplayOwnersTeams {
    edges {
      node {
        adam
        adamWins
        alex
        alexWins
        bones
        bonesWins
        brandon
        brandonWins
        cody
        codyWins
        ryan
        ryanWins
        shane
        shaneWins
        trevor
        trevorWins
      }
    }
  }
}`;

const IndexPage = () => {
  const { allGoogleSpreadsheetDisplay, allGoogleSpreadsheetDisplayOwnersTeams } = useStaticQuery(DISPLAY_QUERY);

  return (
    <main>
      <title>Team Auction - RosterFreak</title>
      <Heading style={{textAlign:'center'}}>Team Auction - RosterFreak</Heading>
      <Tabs>
        <TabList>
          <Tab>List of Teams</Tab>
          <Tab>Owners</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <WinsTable tableData={allGoogleSpreadsheetDisplay} />
          </TabPanel>
          <TabPanel>
            <OwnersTable tableData={allGoogleSpreadsheetDisplayOwnersTeams} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  )
}

export default IndexPage