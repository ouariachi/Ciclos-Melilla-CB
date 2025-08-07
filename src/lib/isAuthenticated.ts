import type { NextApiRequest } from 'next'
import { getSession } from 'next-auth/react'

export async function isAuthenticated(req: NextApiRequest): Promise<boolean> {
  const session = await getSession({ req })
  return !!session
}
