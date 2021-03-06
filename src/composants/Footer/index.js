import React from 'react'
import {FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    Socialreseau,
    SocialreseauWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    CopywebsiteRights
} from './FooterElements'


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }


    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>A propos de nous </FooterLinkTitle>
                                <FooterLink to="/">Comment ça marche</FooterLink>
                                <FooterLink to="/">Temoignage</FooterLink>
                                <FooterLink to="/">Ma carriere</FooterLink>
                                <FooterLink to="/">Investissement</FooterLink>
                                <FooterLink to="/">Conditions de service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contacter nous  </FooterLinkTitle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Partenaires </FooterLinkTitle>
                                <FooterLink to="/">Fondateur</FooterLink>
                                <FooterLink to="/">Direction</FooterLink>
                                <FooterLink to="/">Cooperation</FooterLink>
                                <FooterLink to="/">Internationale</FooterLink>
                                <a className="footerlink" href="https://pixabay.com/fr/users/hans-2/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1174132">
                                    Image par Hans Braxmeier de Pixabay</a>
                                    
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Reseau Sociaux </FooterLinkTitle>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Whatsapp</FooterLink>
                                <FooterLink to="/">Linkedin</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <Socialreseau>
                    <SocialreseauWrap>
                        <SocialLogo className='link' to='/' onClick={toggleHome}>
                            PrintempsHotel
                        </SocialLogo>
                        <CopywebsiteRights>
                            PrintempsHotel © 2021 tous Droits reservés.
                        </CopywebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="whatsapp">
                                <FaWhatsapp />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialreseauWrap>
                </Socialreseau>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
