import styled from 'styled-components';

const StyledWrapper = styled.div`
  div.tabs {
    div.tab {
      padding: 6px 0px;
      border: none;
      border-bottom: solid 2px transparent;
      margin-right: 20px;
      color: rgb(117 117 117);
      cursor: pointer;

      &:focus, &:active, &:focus-within, &:focus-visible, &:target {
        outline: none !important;
        box-shadow: none !important;
      }

      &.active {
        color: #322e2c !important;
        border-bottom: solid 2px #8e44ad !important;
      }
    }
  }
`;

export default StyledWrapper;