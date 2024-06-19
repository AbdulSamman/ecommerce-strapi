'use strict';

module.exports = {
  async index(ctx) {



      try {
        const { to, subject, text } = ctx.request.body;
        if (!to || !subject || !text) {
            return ctx.throw(400, 'Missing required parameters');
          }
         // Debugging: Benutzerinformationen loggen
      await strapi.plugins['email'].services.email.send({
        to,
        from: 'tkservas@gmail.com',

        subject,
        text,
      });
      ctx.send({message:'Email sent'});
    } catch (err) {
      ctx.send({ error: 'Failed to send email' });
    }
  },
};
