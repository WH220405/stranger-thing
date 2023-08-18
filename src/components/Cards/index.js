import Card from './Card'
import data from "../../utils/data"

function ListOfCards(){
    return data.map(item=><Card/>)
}

export default function Cards(){
    return <><ListOfCards /></>
}