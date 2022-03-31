const express = require('express')
var cors = require('cors')
const app = express()

const PORT = process.env.PORT || 8877

app.use(cors())

app.get('/', (req, res) => {
    res.json({msg: 'ok'})
})

app.get('/produtos', (req, res) => {
    res.json(
            [
                {
                    "title": "Promoções",
                    "X-Bacon": {
                    "id": "1",
                    "title": "X-Bacon",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    },
                    "Quarteirão": {
                    "id": "1",
                    "title": "Quarteirão",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    },
                    "X-Picanha": {
                    "id": "1",
                    "title": "X-Picanha",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    }
                },
                {
                    "title": "Burguer",
                    "Chicken Burguer": {
                    "id": "1",
                    "title": "Chicken Burguer",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    },
                    "Chicken Burguer Jr": {
                    "id": "1",
                    "title": "Chicken Burguer Jr",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    },
                    "Cheese Burguer": {
                    "id": "1",
                    "title": "Cheese Burguer",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    }
                },
                {
                    "title": "Sobremesa",
                    "Sorvete": {
                    "id": "1",
                    "title": "Sorvete",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    },
                    "Pudim": {
                    "id": "1",
                    "title": "Pudim",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    },
                    "Petigatot": {
                    "id": "1",
                    "title": "Petigatot",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    }
                },
                {
                    "title": "Vegetarianos",
                    "Sorvete": {
                    "id": "1",
                    "title": "Sorvete",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    },
                    "Pudim": {
                    "id": "1",
                    "title": "Pudim",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    },
                    "Petigatot": {
                    "id": "1",
                    "title": "Petigatot",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    }
                },
                {
                    "title": "Porções",
                    "Sorvete": {
                    "id": "1",
                    "title": "Sorvete",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    },
                    "Pudim": {
                    "id": "1",
                    "title": "Pudim",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    },
                    "Petigatot": {
                    "id": "1",
                    "title": "Petigatot",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    }
                },
                {
                    "title": "Bebidas",
                    "Sorvete": {
                    "id": "1",
                    "title": "Sorvete",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    },
                    "Pudim": {
                    "id": "1",
                    "title": "Pudim",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    },
                    "Petigatot": {
                    "id": "1",
                    "title": "Petigatot",
                    "description":
                        "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
                    "price": 10.5
                    }
                }
            ]   
    )
})

app.listen(PORT, () => {
    console.log('Escutando na porta ' + PORT)
})