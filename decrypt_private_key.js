// Add these details from the keystore file for the respective accounts
const keythereum = require('keythereum');

const keystore = {
  "address": "7d441d18b79898449be8b05d1077308bc563669c",
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "caaafe9edc40fcd39b7c4cd0b5652b0f4d74a9e633866c6891f7ddbe70462d8d",
    "cipherparams": {
      "iv": "fb81dd87df6a843755095dd8bc9aacb3"
    },
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "6366027755683cd5abb63d99f5f438151001a0c7ad0a612a2d9e9853cea3c936"
    },
    "mac": "fab50ee501c7e3f7120529e3d9aa4ed6f183a0ed13cdcc2af6e8767b3c089f7d"
  },
  "id": "4d47ce44-6551-4b9d-b30a-49a956de6638",
  "version": 3
};

const password = "1"; // replace with the password for the keystore

const privateKey = keythereum.recover(password, keystore);
console.log("Private Key:", privateKey.toString("hex"));
