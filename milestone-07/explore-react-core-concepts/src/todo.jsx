
// export default function Todo({ task, isDone }) {
//     return (
//         <div>
//             <li>{task}</li>
//         </div>
//     )
// }


// Optional rendaring option 1
// export default function Todo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Finished: {task}</li>
//     } 
//     else {
//         return <li>work on: {task}</li>
//     }
// }


export default function Todo({ task, isDone }) {
    if (isDone) {
        return <li>Finished: {task}</li>
    }
    return <li>work on: {task}</li>
}