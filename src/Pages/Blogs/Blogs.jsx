import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [title, setTitle] = useState("Blogs");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className='my-10 max-w-6xl mx-auto p-8 sm:px-28'>
      <div>
        <h2 className='text-4xl font-semibold mb-4'>SQL vs NoSQL</h2>
        <div className='text-gray-500 text-lg font-medium'>
          <p className='mt-4'>
            Databases are categorized as Relational Database Management System
            (RDBMS) and NoSQL databases are categorized as Non-relational or
            distributed database system.
          </p>
          <p className='mt-4'>
            SQL databases have fixed or static or predefined schema and NoSQL
            databases have dynamic schema.
          </p>
          <p className='mt-4'>
            SQL databases display data in form of tables so it is known as
            table-based database. and NoSQL databases display data as collection
            of key-value pair, documents, graph databases or wide-column stores.
          </p>
          <p className='mt-4'>
            SQL databases are vertically scalable and NoSQL databases are
            horizontally scalable.
          </p>
          <p className='mt-4'>
            SQL databases use a powerful language "Structured Query Language" to
            define and manipulate the data. and In NoSQL databases, collection
            of documents are used to query the data. It is also called
            unstructured query language. It varies from database to database.
          </p>
          <p className='mt-4'>
            SQL databases are best suited for complex queries. and NoSQL
            databases are not so good for complex queries because these are not
            as powerful as SQL queries.
          </p>
          <p className='mt-4'>
            MySQL, Oracle, Sqlite, PostgreSQL and MS-SQL etc. are the example of
            SQL database. and MongoDB, BigTable, Redis, RavenDB, Cassandra,
            Hbase, Neo4j, CouchDB etc. are the example of NoSQL database.
          </p>
        </div>
      </div>
      <div>
        <h2 className='text-4xl font-semibold mb-4 mt-12'>
          What is JWT, and how does it work?
        </h2>
        <div className='text-gray-500 text-lg font-medium'>
          <p className='mt-4'>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
          </p>
          <p className='mt-4'>
            A JWT is a string made up of three parts, separated by dots (.), and
            serialized using base64. In the most common serialization format,
            compact serialization, the JWT looks something like this:
            xxxxx.yyyyy.zzzzz.
          </p>
          <p className='mt-4'>
            The payload contains the claims. This is displayed as a JSON string,
            usually containing no more than a dozen fields to keep the JWT
            compact. This information is typically used by the server to verify
            that the user has permission to perform the action they are
            requesting.
          </p>
          <p className='mt-4'>
            The signature ensures that the token hasn't been altered. The party
            that creates the JWT signs the header and payload with a secret that
            is known to both the issuer and receiver, or with a private key
            known only to the sender. When the token is used, the receiving
            party verifies that the header and payload match the signature.{" "}
          </p>
        </div>
      </div>
      <div>
        <h2 className='text-4xl font-semibold mb-4 mt-12'>
          What is the difference between javascript and NodeJS?
        </h2>
        <div className='text-gray-500 text-lg font-medium'>
          <p className='mt-4'>
            JavaScript is a proper high-level programming language used to
            create web scripts whereas Node.js is a run time environment built
            on google's v8 engine.
          </p>
          <p className='mt-4'>
            JavaScript is executed in the browser whereas using Node.js gives us
            the ability to execute JavaScript outside the browser.
          </p>
          <p className='mt-4'>
            JavaScript can manipulate DOM or add HTML within whereas Node.js
            doesn't have the capability to add HTML.
          </p>
          <p className='mt-4'>
            JavaScript is mainly used to create front end web applications or
            develop client-side whereas Node.js is used on the back end
            development that is server-side development
          </p>
          <p className='mt-4'>
            JavaScript follows the standard of JavaScript when writing programs
            whereas Node.js is written in C++ while using the v8 engine, it runs
            JavaScript outside the browser.
          </p>
        </div>
      </div>
      <div>
        <h2 className='text-4xl font-semibold mb-4 mt-12'>
          How does NodeJS handle multiple requests at the same time?
        </h2>
        <div className='text-gray-500 text-lg font-medium'>
          <p className='mt-4'>
            NodeJS server uses an EventQueue, which queues incoming client
            requests and an EventLoop which is an infinite loop that receives
            requests and processes them. This EventLoop is single threaded and
            acts as a listener for the EventQueue which processes incoming
            requests based on FIFO policy.
          </p>
          <p className='mt-4'>
            When a new request comes in, NodeJS checks if it requires any
            blocking IO operations, if not, the EventLoop processes it and sends
            the response back to the client directly. If yes, then the request
            is forwarded to the thread manager, which then based on an
            algorithm, picks up an idle thread from the pool and lets it process
            the request. After completion of the request processing operation,
            the thread, returns the response back to the EventLoop which is then
            forwarded to the client. Thus, even if an incoming request needs
            blocking IO, the thread pool allows it to run asynchronously in the
            background without blocking the EventLoop and it gives a seamless
            experience of NodeJS handling multiple incoming requests
            concurrently without any persistent delays or bottlenecks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
