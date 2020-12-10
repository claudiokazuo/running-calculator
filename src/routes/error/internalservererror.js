module.exports = (app) => {
    app.use(
        (err, req, res, next) => {
            return res.status(500).json({message: "Internal Server Error"})
        }
    )
}