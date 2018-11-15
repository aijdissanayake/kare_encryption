[![npm](https://img.shields.io/npm/v/kare_encryption.svg)](https://github.com/aijdissanayake/kare_encryption) [![GitHub license](https://img.shields.io/github/license/aijdissanayake/kare_encryption.svg)](https://github.com/aijdissanayake/kare_encryption) [![GitHub issues](https://img.shields.io/github/issues/aijdissanayake/kare_encryption.svg)](https://github.com/aijdissanayake/kare_encryption/issues)

## Install

```
$ npm install kare_encryption
```

## Usage

### Initialize
```js
const kare_enc = new (require('kare_encryption'));
```

### Hash

```hashMessage(message)``` - Returns SHA256 Hash value, given a message as the input parameter.

##### Example :
```js
msgHash = kare_enc.hashMessage("abcd"); //generates SHA256 hsh of "abcd"
```
### Generate RSA Key Pair

```generateRSAKeyPair([keyLength])``` - Returns a private public key pair in the form of ```pkcs8-pem``` in a json object structured as ```{publicKey: publicKey, privateKey: privateKey}```.  ``` keyLength``` is an optional parameter defaulted to ```2048```.

##### Example :
```js
keyPair = kare_enc.generateRSAKeyPair(3072); //generates a RSA key pair of bit-length 3072
keyPair = kare_enc.generateRSAKeyPair(); //generates a RSA key pair of bit-length 2048 - default key length
```
### Encrypt

```publicKeyEncrypt(message, publicKey)``` - Returns the encrypted value in ```base64``` format, given a message and the public key in ```pkcs8-pem``` format.

##### Example :
```js
const publicKey = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3TgRFRR+YaLwu6Re7901\nNeGxP6q0+Kj5SDStNjkH4KGnr/pz+QX+fI6Wvy5WONvAhwV+jcQEux6yqGUB9R6v\n2j10tizAFSD8LJD7TwfYVVXMHXVQlcF69Ab7n8TNmSzxI76IcSiOl3eJUPyhj+fz\nGvJv/QVNxmblvLcaoqqDpPZJFZBNIdG9MWxjbgQ6/Vr4kLEiptMQoNo2eMUjJ/Sz\ngrVD/FdDD9vkdhHyemkUNqZI3E0zBbyS4u/P3DGakAyteMIRXTe1j4+M6EpQKRAp\n22Ke7sg5lUbGuHI0OBstCnTjPK4NLS9NeGlgezBUVt+288PFnfgWEZe5FE7MoyiG\nawIDAQAB\n-----END PUBLIC KEY-----";
const encryptedMessage = kare_enc.publicKeyEncrypt("abcdef", publicKey); //generates the encrypted value of "abcdef"
```

### Decrypt

```privateKeyDecrypt(encryptedMessage, privateKey)``` - Returns the derypted value in ```utf8``` encoded string format, given the encrypted value in ```base64``` format and the private key in ```pkcs8-pem``` format.

##### Example :
```js
const privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDdOBEVFH5hovC7\npF7v3TU14bE/qrT4qPlINK02OQfgoaev+nP5Bf58jpa/LlY428CHBX6NxAS7HrKo\nZQH1Hq/aPXS2LMAVIPwskPtPB9hVVcwddVCVwXr0BvufxM2ZLPEjvohxKI6Xd4lQ\n/KGP5/Ma8m/9BU3GZuW8txqiqoOk9kkVkE0h0b0xbGNuBDr9WviQsSKm0xCg2jZ4\nxSMn9LOCtUP8V0MP2+R2EfJ6aRQ2pkjcTTMFvJLi78/cMZqQDK14whFdN7WPj4zo\nSlApECnbYp7uyDmVRsa4cjQ4Gy0KdOM8rg0tL014aWB7MFRW37bzw8Wd+BYRl7kU\nTsyjKIZrAgMBAAECggEBAIwP8ZDdNt9uoOjNO2a3Mfd5fBYJaSd/JMX4xCpulXQ+\nJcOf2Umz59rJFNza47CAQje63NO5Zh1rZEaGHWUrFsAg5QJq9vrptYAqE1OIbgop\nlmCYZHtM0yIqQap4mov/DnZJLm4m9ZElGAX0zf4lJ6DKGumiMAoMIC0J6Y1QVKVe\nNJUada2xeQqy4AoASQGpV0XmNHEGl9/ywujt9E7swuHL1poQMVqFoCy+ou+IT0VB\nzKSc7pDIBKzbYyIbIcSIIB0nzlcp6yMPH50PNCKztFme/4Px5HMkDAOOnVa3O+k8\nqTsOziWGB9FpvEGOUcLxRgNFZ0kiWaY3I4XLXW9gmSECgYEA9K+9XbzcSCRJpmQ3\nlLuQb5+2Sw4kepKL/MqsYckUnpCQuTEn/LlFkKF3PMZc+C1ahK3YlmqTGgE/jMaB\nOzWbjo6CSdiLtdapgDzypyHYNZTRzsxowef7Mi3iTV47QlAwucdoY/m+HaSHeG1t\nQC/ZneQfpDgNP9ItwSvTr6JJu2MCgYEA53KNMIT1nPR7jQvFjFhbdvF23FbiIiz9\nM4ZVrajaqoedU9X206qPsnHWP4F2JaazHpmfnmJ8GS+r5ODpsENX+2H9E75RlpY5\nW/J1zCI0ise8Wc7583TtUIF23DG2o32qTWqDHV8yE4NGDYte8EMwC4i3YEZnylyU\nK3rd7gk8a1kCgYEAgVxH6T7n1twYc/eXyvI+skTlw1h+wK6pg8RCzo/YbtxPJxlt\n4pawyH4U4/SbQjn4GR0v3JYLnzv5tRtdR0hYLU36Y8AwXLpYcovGXcXu4KUFJye6\nWomirCzF79FZ0v1CRXW/ItvuPw208V4o3D5v9qGceN2JY6xitDXPfJN4F7ECgYAG\nctigO3QkdWNj4KoWaPfTbpLjPMB8N0iuwNVuS0AcdD7b8SA5cY0jaayQhGjoT6a5\n+YnK/e97PCrL68BXGuk+pdJJVIotae4bM7w4fdN88me7ENtB/0YFcjX/mJsAHyY5\nlfglP1vD02qGQhXZF+YkzCBf3FZT+xRdycSZN0SpsQKBgQC1uN6rN+Hrdn1VWh/0\nBZSjYxpThJ1UkWZzKYneVBtJN08S4X5HR0xBJjLHVg6DYH88uS8z9j68TUOyI1EX\nd0R8K+7klJ4gtlvjqac2zvZjJ2m67udQcwGBlAmam78dlPJP7T2PHV+BmMZierck\nnA76Qr/jKeph7o3RWM1M+/2HPA==\n-----END PRIVATE KEY-----";
const message = kare_enc.privateKeyDecrypt(encryptedMessage, privateKey); //generates the decrypted value of encryptedMessage
```

### Sign

```signMessage(message, privateKey)``` - Returns the signed value in ```base64``` format given a message in ```utf8``` encoding and private key in ```pkcs8-pem``` format.

##### Example :
```js
sign = kare_enc.signMessage("abcdef", privateKey); //generates the sign  value of "abcdef"
```
### Verify

```verifyMessage(message, sign, publicKey)``` - Returns the results of verification ```true``` or ```false``` given a message in ```utf8``` encoding, signature in ```base64``` format and public key in ```pkcs8-pem``` format.

##### Example :
```js
verification = kare_enc.verifyMessage("abcdef", sign, publicKey); //return the result of "abcdef" and sign
```
