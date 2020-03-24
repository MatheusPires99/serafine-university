import styled from "styled-components";

export const Container = styled.aside`
  position: ${props => (props.fixed ? "fixed" : "relative")};
  top: ${props => (props.fixed ? "17px" : "0")};
  padding-right: ${props => (props.fixed ? "0px" : "50px")};
  min-width: ${props => (props.fixed ? "150px" : "200px")};

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    position: relative;
    top: 0;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
    border-bottom: 1px solid #ddd;
    overflow-x: scroll;
  }

  a {
    cursor: pointer;
    width: fit-content;
    padding: 10px 20px 10px 0px;
    font-size: 18px;
    white-space: nowrap;
    color: rgba(39, 39, 39, 0.8);
    transition: font-weight 0.2s;

    @media (max-width: 768px) {
      font-size: 13px;
      padding: 10px 20px;
    }

    &:hover {
      color: #272727;
      font-weight: bold;
    }

    &.selected {
      font-weight: bold;
    }
  }
`;
