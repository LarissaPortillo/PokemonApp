(function(){
    function togglePokeball(event){
        event.preventDefault();
        const pokeball=document.getElementById('pokeball-1');
        if(pokeball.classList.contains('open')){
            retrieve.restart();
            pokeball.classList.remove('open');
        }
        else{
            pokeball.classList.add('open');
            spawn.restart();
            
        }
    }
    
    const spawn =gsap.timeline(
        {
            onStart : function(){    
                document.querySelector(".summon").classList.remove('hidden');
                document.querySelector(".summon").style.filter="url(#spawn-line)";
                document.querySelector(".pokemon img").style.filter="url(#spawn-pokemon)";
                const poke = document.querySelector('#toggle-button');
                poke.style.height='35vh'
                poke.src='/pics/pokeopen.png';
            },
            onComplete : function(){
                document.querySelector(".summon").classList.add('hidden');
                document.querySelector(".summon").style.filter="none";
                document.querySelector(".pokemon img").style.filter="none";
                
            },
            paused:true,
        }
    )
    .set('.path',{
        attr:{
            'stroke-dashoffset':"100%",
        },
    })
    .to('.path',{
        delay:.2,
        duration:.2,
        attr:{
            'stroke-dashoffset':'0%',
        },
    })
    .to('.path',{
        duration:.2,
        attr:{
            'stroke-dashoffset':'-100%',
        },
    })
    .from('.pokemon img',{
        duration:.2,
        scale:0,
    },
    0.4)
    .to('#pokemon-displacement',{
        duration:.8,
        attr:{
            scale:0
        },
        ease:'none'
    },
    .2)
    .to('#pokemon-turbulence',{
        duration:.8,
        attr:{
            baseFrequency:.03
        },
        ease:'none'
    },
    .2
    )
    
    
    const retrieve=gsap.timeline(
        {
            onStart : function(){   
                document.querySelector(".summon").classList.remove('hidden');
                document.querySelector(".summon").style.filter="url(#retrieve-line)";
                document.querySelector(".pokemon img").style.filter="url(#retrieve-pokemon)";
            },
            onComplete : function(){
                const poke = document.querySelector('#toggle-button');
                poke.style.height='20vh'
                poke.src='/pics/pokeclose.png';
                document.querySelector(".summon").classList.add('hidden');
                document.querySelector(".summon").style.filter="none";
                document.querySelector(".pokemon img").style.filter="none";
            },
            paused:true,
    })
    .set('.path',{
        attr:{
            'stroke-dashoffset':"-100%",
        },
    })
    
    .from('#retrieve-displacement',{
        duration:.3,
        attr:{
            scale:0
        }
    },0)
    .from('#pokemon-turbulence',{
        duration:.3,
        attr:{
            baseFrequency:0
        }
    },
    0)
    .to('.pokemon img',{
        scale:0,
        duration:.2
    },
    .3)
    .to('.path',{
        duration:.2,
        attr:{
            'stroke-dashoffset':'0%'
        }
    },
    .35
    )
    .to('.path',{
        duraction:.2,
        attr:{
            'stroke-dashoffset':'100%'
        }
    },
    0.45);
    
    const button=document.getElementById('toggle-button');
    button.addEventListener('click',togglePokeball);
    }) ();