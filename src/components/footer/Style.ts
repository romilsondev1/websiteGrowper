import styled , {css} from 'styled-components'
import {device , theme} from '../../app/styles/theme'

export const FooterStructure = styled.div`
    display: flex;
    flex-direction: row;
    background: ${theme.colors.black};
    padding:  ${theme.spacing.container} ;

`;

export const StructureChild = styled.div`
    width: 30%;
`;

export const StructureClear = styled.div`
    width: 20%
`;

export const StructureParent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

`;

export const StructureParent_OneChild = styled.div`
    width: 30%

`;

export const StructureParent_TowChild = styled.div`
    width: 30%
`;

export const StructureParent_ThreeChild = styled.div`
    width: 40%
`;

export const Footerimage:any = styled.image`
    width: 100px;
    heigth: 100px;
`;

export const FooterText = styled.p`
    font-size: 12px;
    color: ${theme.colors.white};
`;

export const FooterTitle = styled.p`
    font-size: 13px;
    color: ${theme.colors.white};
    font-weight: 700
`;

export const FooterInput = styled.input`
    border-radius: 5px;
    width: 100%;
    padding: 4px 5px;
    border: none;
    font-size: 12px;
    color: ${theme.colors.white};
    background: #D9DBE1;
`;