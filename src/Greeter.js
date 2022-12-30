function Greeter({ name, age = 18, excitement = 1 }) {
    const greet = () => {
        alert(`Hello there, ${name}`)
    }
    return (
        <>
            <h1>Hi there, {name}{"!".repeat(excitement)}</h1>
            <p>You are {age} years old</p>
            <button onClick={greet}>Click Me</button>
        </>
    )
}

export default Greeter;