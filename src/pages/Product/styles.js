import styled from 'styled-components';

export const List = styled.section`
  list-style: none;
  margin-top: 30px;

  section {
   display: flex;
   flex-direction: row;
   margin: 0 auto;
   padding: 10px;


    & + section {
      border-top: 1px solid #eee;
    }

    .item {
      flex: 3;
      margin: 5px;
      background: #FFF;
      text-align: center;
      font-size: 0.8em;
    }

    button {
      flex: 1;
      justify-content: space-between;
      margin-top: 5px;
      margin-right: 5px;
      background: #2A5078;
      color: #FFF;
      font-size: 12px;
      padding: 5px;
    }

    .btnRemove {
      background: #737271;
    }
  }
`;

