const App =()=>{
    const myname=(nm,e)=>{
        let name=e.target.name;
        let val=e.target.value;
        alert("name :"+name+ " value :"+val);
       

    }
    return(
        <>
        <h1>Dharam Rawat</h1>
        <button name="btn" value="mybtn1" onClick={(e)=>{myname("Dharam singh",e)}}> show data</button>
        </>
    )
}
export default App;
