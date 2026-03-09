const path = require("path")

let files = {}

exports.store = async (file) => {
    const id = Date.now().toString()
    files[id] = path.resolve(file.path)

    return {
        id,
        path: files[id]
    }
}

exports.get = async (id) => {
    return files[id]
}