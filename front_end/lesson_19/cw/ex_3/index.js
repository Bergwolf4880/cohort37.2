const humanJohn = {
    name: 'John',
    hello: function(){
        console.log(`My name is ${this.name}`)
    }
}

// humanJohn.hello();
// const testVar = humanJohn.hello.bind({name: "Carl"});

// testVar();  no context

//bind, call, apply

const testVar = humanJohn.hello;
testVar.call({name: "Karl"});

//Практическое применение 

document.querySelectorAll('a');

[].map.call(nodesList, callFunction);// old version 
[].map.apply(nodesList, [callFunction, param2, param3]);// old version 


// [...nodeslist].map