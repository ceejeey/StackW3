import React from 'react'
import Button from './Button'
import * as style from './Content_style.css'
import Tag from './Tag'


function Card(props) {

    const{description,title,tags} = props

    return (
        <>
    
          <div className={style.Container}>
              <div className={style.HeaderContainer}>
                 <div className={style.HeaderWrap}>
                   <span className={style.Title}>{title}</span> 
                 </div>
                 <div className={style.IconContainer}>
                    <div className={style.IconWrap}>
                         <div className={style.Iconbackground}>
                             <i class="fab fa-github fa-1x"></i>    
                        </div>
                        <div className={style.Iconbackground}>
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
