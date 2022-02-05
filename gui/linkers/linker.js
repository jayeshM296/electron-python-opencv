// let {PythonShell} = require('python-shell')
// var path = require("path")
// import { PythonShell} from 'python-shell';
document.getElementById("opencv").addEventListener("click", opencvfn);
function opencvfn(){
    // var options={
    //     scriptPath : path.join(__dirname, '/../engine/'),
    //     mode: 'text',
    // }
    // let pyshell = new PythonShell('main.py', options);
    // // PythonShell.run('main.py',  function (err) {
    // //     if (err) throw err;
    // //     console.log('finished');
    // //   });
    // pyshell.on('message', function(message){
    //     console.log(message);
    // });
    PythonShell.run('main.py');
    console.log("%%%hhjsdfhsdbfhbdshb&&&&&----------");
}