import styled from "styled-components";
import ImageFilter from "../../ImageFilter";

const Cards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
    border-radius: 10px;
    margin: 2px 0;
    box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.1);
    .type{
        font-weight: bold;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
`

const Card = ({cargo})=>{
    const {id,type, value, from, date} = cargo;
    return <Cards>
        {ImageFilter(type)}
        <Info>
            <span className="type">{type}</span>
            <span>{from}</span>
            <span>{value}</span>
        </Info>
        <span>{date}</span>
    </Cards>
}


export default Card;