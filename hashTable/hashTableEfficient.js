class hashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
       let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total% this.size
    }
    set(key,value){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            let sameKey=bucket.find(item=>item[0]==key)
            if(sameKey){
                sameKey[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let sameKey=bucket.find(item=>item[0]==key)
        if(sameKey){
            return sameKey[1]
        }
        }
        return undefined
    }
    remove(key){
        let index=this.hash(key)
        let bucket=this.table[index]
        if(bucket){
            let sameKey=bucket.find(item=>item[0]==key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1)
            }
        }
      return undefined
    }
    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}
let hash=new hashTable(50)
hash.set("name","nangopan")
hash.set("mane","vishnu")
hash.set("name","sharik")
hash.print()
console.log(hash.get("name"))
