module.exports = ({ env }) => ({
    // ...add it from cloudinary name, key , secret
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // ...
  });

  // sendGrid

  module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env(`SENDGRID_API_KEY`),
        },
        settings: {
          defaultFrom: 'tkservas@gmail.com',
          defaultReplyTo: 'boudiii89@gmail.com',
        },
      },
    },
    // ...
  });