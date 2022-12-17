import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Heading, Tabs, Tab, TabList, TabPanels, TabPanel, extendTheme, ChakraProvider } from "@chakra-ui/react"
import WinsTable from "../components/WinsTable"
import OwnersTable from "../components/OwnersTable"
import PayoutsTab from '../components/PayoutsTab'

const DISPLAY_QUERY = graphql`
query MyQuery {
  allGoogleSpreadsheetDisplay (sort: {order:ASC, fields: order}) {
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

  allGoogleSpreadsheetDisplayOwnersTeams (sort: {order:ASC, fields: order}) {
    edges {
      node {
        order
        adam
        adamWins
        jon
        jonWins
        bones
        bonesWins
        brandon
        brandonWins
        cody
        codyWins
        krcil
        krcilWins
        shane
        shaneWins
        trevor
        trevorWins
      }
    }
  }

  allGoogleSpreadsheetDisplayPayouts (sort: {order:ASC, fields: order}){
    edges {
      node {
        winners
        winnerTeam
        winnerTeamOwner
        winnerTeamAmount
        losers
        loserTeam
        loserTeamOwner
        loserTeamAmount
        playoffs
        playoffTeam
        playoffTeamOwner
        playoffTeamAmount
        totalPot
      }
    }
  }
}`;

const theme = extendTheme({
  components: {
    Td: {
      baseStyle: {
        paddingInlineStart: "3px",
        paddingInlineEnd: "3px",
      }
    }
  }
});

const IndexPage = () => {
  const { allGoogleSpreadsheetDisplay, allGoogleSpreadsheetDisplayOwnersTeams, allGoogleSpreadsheetDisplayPayouts } = useStaticQuery(DISPLAY_QUERY);

  return (
    <ChakraProvider theme={theme}>
      <main>
        <title>Team Auction - RosterFreak</title>
        <Heading style={{ textAlign: 'center' }}>Team Auction - RosterFreak</Heading>
        <Tabs>
          <TabList>
            <Tab>Owners</Tab>
            <Tab>Payouts</Tab>
            <Tab>List of Teams</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <OwnersTable tableData={allGoogleSpreadsheetDisplayOwnersTeams} />
            </TabPanel>
            <TabPanel>
              <PayoutsTab payoutsTableData={allGoogleSpreadsheetDisplayPayouts} />
            </TabPanel>
            <TabPanel>
              <WinsTable tableData={allGoogleSpreadsheetDisplay} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
    </ChakraProvider>
  )
}

export default IndexPage