'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HEADER_ITEM_LIST = ['blog', 'projects'] as const

export const Header = () => {
  const fontVariants = {
    bold: 'font-bold',
    normal: 'font-normal',
  }

  const pathname = usePathname()

  return (
    <div className="sticky top-0 bg-white w-full h-32 mb-5 text-stone-500">
      <div className="w-full h-full flex flex-col items-end justify-end text-md gap-1 py-5 mb-5 sm:flex-row sm:justify-between sm:gap-3">
        <Link href="/" className="px-2 text-sm bg-stone-400 text-white rounded-sm hover:underline">
          도연﹒Bonnie
        </Link>
        <div className="flex flex-col items-end justify-end gap-1 sm:flex-row sm:justify-end sm:gap-3">
          {HEADER_ITEM_LIST.map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={`hover:underline ${fontVariants[pathname.includes(item) ? 'bold' : 'normal']}`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
