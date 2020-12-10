module.exports = (app) => {
    app.use(
        (req, res, next) => {
            return res.status(404).json({message: "Bad Request"})
        }
    )
}