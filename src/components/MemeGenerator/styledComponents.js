// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`

display:flex;
justify-content:space-between;
align-items:center;
margin:0;
padding:0;
box-sizing:border-box;
`

export const SubCont = styled.div`
width:400px;
padding:20px;
`
export const Heading = styled.h1`
color: #35469c;
`
export const InputStyle = styled.input`
height:40px;
outline:none;
border:1px solid #5a7184;
border-radius:8px;
margin-bottom:12px;
margin-top:5px;
`
export const Form = styled.form`
display:flex;
flex-direction:column;`

export const SelectOpt = styled.select`
height:40px;
`
export const ButtonOpt = styled.button`
height:40px;
width:120px;
background-color:#0b69ff;
color:white;
border:none;
border-radius:5px;
margin-top:15px;

`
export const ImageDiv = styled.div`
background-image:url(${props => props.bgImage});
background-size:cover;
hieght:500px;
width:500px;
align-self:stretch;
font-size:${props => props.size};
align-items:center;
color:white;
padding:12px;
display:flex;
flex-direction:column;
justify-content:space-between;
`
