<h1 align="center">Chat node.js</h1>

Hi my friend this a backend for chat.

### _To explore it use the following commands_

---

```sh
git clone git@github.com:santiagocxa/chat-nodejs.git
cd chat-nodejs
npm i
```

You need a database. This project you can configure them with mongoDB I leave you an example of the environment variables

    .env.example

After configuring your database run the command

```sh
npm run start
```

### _EndPoint_

---

### Create user:

_POST:_ `/user/`

body

    {
      "name": "Atonio"
    }

_GET_: `/user/`

result

    {
      "error": "",
      "body": [
                {
                  "_id": "61db6ed477f3ae78ff69e3a5",
                  "name": "Antonio",
                  "__v": 0
                },
                {
                  "_id": "61d8f5b57b9eb88c5d6934f3",
                  "name": "Sara",
                  "__v": 0
                },
      ]
    }

### Create Chat:

_POST:_ `/chat/`

body

    {
      "users": [
          "61d8f5b57b9eb88c5d693000", //_idUser1
          "61d8f5b57b9eb88c5d6930er"  //_idUser2
      ]
    }

### Create Message:

_POST:_ `/message/`

body

    {
       "chat":"61d8f5b57b9eb88c5d61000r", //idChat
       "user":"61d8f5b57b9eb88c5d693000", //idUser
       "message":"hi how are you?"
    }

_GET:_ `/message/` _{return all message}_

_GET:_ `/message?chat={idChat}` _{return only messages from idChat}_

result

    {
       "chat":"61d8f5b57b9eb88c5d61000r", //idChat
       "user":"61d8f5b57b9eb88c5d693000", //idUser
       "message":"hi how are you?"
    }

### _Now have fun_ 😁😁
