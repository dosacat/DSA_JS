Unlike the Object type, Map requires you to use the set() and get() methods to define and retrieve any key-pair values that you want to be added to the data structure. 

    const collection = new Map();

    SETTING
    collection.set("Nathan", "555-0182");
    collection.set("Jane", "555-0182");

    GETTING
    console.log(collection.get("Nathan")); // 555-0182
    console.log(collection.size); // 2

    ITERATION:
    for (let [key, value] of myMap) {
        console.log(`${key} = ${value}`);
}