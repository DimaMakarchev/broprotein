const Bro = {
    name: "bro",
    data: {
        age: 23
    }
};


// const man = Bro;
// man.data.age=12;



const ti = {...Bro};

ti.name = "cool";

console.log(Bro);
