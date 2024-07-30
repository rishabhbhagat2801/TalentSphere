const errors =  [
    {msg : "one",param : "1"},
    {msg : "two",param : "2"},
    {msg : "three",param : "3"},
    {msg : "four",param : "4"},
]

console.log(errors.filter(err => err.msg === "one"))