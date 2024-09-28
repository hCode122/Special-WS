module.exports = {
  content: [
    './*.html',        // For HTML files in the root directory
    './src/**/*.{js,jsx,ts,tsx,vue}',  // For JS, TS, JSX, Vue files in src folder
  ],
  darkMode: 'class',   // Enable dark mode via class
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    // Add your dynamically generated classes here
    'rounded-tl-[100px]',
    'rounded-br-[100px]',
    'border-grad',
    'border-grad2',
    'border-grad3',
    'client-animation',
    'w-[30vw]',
    'md:w-[30%]',
    'lg:w-[22vw]',
    'nav-off',
    'nav-on',
    'text-[0.8rem]',
    'lg:text-[1rem]', 'md:text-[0.8rem]', 'text-[0.7rem]', 'min-w-[200px]',
    'team-card',
    'text-start',
    'hover:bg-[#D9D9D9]',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'hover:bg-[#D9D9D9]',
      'transition',
      'duration-500',
      'rounded-full',
      'w-32',
      'h-32',
      'mt-4',
      'md:w-32',
      'md:h-32',
      'btn-cont'
    
  ],
}
