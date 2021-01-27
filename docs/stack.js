class Stack {

  values = []

  constructor() {

  }

  push(value) {
    if (typeof value === 'number') {
      this.values = [...this.values, value];
    }
  }
  
  pop () {
    if (this.values.length > 0) {
      this.values = this.values.slice(0,this.values.length-1);
      return this.values
    } else {
      return this.values
    }
  }

   getValues() {
    return this.values;
  }
}


const stack = new Stack()

// stack.pop().push(20)
// console.log(stack.getValues())
// stack.pop()
// console.log(stack.getValues())

stack.push(3)
console.log(stack.getValues())
stack.push('4')
console.log(stack.getValues())



// console.log(stack.getValues())
// stack.push(3)
// console.log(stack.getValues())
// stack.push(5)
// console.log(stack.getValues())
// stack.pop()
// console.log(stack.getValues())
// stack.pop()
// console.log(stack.getValues())
// stack.pop()
// console.log(stack.getValues())
