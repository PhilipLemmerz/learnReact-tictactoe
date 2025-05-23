export default function Log({ turns }) {

    return (
        <>
            <h2>Logs</h2>
            {turns.map((turn, index) => (
                <ol key={index}>
                    <li>player: {turn.player}, clicked: {turn.square.row}, {turn.square.col}</li>

                </ol>
            ))}
        </>

    )
}