import * as C from './styles'
import {Item} from '../../types/Item'
import {useState, useContext} from 'react'
import { ThemeContext } from 'styled-components';
type Props = {
    item: Item
}
const ListItem = ({item}: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);
    const { secondary, text } = useContext(ThemeContext);
    return(
        <C.Container done={isChecked} secondary={secondary} text={text}>
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