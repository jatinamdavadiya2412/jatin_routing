function event1(){
    function handleClick(e){
      console.log(event.target.value)
    }
    // return(<div>
    //     <center>
    //         <button onClick={handleClick}>Click me </button>
    //     </center>
    // </div>)
    //  return(<div>
    //     <center>
    //         <button onDoubleClick={handleClick}>Click me </button>
    //     </center>
    // </div>)
    return(<div>
        Enter Your name: <input type="text" name='fn' onChange={handleClick}/> 
    </div>)
}
export default event1