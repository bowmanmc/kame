const rewire = require("rewire")
const createNewStore = rewire("./createNewStore")
const createNewStoreProd = createNewStore.__get__("createNewStoreProd")
const createNewStoreDev = createNewStore.__get__("createNewStoreDev")
// @ponicode
describe("createNewStoreProd", () => {
    test("0", () => {
        let callFunction = () => {
            createNewStoreProd("Île-de-France")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            createNewStoreProd("Alabama")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            createNewStoreProd("Florida")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            createNewStoreProd("Abruzzo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            createNewStoreProd(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("createNewStoreDev", () => {
    test("0", () => {
        let callFunction = () => {
            createNewStoreDev("Florida")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            createNewStoreDev("Île-de-France")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            createNewStoreDev("Abruzzo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            createNewStoreDev("Alabama")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            createNewStoreDev(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
