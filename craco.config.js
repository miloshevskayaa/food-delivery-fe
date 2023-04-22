// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve } = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': resolve(__dirname, 'src/'),
      '@components': resolve(__dirname, 'src/', 'app/components'),
      '@core': resolve(__dirname, 'src', 'app/core'),
      '@layouts': resolve(__dirname, 'src', 'app/layouts'),
      '@pages': resolve(__dirname, 'src', 'app/pages'),
      '@store': resolve(__dirname, 'src', 'app/store'),
      '@models': resolve(__dirname, 'src', 'app/models'),
    },
  },
};
