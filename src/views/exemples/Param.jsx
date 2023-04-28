import { useParams } from "react-router-dom"

const Param = (props) => {
    const { nome } = useParams()
    
    return (
        <div>
            <h1>Olá {nome}</h1>
        { nome !== undefined ? (
            <p>Passagem de paramtro pelo url</p>
        ) : (
            <p>Porfarovor informa um paramtro na url</p>
        )}
        </div>
    )
}

export default Param