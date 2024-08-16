import {useState} from "react";

const AddGraphic = ({ graphic, setGraphic }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [height, setHeight] = useState(0);

    const createGraphics = (event) => {
        event.preventDefault();
        const newGraphics = {
            id: Date.now(),
            name: name,
            color: `${color.length > 0 ? color : '#3d668f'}`,
            height: `${height}%`
        };
        // console.log(newGraphics);
        // console.log(graphic)
        setGraphic([...graphic, newGraphics]);
    }

    return(
        <div className={"addGraphic"}>
            <h3 className={'title'}>Добавить колонку в график</h3>
            <form className={'addForm'} onSubmit={createGraphics}>
                <input required onInput={(event) => setName(event.target.value)} type={'text'} placeholder={'Название'}/>
                <input required onInput={(event) => setColor(event.target.value)} type={'color'}/>
                <input required onInput={(event) => setHeight(event.target.value)} type={'number'} min={'1'} max={'100'} placeholder={'Заполненость'}/>
                <button>Создать</button>
            </form>
        </div>
    )
}

export default AddGraphic;