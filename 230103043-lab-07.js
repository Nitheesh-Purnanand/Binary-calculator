let scr = document.querySelector(".screen");
let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let radio = document.querySelector(".select");
let reset = document.querySelector(".reset");
let prev_op = document.querySelector(".prev_op");
let next_op = document.querySelector(".next_op");
let str = "";
let memory = [];
let count = 0;
let flag = 0;

let append0 = () => {
str += '0';
scr.value = str;
}
let append1 = () => {
str += '1';
scr.value = str;
}


reset.addEventListener("click", () => {
memory.push(str);
str = "";
scr.value = "";
count = memory.length;
console.log(memory);
});

prev_op.addEventListener("click", () => {
if (count > 0) {
count--;
scr.value = memory[count];
} else {
scr.value = "Reached the end";
}
});

next_op.addEventListener("click", () => {
if (count < memory.length - 1) {
count++;
scr.value = memory[count];
} else {
scr.value = "Reached the end";
}
});

let appendlor = () => { str += '||'; scr.value = str; }
let appendland = () => { str += '&&'; scr.value = str; }
let appendand = () => { str += '&'; scr.value = str; }
let appendor = () => { str += '|'; scr.value = str; }
let appendnot = () => { str += '!'; scr.value = str; }
let append_l_s = () => { str += '<<'; scr.value = str; }
let append_r_s = () => { str += '>>'; scr.value = str; }
let appendxor = () => { str += '^'; scr.value = str; }
let appendbnot = () => { str += '~'; scr.value = str; }
let appendURS = () => { str += '>>>'; scr.value = str; }
let setbin = () =>{ flag = 0;}
let setdec = () =>{ flag = 1;}
let get_answer = () => {
if (str.includes("!")) {
let [binary1, binary2] = str.split("!");
let num2 = parseInt(binary2, 2);
let result = !num2;
scr.value = str + ' = ' + result.toString(2);}
else if (str.includes("&&")) {
    let [binary1, binary2] = str.split("&&");
    let num1 = parseInt(binary1, 2);
    let num2 = parseInt(binary2, 2);
    let result = num1 && num2;
    scr.value = str + ' = ' + result.toString();
}
else if (str.includes("||")) {
let [binary1, binary2] = str.split("||");
let num1 = parseInt(binary1, 2);
let num2 = parseInt(binary2, 2);
let result = num1 || num2;
scr.value = str + ' = ' + result.toString(2);}
else if (str.includes("&")) {
let [binary1, binary2] = str.split("&");
let num1 = parseInt(binary1, 2);
let num2 = parseInt(binary2, 2);
let result = num1 & num2;
scr.value = str + ' = ' + result.toString(2);
} else if (str.includes("|")) {
let [binary1, binary2] = str.split("|");
let num1 = parseInt(binary1, 2);
let num2 = parseInt(binary2, 2);
let result = num1 | num2;
scr.value = str + ' = ' + result.toString(2);
} else if (str.includes("^")) {
let [binary1, binary2] = str.split("^");
let num1 = parseInt(binary1, 2);
let num2 = parseInt(binary2, 2);
let result = num1 ^ num2;
scr.value = str + ' = ' + result.toString(2);
} else if (str.includes("<<")) {
let [binary1, binary2] = str.split("<<");
let num1 = parseInt(binary1, 2);
let num2 = parseInt(binary2, 2);
let result = num1 << num2;
scr.value = str + ' = ' + result.toString(2);
} else if (str.includes(">>>")) {
let [binary1, binary2] = str.split(">>>");
let num1 = parseInt(binary1, 2);
let num2 = parseInt(binary2, 2);
let result = num1 >>> num2;
scr.value = str + ' = ' + result.toString(2);
}
else if (str.includes(">>")) {
let [binary1, binary2] = str.split(">>");
let num1 = parseInt(binary1, 2);
let num2 = parseInt(binary2, 2);
let result = num1 >> num2;
scr.value = str + ' = ' + result.toString(2);
}
else if (str.includes("~")) {
let [binary1, binary2] = str.split("!");
let num2 = parseInt(binary2, 2);    
let result = ~num2;
scr.value = str + ' = ' + result.toString(2);
}
}
