const express = require('express')
const { fetchClient, createClient, updateClient, deleteClient } = require('../controller/client.controller')


const router = express.Router()


/**
 * @swagger
 * /clients/fetchClient:
 *   get:
 *     tags:
 *          [client]
 *     summary: Returns a all clients
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get("/fetchClient",fetchClient)
router.post("/createClient",createClient)
router.put("/updateClient/:id",updateClient)
router.delete("/deleteClient/:id",deleteClient)

module.exports = router