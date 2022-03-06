module.exports = {
    data:{
        suscription:{
            endpoints:{
                "GET All" : "http://localhost:3000/api/suscription",
                "GET By id" : "http://localhost:3000/api/suscription/1",
                "POST" : ["Required name, price, days","http://localhost:3000/api/suscription"],
                "PUT (UPDATE)" : ["Required id and body","http://localhost:3000/api/suscription/1"],
                "DELETE" : ["Required id","http://localhost:3000/api/suscription/1"]
            }
        },

        category:{
            endpoints:{
                "GET All" : "http://localhost:3000/api/category",
                "GET By id" : "http://localhost:3000/api/category/1",
                "POST" : ["Required name","http://localhost:3000/api/category"],
                "PUT (UPDATE)" : ["Required id and body","http://localhost:3000/api/category/1"],
                "DELETE" : ["Required id","http://localhost:3000/api/category/1"]
            }
        },

        user:{
            endpoints:{
                "GET All" : "http://localhost:3000/api/user",
                "GET By id" : "http://localhost:3000/api/user/1",
                "POST" : ["Required id, name, lastName, dateOfBirth, address, suscriptionId, email, password","http://localhost:3000/api/user/register"],
                "PUT (UPDATE)" : ["Required id and body","http://localhost:3000/api/user/1"],
                "DELETE" : ["Required id","http://localhost:3000/api/user/1"]
            }
        },

        login:{
            endpoints:{
                "POST Required valid user and password" : "http://localhost:3000/api/user/login",
                "Return" : "Web token"
            }
        },

        product:{ 
            endpoints:{
                "GET All" : "http://localhost:3000/api/product",
                "GET By id" : "http://localhost:3000/api/product/1",
                "POST" : ["Required name, description, price, brand, picture, category[], suscription[]","http://localhost:3000/api/product"],
                "PUT (UPDATE)" : ["Required id and body","http://localhost:3000/api/product/1"],
                "DELETE" : ["Required id","http://localhost:3000/api/product/1"]
            }
        },
        sale:{
            endponts:{
                "GET All" : "http://localhost:3000/api/sale",
                "GET By id" : "http://localhost:3000/api/sale/1",
                "POST" : ["Required userId","http://localhost:3000/api/sale"]
            }
        }
}
}