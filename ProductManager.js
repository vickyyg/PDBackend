class ProductManager {
    constructor() {
        this.products = [];
        this.idDeLosProductos = 1;
    }

  //productos disponibles
    addProduct(id, title, description, price, thumbnail, code, stock) {
        const disponibles = this.products.find(
            (productos) => productos.code === code
    );
    //si tiene el codigo repetido el producto
    if (disponibles) {
        console.log(
        `El producto ${title} tiene el mismo codigo ${code} que el producto ${disponibles.title}`
    );
        return;
    }
    
    //si hay una descripcion sin llenar
    if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log(`Necesitas todas las descripciones del producto ${title}`);
    } else {
        const productos = {
            id: this.idDeLosProductos++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };
    this.products.push(productos);
    {
        //si el producto se subio mal
        console.log(
            `El producto ${productos.title} se ha cargado correctamente`
        );
            }
        }
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
    const idDelProducto = this.products.find(
        (productos) => productos.id === id
    );
    {
        //si no se encuentra el producto por su id
        if (!idDelProducto) {
            console.log("Not Found");
        } else {
            //si si se encuentra
        console.log(`El producto ${id} fue encontrado`);
        return idDelProducto;
                }
            }
        }
    }
    
    //productos
    const productos = new ProductManager();
    productos.addProduct(1, "Leche", "descremada", 300, "img1", 678665, 10);
    productos.addProduct(2, "Yerba", "playadito", 500, "img2", 123233, 5);
    productos.addProduct(3, "Coca Cola", "2 litros", 700, "img3", 165477, 20);

    console.log(productos.getProducts());
    console.log(productos.getProductById(2));