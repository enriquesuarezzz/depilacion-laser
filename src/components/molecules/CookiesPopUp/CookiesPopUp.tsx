import { COOKIE_CONSENT } from '@/utils/cookie'
import CookiesModal from '../CookiesModal/CookiesModal'
import { cookies } from 'next/headers'

export default function CookiesPopup() {
  const cookieStore = cookies()

  const consent = cookieStore.get(COOKIE_CONSENT)?.value
  return <CookiesModal checked={consent === 'true'} />
}
