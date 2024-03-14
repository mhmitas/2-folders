export default function Singer({singer}){
    console.log(singer)
    return (
        <div style={styles()}>
            <h3>Singer: {singer.name}</h3>
            <p>age:</p>
        </div>
    )
}


function styles(){
    const style = {
        border:'2px solid green',
        margin: '10px'
    }
    return style
}