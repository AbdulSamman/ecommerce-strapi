'use strict';

module.exports = {


  async index(ctx) {

      try {
        const { to, subject,cc, html } = ctx.request.body;
        if (!to || !subject || !cc || !html) {
            return ctx.throw(400, 'Missing required parameters');
          }
         // Debugging: Benutzerinformationen loggen
      await strapi.plugins['email'].services.email.send({
        to,
        from: process.env.EMAIL_SENDER,
        cc,
        subject,
        html,
      });
      ctx.send({message:'Email sent'});
    } catch (err) {
      ctx.send({ error: 'Failed to send email' });
    }
  },
};
