let items = [
    { id: 1, name: "kurti", quantity: 2, price: 900 },
    { id: 2, name: "jeans", quantity: 2, price: 1750 },
    { id: 3, name: "dhothi", quantity: 2, price: 600 },
    { id: 4, name: "shirt", quantity: 2, price: 1020 },
    { id: 5, name: "saree", quantity: 2, price: 2000 }
]
exports.getproduct = (req, res) => {
    res.status(200).json(items)
}
exports.addproduct = (req, res) => {
    let newproduct = { id: items.length + 1, name: req.body.name, quantity: req.body.quantity, price: req.body.price }
    items.push(newproduct)
    res.status(200).send(items)
}
exports.updateproduct = (req, res) => {
    const { id } = req.params
    const itemtoupdate = items.find(i => i.id === parseInt(id))
    if (!itemtoupdate)
        return res.status(404).send("Item not found")
    itemtoupdate.name = req.body.name
    itemtoupdate.quantity = req.body.quantity
    itemtoupdate.price = req.body.price
    res.status(200).send(items)

}
exports.partialupdateproduct = (req, res) => {
    const { id } = req.params
    const itemtoupdate = items.find(i => i.id === parseInt(id))
    if (!itemtoupdate)
        return res.status(404).send("Item not Found")

    if (req.body.name !== undefined)
        itemtoupdate.name = req.body.name
    if (req.body.quantity !== undefined)
        itemtoupdate.quantity = req.body.quantity
    if (req.body.price !== undefined)
        itemtoupdate.price = req.body.price
    res.status(200).send(items)

}
exports.deleteproduct=(req,res)=>{
    const {id}=req.params
    const index=items.findIndex(i=>i.id===parseInt(id))
    const item=items.splice(index,1)
    res.status(200).send(items)
}
