function handleCodeRun(code) {
  try {
    const capturedOutput = [];
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      capturedOutput.push(
        args.map((arg) => {
          if (typeof arg === "object" && arg !== null) {
            return JSON.stringify(arg);
          }
          return arg.toString();
        }).join(" ")
      );
      originalConsoleLog(...args);
    };
    if (code) {
      eval(code);
    }
    console.log = originalConsoleLog;
    return capturedOutput.join("\n");
  } catch (error) {
    return `${error}`;
  }
}

// إضافة السطر إلى الكود المراد تنفيذه
let code = 'console.log(myArray);';
const out = handleCodeRun(code);

let isPass = false;
let msg = '';

if (out === '["b","c","d"]') {
  isPass = true;
} else {
  msg = "Fail!";
  }
