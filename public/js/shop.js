class List {
    _items = []

    constructor(CartInstane) {
        let goods = this.fetchGoods()
        goods = goods.map(item => {
            return new GoodItem(item, CartInstane)
        })
        this._items = goods
        this.render()
    }

    fetchGoods() {
        return [
            { name: 'Apple', price: 150, img: '/img/apple.jpg' },
            { name: 'Pear', price: 250, img: '/img/pear.jpg' },
            { name: 'Orange', price: 750, img: '/img/orange.jpg' },
        ]
    }

    render() {
        this._items.forEach(Good => {
            Good.render()
        })
    }
}

class GoodItem {
    _name = ''
    _price = 0
    _img = 0
    _CartInstane = null

    constructor({ name, price, img }, CartInstane) {
        this._name = name
        this._price = price
        this._img = img
        this._CartInstane = CartInstane
    }

    addToCart() {
        this._CartInstane.add(this)
        console.log('Added', this._name)
    }

    render() {
        const placeToRender = document.querySelector('.goods-list')
        if (placeToRender) {
            const block = document.createElement('div')
            block.innerHTML = `
            Товар: ${this._name} = ${this._price}
            <img src="${this._img}" />
            `

            const btn = new Button('Добавить в корзину', this.addToCart.bind(this))
            btn.render(block)

            placeToRender.appendChild(block)
        }
    }
}

class Cart {
}

class CartItem {
    name = ''
    price = 0
    img = ''

    constructor(name, price, img) {
        this.name = name
        this.price = price
        this.img = img
        this.render()
    }

    render() {
        const placeToRender = document.querySelector('.cart-list')
        if (placeToRender) {
            const block = document.createElement('div')

            block.innerHTML = `
        <p>Товар: ${this.name}<p>
        <img src="${this.img}" />
        `
        placeToRender.appendChild(block)
        }
    }
}

const CartInstane = new Cart()
const ListInstance = new List(CartInstane)