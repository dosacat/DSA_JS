Hash Table is a data structure which stores data in an associative manner.
Associative arrays are arrays that use named keys that you assign to them.

Access of data becomes very fast if we know the index of the desired data.

insertion and search operations are very fast irrespective of the size of the data.
Uses an array as a storage medium and uses hash technique to generate an index where an element is to be inserted or is to be located from.

Link to article for explanation:https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/


Usage: We use hashtables indirectly when we use maps, objects or sets.

Implementation:
You can implement a Hash Table in JavaScript in three steps:

    * Create a HashTable class with table and size initial properties
    * Add a hash() function to transform keys into indices
    * Add the set() and get() methods for adding and retrieving key/value pairs from the table.
