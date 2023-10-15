let cards = [
    {id: 1, name: 'First', priority: 'medium'},
    {id: 2, name: 'Second', priority: 'low'},
    {id: 3, name: 'Third', priority: 'high'},
]

function routes(app){
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.get('/cards', (req, res) => {
        res.send(cards);
    })

    app.delete('/cards/:cardId', (req, res) => {
        const cardId = req.params.cardId;
        cards = cards.filter(el => el.id != cardId);
        res.send(cards)
    })

    app.post('/cards', (req, res) => {
        const card = req.body;
        cards.push({ id: Math.random().toString(),...card});
        res.send('Card was created!')
    })

    app.patch('/cards/:cardId', (req, res) => {
        const cardId = req.params.cardId;
        const card = req.body;
        cards = cards.map(el => el.id == cardId ? ({...card, id: el.id}) : el);
        res.send('Card was updated!')
    })
}
module.exports = routes;
