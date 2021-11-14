var isValid = function(s) {
    let opening = ["(", "{", "["];
    let closing = [")", "}", "]"];
    
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if (opening.includes(s.charAt(i))) {
            stack.push(s.charAt(i))
        }
        
        if (closing.includes(s.charAt(i))) {
            if (stack.length === 0) return false
            let popped = stack.pop();

            if (popped === "(" && s.charAt(i) !== ")") return false
            if (popped === "{" && s.charAt(i) !== "}") return false
            if (popped === "[" && s.charAt(i) !== "]") return false
        }
    }

    return stack.length === 0
};

console.log(isValid("({})[)"));