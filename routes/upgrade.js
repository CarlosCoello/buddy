const config = require('../config/database');
const paypal = require('paypal-rest-sdk');


paypal.configure({
    'mode': 'sandbox', //sandbox or live 
    'client_id': 'AUmolmqCiZkxiiHq-qekBmxb9KZ8D1KlarJFvIMM9fLTf8v4KBGz2jQtmcRMHpMK79-fEnVUSkH0a4aM',
    'client_secret': 'EBPUmLFbBbsKx8zZF6gkd4srMhma52lO6XbQ5FNzZtR6y8TdKWhbxIh74zaGzNvqyXiNNS7YIAZx1j8d'
  });

module.exports = (router) => {

    router.post('/pay', (req, res) => {
        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:4200/upgradesuccess",
                "cancel_url": "http://locahost:4200/upgradecancel"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "Buddy Employer Account",
                        "sku": "001",
                        "price": "240.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "240.00"
                },
                "description": "Upgrade To Employer Account."
            }]
        };
        
        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                console.log("Create Payment Response");
                //console.log(payment);
                //res.send(payment);
                for( let i = 0; i < payment.links.length; i++){
                    if(payment.links[i].rel === 'approval_url'){
                        res.redirect(payment.links[i].href);
                    }
                }
            }
        });

    });

    return router;
}