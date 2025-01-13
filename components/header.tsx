'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { CookieIcon } from '@/components/icons/cookie-icon'

const HEADER_ITEM_LIST = ['Blog', 'Archive'] as const

export const Header = () => {
  const fontVariants = {
    bold: 'font-bold',
    normal: 'font-normal',
  }

  const pathname = usePathname()

  return (
    <div className="sticky top-0 bg-white w-full h-32 mb-5 text-stone-500">
      <div className="w-full h-full flex flex-col items-end justify-end text-base gap-1 py-5 mb-5 sm:flex-row sm:justify-between sm:gap-3">
        <div className="flex items-center gap-1">
          <CookieIcon />
          <Link href="/" className="px-1 rounded-sm bg-white hover:bg-stone-100">
            도연﹒Bonnie
          </Link>
        </div>
        <div className="flex flex-col items-end justify-end gap-1 sm:flex-row sm:justify-end sm:gap-3">
          {HEADER_ITEM_LIST.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`hover:underline ${pathname.split('/')[1].includes(item.toLowerCase()) ? 'underline' : 'none'} px-2`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
