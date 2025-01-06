import Link from 'next/link'

import { GithubIcon } from '@/components/icons/github-icon'
import { LinkedinIcon } from '@/components/icons/linkedin-icon'
import { MailIcon } from '@/components/icons/mail-icon'

export default function Page() {
  return (
    <div className="text-stone-700">
      <section className="pt-14 text-sm text-right">
        <p>개발자로 일하며 얻은 배움과 경험, 소중한 인사이트들을 차곡차곡 기록해두는 공간입니다.</p>
      </section>
      <section className="flex justify-end py-20">
        <a
          href="mailto:bonnie59kang@gmail.com"
          className="p-2 rounded-lg bg-white hover:bg-stone-100"
        >
          <MailIcon />
        </a>
        <Link
          href="https://github.com/bonniekang"
          className="p-2 rounded-lg bg-white hover:bg-stone-100"
          target="_blank"
        >
          <GithubIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/bonniek0827"
          className="p-2 rounded-lg bg-white hover:bg-stone-100"
          target="_blank"
        >
          <LinkedinIcon />
        </Link>
      </section>
    </div>
  )
}
