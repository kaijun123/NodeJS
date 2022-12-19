## Buffer

A buffer is a space in memory (typically RAM) that stores binary data. In Node.js, we can access these spaces of memory with the built-in Buffer class. Buffers store a sequence of integers, similar to an array in JavaScript. Unlike arrays, you cannot change the size of a buffer once it is created. When you console.log out a buffer, you will just get a bunch of numbers

#### Methods
| Method | Purpose|
|---------|---------|
| Buffer.alloc(size) | This method creates a buffer of specified size, similar to malloc() in C. Useful for creating Buffers when you don't have the data yet |
| Buffer.from(data) | This method creates a buffer from the data given. The data can be a string, another buffer, etc |
| toString() | This method turns the buffer into a string |
| toJSON() | This method turns the buffer into a JSON object |
| Buffer.write(data) | This method rewrites the data in the buffer |
| Buffer.isBuffer(object) |	This method checks whether the object is a buffer or not |
| Buffer.length	| This method returns the length of the buffer, similar to .length() for arrays in JS |
| Buffer.copy(targetBuffer,targetStart, sourceStart, sourceEnd) |	This method copies data from one buffer to another. The targetBuffer is the buffer whose data you want to copy |
| Buffer.slice(start, end=buffer.length) | This method returns the subsection of data stored in a buffer |
| Buffer.concat([buffer,buffer]) | This method concatenates two buffers |

#### References:
- https://www.digitalocean.com/community/tutorials/using-buffers-in-node-js
- https://www.geeksforgeeks.org/what-is-buffer-in-node-js/