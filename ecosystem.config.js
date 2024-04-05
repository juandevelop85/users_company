module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'users_companies',
      script: './src/server',
      watch: true,
      error_file: 'err.log',
      out_file: 'out.log',
      ignore_watch: [
        'node_modules',
        'src/shared/temp',
        'src/db/migrations',
        '.git',
        '*.log',
        '*.pdf',
        '*.png',
        '*.jpg',
        '*.jpeg',
      ],
      watch_options: {
        followSymlinks: false,
      },
      env: {
        NODE_ENV: 'development',
      },
      env_testing: {
        NODE_ENV: 'test',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
