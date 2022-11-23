const odev = new CustomEvent('bootcampOdev', {
    detail: {
        name: "CustomEvent",
        type: "ThemeChange",
        todo: "listTodo"
    }
})

console.log(odev.detail)