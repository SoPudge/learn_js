const te = function (promise) {
    return promise
        .then(data => [null, data])
        .catch(err => [err, null])
}

const tt = function (promise) {
    return promise
        .then(data => data)
        .catch(err => {
            throw err
        })
}
module.exports = {
    tt:tt,
    te:te
}