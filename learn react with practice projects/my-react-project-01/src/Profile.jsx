export default function Profile() {
    const a = {
        color: 'white'
    }
    return (
        <>
            <Avatar
                person={{ name: "Mahim", age: 13 }}
                design='myclass' rong={a}url='https://i.imgur.com/OKS67lhs.jpg'
            />
            <Avatar
                person={{ name: "Mahim", age: 13 }}
                design='myclass' rong={a}url='https://i.imgur.com/OKS67lhs.jpg'
            />
            <Avatar
                person={{ name: "Mahim", age: 13, isGood: true }} rong={a} url='https://i.imgur.com/OKS67lhs.jpg'
                design='myclass'
            />
        </>
    )
}

function Avatar(props) {
    // console.log(props)
    const { person, rong, design, url } = props
    // const {name, age}=person
    return (
        <div>
            <div className="box">
                <h3 className={design} style={rong}>Name: {person.name}</h3>
                <h4 className={design} style={rong}>Age: {person.age}</h4>
                <img src={url} alt="" />
            </div>
        </div>
    )
}