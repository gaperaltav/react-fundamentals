// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // exercise no.1
  // function onSubmitForm(event) {
  //   event.preventDefault()
  //   const { username } = event.target.elements
  //   onSubmitUsername(username.value)
  // }

  //Extra Credit #1
  // const inputRef = React.useRef(null)
  // function onSubmitForm(event) {
  //   event.preventDefault()
  //   onSubmitUsername(inputRef.current.value)
  // }

  // return (
  //   <form onSubmit={onSubmitForm}>
  //     <div>
  //       <label htmlFor="username" >Username:</label>
  //       <input ref={inputRef} id="username" type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  // Extra Credit #2
  // const [error, setError] = useState(null)

  // function displayError(){
  //   const style = { color: 'red' }
  //   return  <p style={style} role="alert">{error}</p>
  // }

  // function onSubmitForm(event) {
  //   event.preventDefault()
  // }

  // function handlerUserChange(event) {
  //   const {value} = event.target
  //   const isValid = value === value.toLowerCase()

  //   setError(isValid ? null : 'Username must be lower case')
  // }

  // return (
  //   <form onSubmit={onSubmitForm}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input id="username" type="text" onChange={handlerUserChange} />
  //       {error && displayError()}
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  //Extra credit no.3
  const [userName, setUserName] = useState('')

  function onSubmitForm(event) {
    event.preventDefault()
    onSubmitUsername(userName) 
  }

  function userNameChangeHandler (event) {
    const { value } = event.target
    setUserName(value.toLowerCase())
  }
  
  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          onChange={userNameChangeHandler}
          value={userName}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
