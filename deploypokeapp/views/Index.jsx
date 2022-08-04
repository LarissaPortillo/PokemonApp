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
                <title>Pokemon Index</title>
            </head>
            <body>
                <h1>See All the Pokemon!</h1>
                <ul>
                    {pokemon.map((p)=>{
                            return(
                            <li>
                                <a href={`/pokemon/${p.id}`}>{p.name.charAt(0).toUpperCase()+p.name.slice(1).toLowerCase()}</a>
                                <br></br>
                                <form action={`/pokemon/${p.id}?_method=DELETE`} method='POST'>
                                    <button type='submit'>Delete</button>
                                </form>
                                <a href={`/pokemon/${p.id}/edit`}>Edit Pokemon</a>
                            </li>
                        
                            );
                        }
                    )}
                </ul> 
                <nav><a href='/pokemon/new'>Create a New Pokemon</a></nav>
            </body>
            </html>
        );
    }
}

module.exports = Index;