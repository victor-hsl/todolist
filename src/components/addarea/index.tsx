import * as C from './styles'
import { useState, KeyboardEvent } from 'react'
type Props = {
    onEnter: (taskName: string) => void
}
const AddArea = ({onEnter} : Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }

    return(
        <C.Container>
            <div className="image">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg>
            </div>
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />  
        </C.Container>
    )
}

export default AddArea;