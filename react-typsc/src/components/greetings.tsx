type hello ={
    name:string;
}

const Greeting : React.FC<hello> =({name})=>{
    return(
        
        <div>Hello, {name}!</div>
        
    )

}

export default Greeting ;