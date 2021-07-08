const contact = (req, res) => {
    console.log(req.body)
    return res.json({status: "ok", message: "Message SendSucessfully."})
}

export default contact