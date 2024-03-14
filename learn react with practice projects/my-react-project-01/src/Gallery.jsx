
export default function Gallary() {
    return (
        <div>
            <Profile />
            <Profile></Profile>
            <Profile></Profile>
        </div>
    )
}

export function Profile() {

    const person = {
        name: 'Gregorio Y. Zara',
        theme: {
            backgroundColor: 'black',
            padding: "20px",
            color: 'pink'
        }
    };

    return (
        <div>
            <img src="src/assets/OIP.jpg" alt="" />
            <ul style={{
                backgroundColor: 'black',
                color: 'indigo',
                padding: "20px"
            }}>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
            <div style={person.theme}>
                <h1>{person.name}'s Todos</h1>
            </div>
        </div>
    )

}