import styled from "styled-components";

const Panel = styled.form`
  display: ${props =>  props.display};
  width: 600px;
  height: 150px;
  border: 3px #101 solid;
  border-radius: 10px;
  margin: 20px;
  margin-left: 75px;
  /* margin: 10px;s
  padding: 70px ;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap; */
`;
export default Panel;

//  ${(props) => (props.display ?  "block": "none")};
