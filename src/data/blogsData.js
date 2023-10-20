export const blogsData = [
    {
        id: 1,
        title: 'Difference between SQL and NoSQL',
        article: 'SQL databases are primarily called Relational Databases (RDBMS); whereas NoSQL databases are primarily called non-relational or distributed databases./n/nSQL stands for Structured Query Language. SQL is a safe choice, especially for great complex queries. But from another side, it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also, all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system./n/nA NoSQL database has a dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based, or organized as a key-value store. This flexibility means that documents can be created without having a defined structure first. Also, each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go./n/nIn almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU, or SSD. But on the other hand, NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database./n/nSQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases, or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure./n/n'
    },
    {
        id: 2,
        title: 'What is JWT, and how does it work?',
        article: 'A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange.The token is mainly composed of header, payload, signature. These three parts are separated by dots(.). JWT defines the structure of information we are sending from one party to the another, and it comes in two forms – Serialized, Deserialized. The Serialized approach is mainly used to transfer the data through the network with each request and response. While the deserialized approach is used to read and write data to the web token./n/nJWT in the deserialized form contains only the header and the payload.Both of them are plain JSON objects. A header in a JWT is mostly used to describe the cryptographic operations applied to the JWT like signing/decryption technique used on it. It can also contain the data about the media/content type of the information we are sending. The payload is the part of the JWT where all the user data is actually added. This data is also referred to as the ‘claims’ of the JWT.This information is readable by anyone so it is always advised to not put any confidential information in here./n/nJWT in the serialized form represents a string of the following format:[header].[payload].[signature]. Signature is used to verify the authenticity of token.'
    },
    {
        id: 3,
        title: 'What is the difference between javascript and NodeJS?',
        article: 'Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance./n/nNodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.'
    },
    {
        id: 4,
        title: 'How does NodeJS handle multiple requests at the same time?',
        article: 'NodeJS follows Single Threaded with Event Loop Model./n/nFirst of all, Web Server recieves requests from Client Side and places them into a Queue. It is known as “Event Queue”./n/nNode JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”./n/nEvent Loop uses Single Thread only. Even Loop checks if any Client Request is placed in Event Queue. If no, then waits for incoming requests indefinitely./n/nIf Request(s) arrive, then the Event Loop picks up one Client Request from Event Queue and starts processing the Request./n/nIf that Client Request does not require any Blocking IO Operations, then everything is processed immediately, response prepared and sent back to client./n/nBut if that Client Request requires some Blocking IO Operations like interacting with Database, File System, External Services, then it follows different approach. It Checks Threads availability from Internal Thread Pool. Picks up one Thread and assign this Client Request to that thread. That Thread is responsible for taking that request, process it, perform Blocking IO operations, prepare response and send it back to the Event Loop. Event Loop in turn, sends that Response to the respective Client.'
    }
]