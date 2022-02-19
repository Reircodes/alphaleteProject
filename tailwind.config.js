module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                '2xl': { 'max': '1535px' },

                'xl': { 'max': '1279px' },

                'lg': { 'max': '1023px' },

                'md': { 'max': '767px' },

                'sm': { 'max': '400px' },

                'xs': { 'max': '600px' },
            }
        },
    },
    plugins: [],
}