export async function isValidPassword(password: string, hashedPW: string) {
  return (await hashPassword(password)) === hashedPW
}

async function hashPassword(pw: string) {
  const arrayBuffer = await crypto.subtle.digest(
    'SHA-512',
    new TextEncoder().encode(pw)
  )

  return Buffer.from(arrayBuffer).toString('base64')
}
