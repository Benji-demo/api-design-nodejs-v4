
// // Sync proccess meaning the "done" log wont be printed until the file is read
// const fs = require('fs')
// const path = require('path')
// const read = fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8')
// console.log(read)
// console.log('done')


const fs = require('fs/promises')
const path = require('path')

// do this for a liner or quadratic time complexity
const read = async () =>{
    const result = fs.readFile(path.join(__dirname, 'package.json'), 'utf8')
    return result
}

read().then((result) => {
    console.log(result)
})
console.log('done')


