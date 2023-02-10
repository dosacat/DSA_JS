//Defining the hash function:
// Why? helps transform the key into an index which can in turn be used to store buckets.

class HashTable{
    constructor(){
        this.storage=[] //initializes empty array, alternatively use new Array(127) creates 127 buckets.
        this.limit=127 // to limit bucket size to 127 for example
    }


    //hashing method with argument key which needs to be trasformed into an index
    // For example key "Jane Eyre" returns 819. This is a siple hash function, there are several types.
    //but since we want to limit our bucket sizes t0 127, modulus 127
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
          hash += key.charCodeAt(i);
        }
        // modulus ensures only values between 0-127 returned
        return hash%this.limit; 
      }

    //Method to add a key value pair to our hash table.
    //The key is always converted to an index value which contins the 
    add(key,value){
        const index=this.hash(key)

        //Check if table is empty first aka the index has not been declared:
        //else if check if table contains the key we want to store in any of the index locations
        //If the key exists, update it's new value
        //If the key does not exist, add the key value pair to the table at that index, 
        // since each index will have multiple buckets


        if(this.table[index]===undefined){
            this.table[index]=[[key,value]]
        }
        else {
            for (var elem;elem<this.table.length;elem++){
                if(this.table[index][elem][0]===key){
                    this.table[index][elem][1]==value
                    return;
                }
            }
            this.table[index].push([key, value]);
        }
    }



    // Get key value, first lookup the index the key was assigned to. Then, 
    //check if that index has multiple buckets. if it does, only return the bucket with the corresponding key
    get(key) {
        const target = this.hash(key);
        if (this.table[target]) { //If the length != 0 
            for (let i = 0; i < this.table[target].length; i++) {
              if (this.table[index][i][0] === key) {
                return this.table[index][i][1];
              }
            }
          }
          return undefined;
      }

      //Remove Key in same way as searching for element  
    remove(key){
    const index = hash(key)
    if(this.table[index]){
        for (let i = 0; i < this.table[target].length; i++){
            if(this.table[i][0]===key){
                delete this.table[index][i] //you can also use splice => this.table[index].splice(i, 1);
            }
        }
        return true
    }

    else{
        return false
    }

    }


}

console.log("This programme contains hash table Class. A hashtable contains this structure [[key1,value1].[[key2,value2],[same_index_key3,same_index_value3]]")
