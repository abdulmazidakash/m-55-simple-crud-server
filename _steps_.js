/**
 * ---------------------------
 * MongoDB Connection
 * -------------------------------
 * 1. Create Account
 * 2. Create an user with password
 * 3. Whitelist ip address
 * 4. database > connect > driver > Node > View full code
 * 5. Change the password the uri
 * ----------------------------------
 * 1. CREATE ---- POST
 * 2. app.post('/users'/ async (req, res))
 * 3. Make the function async to use await inside it
 * 4. Make sure you use the express.json() middleware
 * 5. access data from the body: const user = req.body
 * 6. const result = await userCollection.insertOne(user);
 * 7. res.send(result)
 * 
 * CLIENT
 * 1. create fetch
 * 2. add second parameter as an object
 * 3. Provide method: 'POST'
 * 4. add headers: { "content-type": "application/json"}
 * 5. add body: JSON.stringify(user)
 * 
 * 
 * ---------------------
 * Read Many
 * ----------------------
 * 
 * 1. create a  cursor = userCollection.find()
 * 2. const result = await cursor.toArray()
 * 
 * ---------------------------------
 * 
 * DELETE
 * ----------------------
 * 1. create app.delete('/user/:id', async(req, res) =>{})
 * 2. specify unique object to delete the right user
 * 3. const query = {_id: new Object(id)}
 * 4. const result = await userCollection.deleteOne(query);
 * 
 * 
 * Client------
 * --------------------------
 */