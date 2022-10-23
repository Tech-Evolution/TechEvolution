const mongoose=require("mongoose")

//Modelo para los productos 

const esquemaProduct = mongoose.Schema({

    nombre:{
        type: String,
        required: [true, "Este campo es obligatorio por favor llenarlo"],
        trim: true,
        maxLength:[120, "El nombre del producto tiene un maximo de 120 caracteres."]
    },

    precio: {
        type: Number,
        required: [true, "Por favor ingrese el valor del producto."], 
        maxLength: [9, "El precio de este producto no puede superar las 9 cifras."],
        default: 0.0
    }, 

    descripcion:{
        type: String,
        required: [true, "Agregue la descripción del producto."],
    },


    imagen: [
        {
            public_id:{

                type: String,
                required: true
            },

            url:{
                type: String,
                required: true
            }
        }
    ],

    inventario: {
        type: Number,
        required: [true, "Registre el stock del producto"],
        maxLength: [10, "La cantidad maxima del producto no debe ser mayor a 10 cifras"],
        default: 0
    }, 

    
    categoria:{
        type: String,
        required: [true, "Seleccione la categoría"], 

        enum_categoria:{
            valores: [
                "Hardware",
                "Software"
            ]

        }, 

        subCategoria:{
            valores:[
                "lic adobe",
                "lic windows",
                "software video",
                "software imagen"
            ]

        },

        tipo:[
            "almacenamiento en la nube",
            "SSD",
            "tarjeta grafica", 
            "conector HDMI",
            "monitores",
            "accesorios",
            "audio"
            
        ]
    }, 

    //fecha en la que se compró el producto (util para la factura)
    fechaCompra:{
        type: Date,
        default: Date.now
    }

})

//Exporto el modulo para poder usarlo en el controller.
module.exports=mongoose.model("productos", esquemaProduct)
