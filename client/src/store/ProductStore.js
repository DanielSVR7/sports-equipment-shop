import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor() {
        this._types = []
        this._selectedType = {}
        this._brands = []
        this._selectedBrand = {}
        this._products = []
        this._basket = []
        this._page = 1
        this._totalCount = 0
        this._limit = 4
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setProducts(products) {
        this._products = products
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    setLimit(limit) {
        this._limit = limit
    }

    setBasket(basket) {
        this._basket = basket
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get products() {
        return this._products
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit    
    }
    
    get basket() {
        return this._basket
    }


}