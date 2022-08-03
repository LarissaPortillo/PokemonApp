const React = require("react");

class New extends React.Component{
    render(){
        return(
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Make a New Pokemon</title>
            </head>
            <body>
                <h1>New Pokemon</h1>
                <div>
                    <form action='/pokemon' method='POST'>
                        Name: <input type='text' name='name' />
                        <br/>
                        <br/>
                        Image Link: <input type='text' name='image'/>
                        <br/>
                        <br/>
                        <input type='submit' name='' value='Create Pokemon'/>
                    </form>
                </div>          
            </body>
            </html>
        );
    }
}

module.exports = New;