# esp32 mbedtls https with client certificate 🆒🔑

## Valid client certificate (CN=client1)
```
I (437831) example: Connected to AP
I (437831) example: Connecting to leons-mbp.fritz.box:5000...
I (437851) example: Connected.
I (437851) example: Performing the SSL/TLS handshake...
I (439761) example: Verifying peer X.509 certificate...
I (439761) example: Certificate verified.
I (439761) example: Cipher suite is TLS-ECDHE-RSA-WITH-AES-128-GCM-SHA256
I (439771) example: Writing HTTP request...
I (439781) example: 111 bytes written
I (439781) example: Reading HTTP response...
HTTP/1.1 200 OK
Date: Fri, 14 Sep 2018 15:55:29 GMT
Connection: close

hello client1
```

## Revoked client certificate
```
I (729421) example: Connected to AP
I (729421) example: Connecting to leons-mbp.fritz.box:5000...
I (729481) example: Connected.
I (729481) example: Performing the SSL/TLS handshake...
E (731521) example: mbedtls_ssl_handshake returned -0x7280
E (731531) example: Last error was: -0x7280 - SSL - The connection indicated an EOF
```
