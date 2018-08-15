const express = require("express");
const router = express.Router();
const Database = require("../database/countries");

router

    .post("/", async (req, res) => {
        try {
            var email = req.body.email
            var name = req.body.name
            var lastname = req.body.lastname
            var phone = req.body.phone
            var amount = req.body.amount;
            var paymentMethodNonce = req.body.payment_method_nonce;

            var sale = {
                amount: amount,
                paymentMethodNonce: paymentMethodNonce,
                customer: {
                    firstName: name,
                    lastName: lastname,
                    email: email,
                    phone: phone
                },
                options: {
                    submitForSettlement: true,
                    storeInVaultOnSuccess: true
                }
            };

            console.log('Transaction ID: ' + "123456");
            return res.status(200).json({ success: "OK" })

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })


module.exports = router;
