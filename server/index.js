const fs = require('fs')
const https = require('https')

const PORT = process.env.PORT || 5000

const CA = process.env.CA || 'easy-rsa/easyrsa3/pki/ca.crt'
const KEY = process.env.KEY || 'easy-rsa/easyrsa3/pki/private/server.key'
const CRT = process.env.CRT || 'easy-rsa/easyrsa3/pki/issued/server.crt'
const DH = process.env.DH || 'easy-rsa/easyrsa3/pki/dh.pem'
const CRL = process.env.CRL || 'easy-rsa/easyrsa3/pki/crl.pem'

const options = {
  ca: fs.readFileSync(CA),
  key: fs.readFileSync(KEY),
  cert: fs.readFileSync(CRT),
  dhparam: fs.readFileSync(DH),
  crl: fs.readFileSync(CRL),
  requestCert: true,
  rejectUnauthorized: true
}

https.createServer(options, (req, res) => {
  const cert = req.socket.getPeerCertificate()
  console.log(cert)

  res.writeHead(200)
  res.end(`hello ${cert.subject.CN}\n`)
}).listen(PORT)
