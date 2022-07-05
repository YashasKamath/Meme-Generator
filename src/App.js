import './App.css';
import React,{useState,useEffect} from 'react'
import Header from './Components/Header'
import Meme from './Components/Meme';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
    </div>
  );
}

// const [formData, setFormData] = React.useState({
//   firstName:"",
//   lastName:"",
//   email:"",
//   comments:"",
//   isFriendly:true,
//   employment:'',
//   favColor:''
// })

// function handleChange(event){
//   const {name,type,checked,value}=event.target
//   setFormData(prevState => ({
//       ...prevState,
//       [name]:type==="checkbox"?checked:value
//   }))
// }
// function handleSubmit(event){
//   //event.preventDefault()
//   console.log(formData)
// }

    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     placeholder="First Name"
    //     onChange={handleChange}
    //     name="firstName"
    //     value={formData.firstName}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Last Name"
    //     onChange={handleChange}
    //     name="lastName"
    //     value={formData.lastName}
    //   />
    //   <input
    //     type="email"
    //     placeholder="email"
    //     onChange={handleChange}
    //     name="email"
    //     value={formData.email}
    //   />
    //   <textarea
    //     value={formData.comments}
    //     onChange={handleChange}
    //     name="comments"
    //     placeholder="comments"
    //   />
    //   <input 
    //     type="checkbox"
    //     id="isFriendly"
    //     checked={formData.isFriendly}
    //     onChange={handleChange}
    //     name='isFriendly'
    //   />
    //   <label htmlFor='isFriendly'>Are you friendly?</label>
    //   <br/><br/>
    //   <fieldset>
    //     <legend>Current employment status</legend>
    //     <input
    //       type="radio"
    //       id="unemployed"
    //       name='employment'
    //       value='unemployed'
    //       onChange={handleChange}
    //       checked={formData.employment==='unemployed'}
    //     />
    //     <label htmlFor='unemployed'>Unemployed</label>
    //     <br/>
    //     <input
    //       type="radio"
    //       id="part-time"
    //       name='employment'
    //       value='part-time'
    //       onChange={handleChange}
    //       checked={formData.employment==='part-time'}
    //     />
    //     <label htmlFor='part-time'>Part Time</label>
    //     <br/>
    //     <input
    //       type="radio"
    //       id="full-time"
    //       name='employment'
    //       value='full-time'
    //       onChange={handleChange}
    //       checked={formData.employment==='full-time'}
    //     />
    //     <label htmlFor='full-time'>Full Time</label>
    //   </fieldset>
    //   <br/>
    //   <label htmlFor='favColor'>What is your favourite colour?</label>
    //   <select
    //     id='favColor'
    //     value={formData.favColor}
    //     name='favColor'
    //     onChange={handleChange}
    //   >
    //     <option value=''>--Choose--</option>
    //     <option value='red'>Red</option>
    //     <option value='blue'>Blue</option>
    //     <option value='green'>Green</option>
    //     <option value='orange'>Orange</option>
    //     <option value='yellow'>Yellow</option>
    //     <option value='indigo'>Indigo</option>
    //     <option value='violet'>Violet</option>
    //   </select>
    //   <br/>
    //   <button>Submit</button>
    // </form>
