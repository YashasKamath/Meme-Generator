import React,{useState,useEffect} from 'react'

export default function Meme(){
    const [meme,setMeme] =useState({
        topText:'',
        bottomText:'',
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes,setAllMemes]=useState([])
    function handleChange(event){
        const {name,value}=event.target
        setMeme(prevState=>({
            ...prevState,
            [name]:value
        }))
    }
    function randomURL(){
        const randomInt=Math.floor(Math.random()*allMemes.length)
        const newUrl=allMemes[randomInt].url
        setMeme(prevState=>({
            ...prevState,
            randomImage:newUrl
        }))  
    }
    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes').
        then(res=>res.json()).
        then(data=>setAllMemes(data.data.memes))
    },[])
    return(
        <main>
            <div className='form'>
                <input 
                    type='text' 
                    className='form--topText' 
                    placeholder='Top-text'
                    value={meme.topText}
                    onChange={handleChange}
                    name='topText'
                />
                <input 
                    type='text' 
                    className='form--bottomText' 
                    placeholder='Bottom-text'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className='form--button'
                    onClick={randomURL}
                    value={meme.randomImage}
                    name='randomImage'
                >
                    Get a new meme image🖼
                </button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} className='meme--image'/>
                <h2 className='meme--text top'><b>{meme.topText.toUpperCase()}</b></h2>
                <h2 className='meme--text bottom'><b>{meme.bottomText.toUpperCase()}</b></h2>
            </div>
        </main>
    )
}

// measures to take whenever component is unmounted in useEffect
//     useEffect(()=>{
//         function watchWidth(){
//             setWindowWidth(window.innerWidth)
//         }
//         window.addEventListener('resize',watchWidth)
//         return function(){
//             window.removeEventListener('resize',watchWidth)
//         }
//     },[])
