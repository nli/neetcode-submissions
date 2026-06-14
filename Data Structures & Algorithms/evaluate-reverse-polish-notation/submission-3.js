class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        const ops = ['+', '-', '*', '/']
         for (let t of tokens) {
            if (!ops.includes(t)) {
                stack.push(+t)
            } else {
                const num1 = stack.pop()
                const num2 = stack.pop()
                if (t === '+') {stack.push(num1+num2)}
                else if (t === '-') {stack.push(num2-num1)}
                else if (t === '*') {stack.push(num1*num2)}
                else {
                    const div = num2/num1
                    stack.push(div > 0 ? Math.floor(div): Math.ceil(div))
                }
            }
        }
        return stack.at(-1)
    }
}


/**
 * 
 * 
 * tokens=["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
 * 
 * ((10 * (6 / ((9+3) * -11)) ) + 17) + 5
 * 
 * 6/
 * 

 */