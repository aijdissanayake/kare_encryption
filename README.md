[![npm](https://img.shields.io/npm/v/kare_encryption.svg)](https://github.com/aijdissanayake/kare_encryption) [![GitHub license](https://img.shields.io/github/license/aijdissanayake/kare_encryption.svg)](https://github.com/aijdissanayake/kare_encryption) [![GitHub issues](https://img.shields.io/github/issues/aijdissanayake/kare_encryption.svg)](https://github.com/aijdissanayake/kare_encryption/issues)

## Install

```
$ npm install kare_encryption
```

## Usage

Initialize
```js
const kare_enc = new (require('kare_encryption'));
```

```hashMessage(text)``` - Returns SHA256 Hash of a text.

Example :
```js
msgHash = kare_enc.hashMessage("abcd"); //generates SHA256 hsh of "abcd"
```

```generateRSAKeyPair([keyLength])``` - Returns a private public key pair in the form of ```pkcs8-pem``` in a json object structured as ```{publicKey: publicKey, privateKey: privateKey}```.  ``` keyLength``` is an optional parameter defaulted to ```2048```.

Example :
```js
keyPair = kare_enc.generateRSAKeyPair(3072); //generates a RSA key pair of bit-length 3072
keyPair = kare_enc.generateRSAKeyPair(); //generates a RSA key pair of bit-length 2048 - default key length
```