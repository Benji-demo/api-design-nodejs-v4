setTimeout(() => {
    throw new Error("ma bad");
}, 300)

process.on('uncaughtException', (err) => {
    console.log("uncaughtException:", err.message);
    process.exit(1)
})


process.on('unhandledRejection', (err) => {
    

})