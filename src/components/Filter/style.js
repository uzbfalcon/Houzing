import styled from 'styled-components';
import { ReactComponent as houses } from '../../assets/icons/Houses.svg';
import { ReactComponent as filter } from '../../assets/icons/Filter.svg';
import { ReactComponent as search } from '../../assets/icons/Search.svg';
import { Select } from 'antd';

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  justify-content: center;

  @media screen and (max-width: 685px) {
    padding: 0;
    max-width: 685px;
  flex-wrap: wrap;

  }

  @media screen and (max-width: 380px) {
    padding: 0;
    max-width: 380px;
    flex-wrap: wrap;
  }
`;

const Icons = styled.div``;

Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;

const Section = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-bottom: 20px;
`;

const SelectAnt = styled(Select)`
  min-width: 150px;
  width: 100%;
  max-width: 200px;
  .ant-select-selector {
    height: 44px !important;
  }
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
  }
`;

export { Container, Icons, MenuWrapper, Section, SelectAnt };
