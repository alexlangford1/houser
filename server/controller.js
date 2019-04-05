module.exports = {
    getAll: (req, res) => {
        let db = req.app.get("db")
        db.get_houses()
            .then((response) => {
                res.status(200).send(response)
            })
            .catch((err) => {
                console.log("oopps", err)
                res.status(400).send(err)
            })
    },

    create: (req, res) => {
        const db = req.app.get("db")
        let { name, address, city, state, zip } = req.body
        db.create_house(name, address, city, state, zip)
            .then((response) => {
                res.status(200).send(response)
            })
            .catch((err) => {
                console.log("oopps", err)
                res.status(400).send(err)
            })
    },

    delete: (req, res) => {
        const { id } = req.params
        let db = req.app.get("db")
        db.delete_house(id)
            .then((response) => {
                res.status(200).send(response)
            })
            .catch((err) => {
                console.log("oopps", err)
                res.status(400).send(err)
            })
    },
}
