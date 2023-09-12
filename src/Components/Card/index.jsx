import styled from "styled-components";
import ImageFilter from "../../ImageFilter";

const Cards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
    border-radius: 10px;
    margin: 5px 0;
    box-shadow: ${({theme})=> theme.shadow};
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