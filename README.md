# Decentralized Voting Platform

A decentralized voting system based on [Ethereum blockchain](https://ethereum.org/dapps/) technology.

> Submitted as a final year project jointly by [Pradhuman Soni](https://www.linkedin.com/in/whopradhuman/), [Ronak Jangir](https://www.linkedin.com/in/ronak-jangir/) and [Rupam Kumar](https://www.linkedin.com/in/rupam-kumar/)

## System Workflow

A brief explanation on the basic workflow of the application.

- Admin will create a voting instance by launching/deploying the system in a blockchain network (EVM), then create an election instance and start the election with the details of the election filled in (including candidates for voters to vote).
- Then the likely voters connect to the same blockchain network register to become a voter. Once the users successfully register, their respective details are sent/displayed in the admins' panel (i.e. verification page).
- The admin then will check if the registration information (blockchain account address, name, and phone number) is valid and matches with his record. If yes, then the admin approves the registered user making them eligible to take part and cast their respective vote in the election.
- The registered user (voter) following the approval from the admin casts their vote to the candidate of interest (from the voting page).
- After some time, depending on the scale of the election the admin ends the election. As that happens the voting is closed and the results are displayed announcing the winner at the top of the results page.

---

## Setting up the development environment

### Requirements

- [VS Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org)
- [Truffle](https://trufflesuite.com/truffle/)
- [Ganache](https://trufflesuite.com/ganache/)
- [Metamask](https://metamask.io/)

Basic Setup Instructions:

1. Download and install **NodeJS**

   Download and install NodeJS from [here](https://nodejs.org/en/download/ "Go to official NodeJS download page.").

1. Install **truffle** and **ganache** using node packager manager (npm)

   ```shell
   npm install -g truffle
   npm install -g ganache
   ```

1. Install **metamask** browser extension

   Download and install metamask from [here](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn "Chrome WebStore").

### Configuring the project for development

1. Clone this repository

   ```shell
   git clone https://github.com/whopradhuman/voting-system.git
   cd dVoting
   ```

1. Run local Ethereum blockchain

   ```shell
   ganache
   ```

   > Note: Do not close `ganache` (the blockchain network needs to be running all the time)

1. Configuring metamask :
   Create a metamask wallet
   Enable show test networks from advanced settings in metamask
   Configure the local blockchain network with the following settings:
   New RPC URL: `http://localhost:8545`  
   Chain ID: `1337`

1. Import account(s) using private keys from ganache to the metamask extension on the browser

1. Deploy smart contract to the (local) blockchain network (i.e ganache)

   ```shell
   # on the dVoting directory
   truffle migrate
   ```

   > Note: Use `truffle migrate --reset` for re-deployments

1. Launch the development server (frontend)
   ```shell
   cd client
   npm install
   npm start
   ```
