import React from 'react'
import Button from './Button'
import * as style from './Content_style.css'
import Tag from './Tag'
import Modal from '@mui/material/Modal';

import {
  AppBar,
  Container,
  IconButton,
  Paper,
  TextField,
  Toolbar,
} from "@mui/material";
import Box from "@mui/material/Box";

import { useState, useEffect } from "react"

const GITHUB_CLIENT_ID = "284633ed1aa09d0f2c16";

const downloadFromAnchor = (resource_link) => {
  const link = document.createElement("a");
  link.href = resource_link;

  // Append to html link element page
  document.body.appendChild(link);

  // Start download
  link.click();

  // Clean up and remove the link
  link.parentNode.removeChild(link);
};

function Card(props) {
    
    
    const{description,title,tags} = props

    const [templateName, setTemplateName] = useState("");

    const [template, settemplate] = useState("");

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   
    const templatetitle = (index) => {
        settemplate(index)
        const url = `https://github.com/ceejeey/${template}/archive/refs/heads/main.zip`;
        downloadFromAnchor(url);
        
    };

    const modalOpen = (index) => {
      settemplate(index) 
      handleOpen()
      // console.log(template);
    };

    const onClickGithub = (index) => {
      settemplate(index)

        const gitHubRedirectURL = `https://nowwgo6dd6.execute-api.us-west-2.amazonaws.com/prod/github?data=${template},${templateName},repo`;
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}&scope=repo`;
      };

   

    return (
        <>
   
          <div className={style.Container}>
              <div className={style.HeaderContainer}>
                 <div className={style.HeaderWrap}>
                   <span className={style.Title}>{title}</span> 
                 </div>
                 <div className={style.IconContainer}>
                    <div className={style.IconWrap}>
                         <div className={style.Iconbackground} onClick={() => {modalOpen(title)}}>
                             <i class="fab fa-github fa-1x"></i>    
                        </div>  <Modal
                                  open={open}
                                  onClose={handleClose}
                                  aria-labelledby="modal-modal-title"
                                  aria-describedby="modal-modal-description"
                                >
                                  <div className={style.ModalContainer} >
                                    <div className={style.ModalHeaderContainer} >
                                    {title}
                                    </div>

                                    <div className={style.ModalTextContainer} >
                                          <input className={style.input} type="text" id="fname" name="fname" onChange={(e) => setTemplateName(e.target.value)} placeholder='Enter the template name'></input>
                                          <div className={style.ModalinputContainer} > 
                                            <div onClick={() => onClickGithub(title)}>
                                            <Button  label="Create Repo" >  </Button>
                                            </div>
                                          </div>
                                    </div>
                                   
                                  </div>

                                </Modal>
                        <div className={style.Iconbackground} onClick={() => templatetitle(title)}>
                            <i class="fas fa-download fa-1x"></i> 
                        </div>
                    </div>
                 </div>
              </div>
              <div className={style.Para}>
                     <span>{description}
                     </span>
              </div>
               <div className={style.Action}>
                    <div className={style.Tags}>
                    {tags.map((tag)=> (
                            <Tag label={tag}/>
                        ))
                        }  
                    </div>
                    <div className={style.ButtonsContainer}>
                   <Button label="More Details"/>
                    </div>
                </div>
          </div>

         
         

     </>
       
        
    )
}

export default Card
