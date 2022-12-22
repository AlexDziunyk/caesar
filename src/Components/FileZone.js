import './FileZone.css'
import {useState} from 'react'
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";

const FileZone = (props) => {

    const {setLength} = props
    const [drag, setDrag] = useState(false)
    
    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
        
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    function onChangeFile(e) {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = async (e) => {
            const content = e.target.result;
            var doc = new Docxtemplater(new PizZip(content), {delimiters: {start: '12op1j2po1j2poj1po', end: 'op21j4po21jp4oj1op24j'}});
            var text = doc.getFullText();
            console.log(text.length)
            setLength(text.length)
        };
        
        reader.readAsBinaryString(e.target.files[0])
        
    }

    return (
        <div className='file__wrapper'>
            {drag 
                ? 
                <div
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e => dragStartHandler(e)}
                onDragEnd={e => dragLeaveHandler(e)}
                onDrop={() => setDrag(false)}
                className='file__drop-area-start'>
                    <div>Drop files here</div>
                    <input multiple onChange={e => onChangeFile(e)} type='file'></input>
                </div>
                : 
                <div
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e => dragStartHandler(e)}
                className='file__drop-area-leave'>
                    <div>Drop files here</div>
                    <input multiple onChange={e => onChangeFile(e)} type='file'></input>
                </div>
            }
           
            
        </div>
    )
}

export default FileZone
