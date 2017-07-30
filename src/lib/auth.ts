const Fingerprint2 = require('fingerprintjs2');

export async function getFingerprint() {
  return new Promise(resolve => {
    new Fingerprint2().get((result: string) => resolve(result));
  });
}
