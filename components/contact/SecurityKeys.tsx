import CodeBlock from "../code/CodeBlock";

const pgpKeyInfo = `Key ID        : 280856F6
Key Type      : EdDSA
Key Size      : 256
Fingerprint   : 50EE E1D5 A526 7F04 A220  2315 520C 44E6 2808 56F6
User ID       : teguh@aprianto.com`;

const pgpPublicKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGXu/oIBEADkm7QEk12Hyg+shiL0d93xEkeSecnOoUrdwXmV+Nmc9Gv3ddYe
uQpJlvjtrTApiycW4opmrlV9BPqiBe/nhsBK8DAxMwr36YD5IbFqO62T9UZWdwv+
o8TOav7qS01vTtRdw7PWmp9IQR4iYQeVcr94dkYWKGF1azr42NXL8JuWEidX46CG
ZeuAVt4Ozqw4sLVPxgTqrUyaLvtOy+WoCUoQcqEmGGswJm4hCpNQvm+mYfp/1e/Z
pghN5pvdgumX1zoZEL3jfXUIfaGYET935MJPR75ERzZd1nYauafuRKC/xXURaFTm
4iAsDPbeJ6kUwUKlryug8ggJpSqShpDetqTE2gedCIPgGWr/NRtLmPRPw0TE3jYT
Vunk2lE3FiIpsVFIEWzFMuAbEiyg99rv3eFTqh3vWpswzjzB6mPUOlDnFtYuB1Eg
fwsXQ0tWnGsLHQBfPL6HgSTdCihQvKp6GTjGvVmNoPC8dbJOT8rYK9YQKfJ/h5tz
tBSwnTGB10hPMqCqf0JRsoML5groIPpwNSCeLiW2fL4QlxGDtsf0NL3A5fIDWEFS
GL2/hK42F60RsZfCm3IAJlsQaANk2Exx5k3LTXwnEr9g/ztoRjHI7oZ1p1uRnC6y
yf+cggp7upMF0X8gLRx0+lUblngOZuxCiWoSU7Xn3L4FuIyGzWez89fWTQARAQAB
tD5BTkRSSSAoQ3liZXIgU2VjdXJpdHkgRXhwZXJ0cykgPGltaHVudGVyYW5kQGN5
YmVyc2VydmljZXMuY29tPokCTgQTAQoAOBYhBPU6tlXjZ/UfEatJurNIDSbdWmM6
-----END PGP PUBLIC KEY BLOCK-----`;

export default function SecurityKeys() {
  return (
    <div className="space-y-6">
      <CodeBlock
        code={pgpKeyInfo}
        label="Key Information"
        showLineNumbers={false}
      />
      <CodeBlock
        code={pgpPublicKey}
        language="plaintext"
        label="Public Key"
        showLineNumbers={true}
      />
    </div>
  );
}
