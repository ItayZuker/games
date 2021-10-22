import React, {useContext} from "react";
import './reload_button.scss';
import {RandomSquareBox} from "../../../../../global_context/random_square_box_context";

const ReloadButton = (props) => {

    const { setReload } = useContext(RandomSquareBox);

    return (
        <div className='reload_button_container'
            onClick={() => setReload(true)}>
            <h4>Reload</h4>
        </div>
    )
}

export default ReloadButton