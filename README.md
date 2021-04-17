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

- Open up Postman and GET `localhost:3001/public-key` for accounts public key.
- To view all transaction GET `localhost:3001/transactions` 


### Open second server open up a second terminal to make a transaction:

`HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev`

- Use the publicKey attained above to send an amount, POST `localhost:3001/transactions`. This POST object should have the public key as a recipient and an amount:

`{
    "recipient": "04e37ee0b8d3ced5883763fdd82b6d5231ce0c81a61e4de0d5a34b3ef2435ff0c61876e59e8307576e283b9aa48dcb94132973123ce9fb7d7750ebadd36d86bc74",
    "amount": 50
}`

- To mine the block GET `localhost:3001/mine-transactions`, will run the function for the users to mine a block from the transaction pool and reward the wallet with an amount.


### To run test files

`npm run test`