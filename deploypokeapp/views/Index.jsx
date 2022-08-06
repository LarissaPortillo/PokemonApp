const React = require('react');

class Index extends React.Component{
    render(){
        const { pokemon } = this.props;
        return(
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/css/index.css"></link>
                <title>Pokemon Index</title>
            </head>
            <body>
                <h1>See All the Pokemon!</h1>
                <ul>
                    {pokemon.map((p)=>{
                            return(
                            <li className='pokeLI'>
                                <a href={`/pokemon/${p.id}`}>{p.name.charAt(0).toUpperCase()+p.name.slice(1).toLowerCase()}  </a>
                                <form action={`/pokemon/${p.id}?_method=DELETE`} method='POST'>
                                    <button title={`Delete ${p.name.toLowerCase()}`} type='submit' className='trash'><i className="fa-solid fa-trash-can fa-lg"></i></button>
                                </form>
                                <a href={`/pokemon/${p.id}/edit`}><i title={`Edit ${p.name.toLowerCase()}`} className="fa-solid fa-pen-to-square fa-lg" type='submit'></i></a>
                            </li>
                            );
                        }
                    )}
                </ul> 
                <nav><a href='/pokemon/new'>Create a New Pokemon</a></nav>
                <script src="https://kit.fontawesome.com/398a8dbccf.js" crossorigin="anonymous"></script>
            </body>
            </html>
        );
    }
}

module.exports = Index;