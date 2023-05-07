import { useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()
    console.log(error)

    return (
        <div id='erro'>
            <h1>CARAMBOLAS!! Parece que ocorreu um erro aqui! :(</h1>
            <p> {/*@ts-ignore*/}
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}