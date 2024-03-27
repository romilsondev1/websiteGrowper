'use client'
import Image from 'next/image'
import logobranco from '../../../public/logobranco.png'
import { FooterInput, FooterText, FooterTitle, Footerimage, StructureClear } from './Style'
import { FooterStructure } from './Style'
import { StructureChild } from './Style'
import { StructureParent } from './Style'
import { StructureParent_OneChild } from './Style'
import { StructureParent_TowChild } from './Style'
import { StructureParent_ThreeChild } from './Style'

export default function Footer() {

    return (<>
        <FooterStructure>
            <StructureChild>
                <Image
                    src={logobranco}
                    alt='Growper Tecnologia'
                    width={230}
                    height={40}
                    style={{
                        marginBottom: 30,
                        objectFit: "cover"
                    }}
                />
                <FooterText>
                    Copyright &#169; 2022 Growper Tecnologia Ltda.
                </FooterText>
                <FooterText>
                    Todos os direitos reservados
                </FooterText>
            </StructureChild>
            <StructureClear>
                {/**Espaço dividindo as divs */}
            </StructureClear>
            <StructureParent>
                <StructureParent_OneChild>
                    <FooterTitle>
                        Company
                    </FooterTitle>

                    <FooterText>Sobre Nós</FooterText>
                    <FooterText>Blog</FooterText>
                    <FooterText>Contatos</FooterText>
                    <FooterText>Contratação</FooterText>

                </StructureParent_OneChild>
                <StructureParent_TowChild>
                    <FooterTitle>
                        Suport
                    </FooterTitle>
                    
                    <FooterText>Suporte</FooterText>
                    <FooterText>Área Comercial</FooterText>
                    <FooterText>Time</FooterText>

                </StructureParent_TowChild>
                <StructureParent_ThreeChild>
                    <FooterTitle>
                        Stay up to date
                    </FooterTitle>
                    
                    <FooterInput placeholder='Your email address' type='text'></FooterInput>
                </StructureParent_ThreeChild>
            </StructureParent>
        </FooterStructure>
    </>)
}