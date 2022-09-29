import {useRouter} from 'next/router';
import ListGroup from 'react-bootstrap/ListGroup';

const List=() => {
    const {asPath,push}=useRouter()

    return (
        <ListGroup>
            <ListGroup.Item className={asPath == "/" ? "bg-warning text-white":"bg-dark text-white "} style={{cursor:'pointer'}} onClick={()=>push("/")}>Series</ListGroup.Item>
            <ListGroup.Item className={asPath == "/fantastic" ? "bg-warning text-white":"bg-dark text-white "} style={{cursor:'pointer'}} onClick={()=>push("/fantastic")}>Fantastic</ListGroup.Item>
            <ListGroup.Item className={asPath == "/fear" ? "bg-warning text-white":"bg-dark text-white "} style={{cursor:'pointer'}} onClick={()=>push("/fear")} >Fear</ListGroup.Item>
            <ListGroup.Item className={asPath == "/romantic" ? "bg-warning text-white":"bg-dark text-white "} style={{cursor:'pointer'}} onClick={()=>push("/romantic")} >Romantic</ListGroup.Item>
            <ListGroup.Item className={asPath == "/history" ? "bg-warning text-white":"bg-dark text-white "} style={{cursor:'pointer'}} onClick={()=>push("/history")} >History</ListGroup.Item>
        </ListGroup>
    )
}
export default List