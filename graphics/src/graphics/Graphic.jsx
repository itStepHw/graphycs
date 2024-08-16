
const Graphic = ({graphic}) => {

    const darker = (hex, amount) => {
        hex = hex.replace(/^#/, '');

        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        r = Math.max(0, r - amount);
        g = Math.max(0, g - amount);
        b = Math.max(0, b - amount);

        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }


    return (
        <div
            className="graphic"
            style={{
                '--color': graphic.color,
                '--height': graphic.height,
                '--border-color': darker(graphic.color, 100)
            }}
        >
            <span style={{writingMode: "vertical-rl", fontSize: '25px'}}>{graphic.name}</span>
        </div>



        // <div style={{backgroundColor: graphic.color,
        //     height: graphic.height,
        //     width: '40px',
        //     border: '3px solid ' + darker(graphic.color, 60),
        //     display: 'flex',
        //     alignItems: 'flex-end',
        //     padding: '5px',
        // }}>
        //     <span style={{writingMode: "vertical-rl", fontSize: '25px'}}>{graphic.name}</span>
        // </div>
    )
}

export default Graphic