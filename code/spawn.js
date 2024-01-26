const { spawn } =
    require('child_process');
const child =
    spawn(
        'touch', ['anish.txt'],
        { shell: true }
    );
child.stdout.on('data',
    (data) => {
const base64Data = data.toString();
// Create a JSON object with the Base64-encoded data
//const json = { data: base64Data };

// Convert the JSON object to a string
const jsonString = base64Data.split('\n');
console.log(jsonString);
    });
 
child.stderr.on('data',
    (data) => {
        
        console.error(`stderr: ${data}`);
    });
 
child.on('close',
    (code) => {
        console.log(
            `child process exited with code ${code}`
        );
    });