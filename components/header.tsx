'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HEADER_ITEM_LIST = ['blog', 'projects', 'about'] as const

export const Header = () => {
  const fontVariants = {
    bold: 'font-bold',
    normal: 'font-normal',
  }

  const pathname = usePathname()

  return (
    <div className="sticky top-0 bg-white w-full h-32 mb-5">
      <div className="w-full h-full flex flex-col items-end justify-end text-xs gap-1 py-5 mb-5 sm:flex-row sm:justify-between sm:text-base sm:gap-3">
        <Link href="/" className="hover:underline">
          kang
        </Link>
        <div className="flex flex-col items-end justify-end text-xs gap-1 sm:flex-row sm:justify-end sm:text-base sm:gap-3">
          {HEADER_ITEM_LIST.map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={`hover:underline ${fontVariants[item === pathname.slice(1) ? 'bold' : 'normal']}`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
