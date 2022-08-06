// images of pokeball taken from https://www.moddb.com/members/senluc/images/pokball
//https://www.youtube.com/watch?v=RqUIxQLDRo0 reference for the retrieving and showing poke ball
//https://www.youtube.com/watch?v=DteTHc3zcMM reference for wobble animation
const React = require('react');

class Show extends React.Component{
    render(){
        const { pokemon } = this.props;
        return(
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/css/show.css"></link>
                <title>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1).toLowerCase()}</title>
            </head>
            <body>
                <h1>Gotta Catch 'Em All</h1>
                <h2>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1).toLowerCase()}</h2>
                Click the pokeball to reveal THAT pokemon!
                <div className='container'>
                 <div id="pokeball-1" className="pokeball">
                    <img id="toggle-button" src="/pics/pokeclose.png"></img>
                </div>
                <div className="pokemon">
                    <img src={pokemon.image}></img>
                </div> 
                <svg id="summon-1" width="600px" height="500px" className="summon hidden">
                    <path
                    className="path"
                    d="M100 250 L280 150 L460 215"
                    fill="none"
                    stroke="black"
                    strokeWidth="15px"
                    strokeDasharray="100%"
                    strokeDashoffset="100%"
                    />
                </svg>
                <svg width="500px" height="500px" className="hidden">
                    <defs>
                        <filter id="spawn-line">
                            <feTurbulence
                            id='line-turbulence'
                            in="SourceGraphic"
                            type="fractalNoise"
                            baseFrequency="0.013"
                            numOctaves="1"
                            result="TURBULENCE_1"
                            />
                            <feDisplacementMap
                            id="line-displacement"
                            in="SourceGraphic"  
                            in2="TURBULENCE_1"
                            scale="200"
                            xChannelSelector="R"
                            // xChannelSelector="G"
                            result="DISPLACEMENT_1"
                            />
                            <feFlood
                            in="DISPLACEMENT_1"
                            floodColor="#ADD8E6"
                            floodOpacity="1"
                            result="FLOOD_1"
                            />
                            <feComposite
                            in="FLOOD_1"
                            in2="DISPLACEMENT_1"
                            operator="in"
                            result="COMPOSITE_1"
                            />
                        </filter>
                        <filter id="spawn-pokemon">
                            <feTurbulence
                            id="pokemon-turbulence"
                            in="SourceGraphic"
                            type="fractalNoise"
                            baseFrequency="0.015"
                            numOctaves="1"
                            result="TURBULENCE_1"
                            />
                            <feDisplacementMap
                            id="pokemon-displacement"
                            in="SourceGraphic"  
                            in2="TURBULENCE_1"
                            scale="100"
                            xChannelSelector="R"
                            // xChannelSelector="G"
                            result="DISPLACEMENT_1"
                            />
                            <feFlood
                            in="DISPLACEMENT_1"
                            floodColor="#ADD8E6"
                            floodOpacity="1"
                            result="FLOOD_1"
                            />
                            <feComposite
                            in="FLOOD_1"
                            in2="DISPLACEMENT_1"
                            operator="in"
                            result="COMPOSITE_1"
                            />
                        </filter>
                        <filter id="retrieve-line">
                            <feTurbulence
                            in="SourceGraphic"
                            type="fractalNoise"
                            baseFrequency="0.015"
                            numOctaves="1"
                            result="TURBULENCE_1"
                            />
                            <feDisplacementMap
                            in="SourceGraphic"  
                            in2="TURBULENCE_1"
                            scale="200"
                            xChannelSelector="R"
                            // xChannelSelector="G"
                            result="DISPLACEMENT_1"
                            />
                            <feFlood
                            in="DISPLACEMENT_1"
                            floodColor="#ADD8E6"
                            floodOpacity="1"
                            result="FLOOD_1"
                            />
                            <feComposite
                            in="FLOOD_1"
                            in2="DISPLACEMENT_1"
                            operator="in"
                            result="COMPOSITE_1"
                            />
                        </filter>
                        <filter id="retrieve-pokemon">
                            <feTurbulence
                            id="retrieve-turbulence"
                            in="SourceGraphic"
                            type="fractalNoise"
                            baseFrequency="0.015"
                            numOctaves="1"
                            result="TURBULENCE_1"
                            />
                            <feDisplacementMap
                            id="retrieve-displacement"
                            in="SourceGraphic"  
                            in2="TURBULENCE_1"
                            scale="100"
                            xChannelSelector="R"
                            // xChannelSelector="G"
                            result="DISPLACEMENT_1"
                            />
                            <feFlood
                            in="DISPLACEMENT_1"
                            floodColor="#ADD8E6"
                            floodOpacity="1"
                            result="FLOOD_1"
                            />
                            <feComposite
                            in="FLOOD_1"
                            in2="DISPLACEMENT_1"
                            operator="in"
                            result="COMPOSITE_1"
                            />
                        </filter>
                    </defs>
                </svg>  
                </div>
                <a href='/pokemon/'>Back</a>
                <br></br>
                <br></br>
                <div className='bttn'>
                <form action={`/pokemon/${pokemon.id}?_method=DELETE`} method='POST'>
                    
                     <button class='trash' type='submit'><i className="fa-solid fa-trash-can fa-lg"></i></button>
                </form>
               
                <a href={`/pokemon/${pokemon.id}/edit`}>
                    <i className="fa-solid fa-pen-to-square fa-lg" type='submit'></i>
                </a>
                </div>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
                <script src="https://kit.fontawesome.com/398a8dbccf.js" crossorigin="anonymous"></script>
                <script src="/js/show.js"></script>
            </body>
            </html>
        )
        
    }
}

module.exports = Show;