import "./CostItem.css"
import Card from "./Card";

import CostDate from "./CostDate";
import {useState} from "react";

const Costitem = (props) => {

    const [description, setDescription] = useState(props.description);


    const changeDescriptionHandler = () => {
        setDescription('New'); //description = "New" & Costitem(props)
        console.log(description);
    }
    return (
        <Card className="cost-item">
            <CostDate date = {props.date} />
            <div className="cost-item__description">
                <h2>{description}</h2>
                <div className="cost-item__price">${props.amount}</div>
            </div>
            <button onClick={changeDescriptionHandler}>Изменить описание</button>
        </Card>
    );
}

export default Costitem;