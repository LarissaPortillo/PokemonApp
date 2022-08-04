const React = require('react');

class Edit extends React.Component{
    render(){
        const pokemon = this.props.pokemon;
            return(
                <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Edit Pokemon</title>
                </head>
                <body>
                    <h1>Edit Pokemon</h1>
                    <div>
                        <form action={`/pokemon/${pokemon.id}/?_method=PUT`} method='POST'>
                            Name: <input type='text' name='name' />
                            <br/>
                            <br/>
                            Image Link: <input type='text' name='image'/>
                            <br/>
                            <br/>
                            <input type='submit' name='' value='Edit Pokemon'/>
                        </form>
                    </div>          
                </body>
                </html>
        )
    }
}
module.exports = Edit;