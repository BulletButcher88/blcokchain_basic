## Peer-2-Peer Blockchain Cryptocurrency 

Exploring the blockchain technology to help me better understand the pros and cons its security, how it's distributed, as decentralized information.

This blockchain:

- uses object-oriented programming to make a blocks, the blockchain with generated hashes.
- has a peer-2-peer server ready to host the API for the Blockchain.
- has a proof-of-work algorithm built into it.
- sign transactions with cryptography and digital signature.
- has a transaction pool for real-time listings for incoming data.
- includes transactions in core blocks of the chain.

### Clone repository and run:

`npm i`


### Activate the server and test endpoints by:

`npm run dev`


### To run a second server open up a second terminal and run:

`HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev`


### To run test

`npm run test`