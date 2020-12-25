const helloWorld = () =>{
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hi'), 4000)
        :reject(new Error('Test error.'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();