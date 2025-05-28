import { createCipheriv, randomBytes, scrypt, createDecipheriv } from 'crypto';
import { promisify } from 'util';

const iv = randomBytes(16);
const secret = 'BqlcxLgxe4Wh9Iuz+RivDgKweWbsU/tk0PdjW9qyEOA=';

// The key length is dependent on the algorithm.
// In this case for aes256, it is 32 bytes.

export async function encrypt(text: string): Promise<string> {
  const key = (await promisify(scrypt)(secret, 'salt', 32)) as Buffer;
  const cipher = createCipheriv('aes-256-ctr', key, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

export async function decrypt(encryptedText: string): Promise<string> {
  const [ivHex, encryptedHex] = encryptedText.split(':');
  const ivBuffer = Buffer.from(ivHex, 'hex');
  const encryptedBuffer = Buffer.from(encryptedHex, 'hex');
  const key = (await promisify(scrypt)(secret, 'salt', 32)) as Buffer;
  const decipher = createDecipheriv('aes-256-ctr', key, ivBuffer);
  const decryptedText = Buffer.concat([
    decipher.update(encryptedBuffer),
    decipher.final(),
  ]);
  return decryptedText.toString();
}
