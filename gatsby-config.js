const assert = require('assert');

if (process.env.STAGING) {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}.staging`,
  })
} else {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

const buildCredentials = ({ PROJECT_ID, PRIVATE_KEY, PRIVATE_KEY_ID }) => {
  assert(PROJECT_ID, 'PROJECT_ID not specified');
  assert(PRIVATE_KEY, 'PRIVATE_KEY not specified');
  assert(PRIVATE_KEY_ID, 'PRIVATE_KEY_ID not specified');
  
  return {
    type: 'service_account',
    project_id: PROJECT_ID,
    private_key_id: PRIVATE_KEY_ID,
    private_key: PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n'),
    client_email: `playoff-fantasy-football@gatsby-playoff-ff.iam.gserviceaccount.com`,
    client_id: '',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/playoff-fantasy-football%40gatsby-playoff-ff.iam.gserviceaccount.com`,
  };
}

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "RF Team Auction",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  {
    resolve: "@chakra-ui/gatsby-plugin",
    options: {
      /**
       * @property {boolean} [resetCSS=true]
       * if false, this plugin will not use `<CSSReset />
       */
      resetCSS: true,
      /**
       * @property {boolean} [isUsingColorMode=true]
       * if false, this plugin will not use <ColorModeProvider />
       */
      isUsingColorMode: true,
    },
  },
  {
    resolve: "gatsby-source-google-spreadsheet",
    options: {
      spreadsheetId: process.env.SPREADSHEET_ID,
      worksheetTitle: 'Display',
      spreadsheetName: '',
      credentials: buildCredentials(process.env),
    }
  },
],
};
