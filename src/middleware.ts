import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  if (request.nextUrl.pathname.startsWith('/dash')) {
    const auth = await isAuthenticated(request)
    if (!auth) {
      const url = new URL(request.url)
      url.pathname = '/login'
      return NextResponse.redirect(url, { headers: requestHeaders })
    }
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
}

export async function isAuthenticated(req: NextRequest): Promise<boolean> {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  return !!token
}