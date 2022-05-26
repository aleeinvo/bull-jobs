const nodemailer = require('nodemailer');

class Mail {
    constructor() {
        this.mailer = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS
            }
          });

        this.from = 'support@bull-jobs.test'
    }

    async send(to) {
        try {
            let info = await this.mailer.sendMail({
                from: this.from,
                to,
                subject: 'Bull Jobs testing Email',
                text: 'Hi, Hope you are doing well, We are sending this email just as a test.',
                html: '<div><h1>Bull Jobs Test Email</h1><p>Hi, Hope you are doing well, We are sending this email just as a test.</p></div>'
            });

            return info;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new Mail();