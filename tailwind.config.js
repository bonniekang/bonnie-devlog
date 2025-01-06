/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            code: {
              backgroundColor: '#f3f4f6', // 코드 블록 배경색 (예: 흰색에 가까운 색)
              color: '#e06c75', // 코드 텍스트 색상
              borderRadius: '0.25rem', // 코드 블록 모서리 둥글게
              padding: '0.2rem 0.4rem', // 코드 블록 안쪽 여백
              fontSize: '0.825rem', // 기본 글자 크기
            },
            'pre code': {
              backgroundColor: 'transparent', // pre 안의 code 배경색 제거
              padding: '0', // 중첩된 패딩 제거
            },
            pre: {
              backgroundColor: '#f3f4f6', // pre 배경색 (예: 어두운 색)
              color: 'black',
              padding: '1rem', // pre 블록 안쪽 여백
              borderRadius: '0.5rem', // pre 블록 둥근 모서리
              overflowX: 'auto', // 수평 스크롤 허용
            },
            'code::before': { content: '""' }, // 추가 스타일 제거
            'code::after': { content: '""' }, // 추가 스타일 제거
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
