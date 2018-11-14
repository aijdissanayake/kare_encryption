[![npm](https://img.shields.io/npm/v/kare_encryption.svg)](https://github.com/aijdissanayake/kare_encryption) [![GitHub license](https://img.shields.io/github/license/aijdissanayake/kare_encryption.svg)](https://github.com/aijdissanayake/kare_encryption) [![GitHub issues](https://img.shields.io/github/issues/aijdissanayake/kare_encryption.svg)](https://github.com/aijdissanayake/kare_encryption/issues)

## Install

```
$ npm install kare_encryption
```

## Usage

Intialize
```js
const kare_enc = new (require('kare_encryption'));
```

```hashMessage([string])``` - Returns SHA256 Hash of the string
```js
msgHash = kare_enc.hashMessage("abcd");
```