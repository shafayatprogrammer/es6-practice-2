class Parent{
    constructor(){
        this.fathername = "Shroff"
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.fathername + " " + this.name;
    }
}

const baby = new Child("Jackie")
const baby2 = new Child("Tiger")

console.log(baby.getFullName());
console.log(baby2.getFullName());