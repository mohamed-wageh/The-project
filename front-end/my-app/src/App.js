const { default: data } = require("./data");

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">products</a>
      </header>
      <main>
        <h1>The products</h1>
        {
          data.products.map(product => (<div>
            <img src={product.image} alt={product.name}/>
            <p>
              {product.name}
            </p>
            <p>
              {product.price}
            </p>
          </div>))
        };
      </main>
    </div>
  );
}

