type props = {
    name: string,
    age?: number
}


const PropsComponent: React.FC<props> = ({name, age}) => {
    return (
        <>
        <h1>My name is {name} i'm {age} years old</h1>
        </>
    )
}

export default PropsComponent