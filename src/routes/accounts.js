module.exports = (app) => {
    
    const create = async (req, res) => {
        app.services.accounts.save(req.body)
        .then((result) => {
            return res.status(201).json(result[0])
        })
    }

    const getAll = (req, res) => {
        app.services.accounts.findAll()
        .then(result => res.status(200).json(result))
    }

    const get = (req, res) => {
        app.services.accounts.find({id: req.params.id})
        .then(result => res.status(200).json(result))
    }

    return { create, getAll, get }
}