import React, { useState } from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyle'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import {SocialMediaIcon, MobileSocialMediaIcon} from '../Navbar/NavbarStyle.js';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SiLeetcode, SiCodeforces, SiGithub, SiGmail } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", flexWrap:"wrap", padding: '10px', 
             alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            {Bio.avatar? <img src={Bio.avatar} width="50px" height="50px" style={{borderRadius:'20px'}} />:<DiCssdeck size="3rem" />}
             <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <div style={{display:'flex', flexWrap:'wrap', width:"100%", justifyContent:"center", marginTop:"20px"}}>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
            <SocialMediaIcon href={Bio.email} target="display">
          <SiGmail size={23}/>
          </SocialMediaIcon>
            <SocialMediaIcon href={Bio.leetcode} target="display">
          <SiLeetcode size={23}/>
          </SocialMediaIcon>
            <SocialMediaIcon href={Bio.codeforces} target="display">
          <SiCodeforces size={23}/>
          </SocialMediaIcon>
            <SocialMediaIcon href={Bio.github} target="display">
          <SiGithub size={23}/>
          </SocialMediaIcon>
            <SocialMediaIcon href={Bio.twitter} target="display">
              <TwitterIcon/>
            </SocialMediaIcon>
        </div>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
          <div style={{display:'flex', flexWrap:'wrap', width:"100%", justifyContent:"center", marginTop:"20px"}}>
          <MobileSocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </MobileSocialMediaIcon>
            <MobileSocialMediaIcon href={Bio.email} target="display">
          <SiGmail size={23}/>
          </MobileSocialMediaIcon>
            <MobileSocialMediaIcon href={Bio.leetcode} target="display">
          <SiLeetcode size={23}/>
          </MobileSocialMediaIcon>
            <MobileSocialMediaIcon href={Bio.codeforces} target="display">
          <SiCodeforces size={23}/>
          </MobileSocialMediaIcon>
            <MobileSocialMediaIcon href={Bio.github} target="display">
          <SiGithub size={23}/>
          </MobileSocialMediaIcon>
            <MobileSocialMediaIcon href={Bio.twitter} target="display">
              <TwitterIcon/>
            </MobileSocialMediaIcon>
        </div>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar