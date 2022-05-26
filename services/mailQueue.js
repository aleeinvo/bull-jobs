const Bull = require('bull');
const mailer = require('./mailer');
class MailQueue {
    constructor() {
        this.queue = new Bull('mail-queue');
        this.queue.process(async job => {
            const info = await mailer.send(job.data.to);

            return info;
        });

        this.queue.on('completed', (job, result) => {
            console.log('job completed with ', result);
        })
    }

    async add(tos = []) {
        tos.forEach(to => {
            this.queue.add({
                to
            });
        })
    }
}

module.exports = new MailQueue();