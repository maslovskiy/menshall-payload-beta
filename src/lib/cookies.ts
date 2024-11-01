//@ts-nocheck
'use server'
import { cookies } from 'next/headers'
import { AccountUser } from '@/app-types'
import { redirect } from 'next/navigation'

export async function loginUser({ user }: { user: AccountUser }) {
  // @ts-ignore
  cookies().set('token', user.user_token!)
  // @ts-ignore
  cookies().set('name', user.name)
  // @ts-ignore
  cookies().set('avatar', user.avatar!)
  // @ts-ignore
  cookies().set('phone', user.phone!)

  // @ts-ignore
  if (user?.user_token) {
    redirect('/user-account')
  }
}

export async function logoutUser() {
  const c = await cookies()
  // Destroy the session
  c.set('token', '', { expires: new Date(0) })
  c.set('name', '', { expires: new Date(0) })
  c.set('avatar', '', { expires: new Date(0) })
  c.set('phone', '', { expires: new Date(0) })
}

export async function getToken() {
  const c = await cookies()

  const token = c.get('token')?.value
  if (!token) return null
  return token
}

export async function getUser() {
  const c = await cookies()
  const token = c.get('token')?.value
  const name = c.get('name')?.value
  const avatar = c.get('avatar')?.value
  const phone = c.get('phone')?.value
  if (!token) return null
  return { token, name, avatar, phone } as AccountUser
}

export async function getViewPort() {
  const c = await cookies()
  const viewport = c.get('viewport')?.value
  if (!viewport) return null
  return viewport
}
