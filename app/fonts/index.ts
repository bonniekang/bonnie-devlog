import localFont from 'next/font/local'

export const aritaDotum = localFont({
  src: [
    {
      path: './AritaDotumKR-Thin.woff2',
      weight: '100',
      style: 'thin',
    },
    {
      path: './AritaDotumKR-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: './AritaDotumKR-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './AritaDotumKR-SemiBold.woff2',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './AritaDotumKR-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})
