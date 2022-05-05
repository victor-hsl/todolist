import * as C from './styles'
import {Item} from '../../types/Item'
import {useState} from 'react'
type Props = {
    item: Item
}
const ListItem = ({item}: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    return(
        <C.Container done={isChecked}>
            <input 
                id={`${item.id}`}
                type="checkbox" 
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label htmlFor={`${item.id}`}>{item.name}</label>
        </C.Container>
    )
}

export default ListItem;