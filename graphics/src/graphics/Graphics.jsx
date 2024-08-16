import Graphic from "./Graphic.jsx";


const Graphics = ({graphic, setGraphic}) => {


    return (
        <div className={'desk'}>

            {graphic.map(e => (<Graphic key={e.id} setGraphic={setGraphic} graphic={e} />

            ))}

            {/*<Graphic graphic={graphic} />*/}
            {/*<Graphic graphic={graphic} />*/}
            {/*<Graphic graphic={graphic} />*/}
            {/*<Graphic graphic={graphic} />*/}
        </div>
    )
}

export default Graphics;