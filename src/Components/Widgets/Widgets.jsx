import React from 'react';
import "./widget.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle=(heading,subtitle)=>(
        <div className="widget_article">
            <div className="widget_left">
                <FiberManualRecordIcon/>
                
                </div>

                <div className="widget_right">

                   <span className='one'>{heading } <br/></span> 
                    {subtitle}
                    
                    
                    </div>
            </div>
    )
  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2> Linkedin News</h2>
            
            <InfoIcon/>
            </div>
            {newsArticle("Pakistan Cricket is Back", "Top news of 2022")}
            {newsArticle(" PMLN & PPP joins Hands to demolish IK", "Source Geo News")}
      
            {newsArticle("Elon musk launching another missile", "Elon musk shining star")}
      
            {newsArticle("Immigration process gets halted due to covid rise", "Top news of 2022")}
      
            {newsArticle("Man killed his daughter over dispute", "Bahawalpur ")}
      
       
      
       
      
      
    </div>
  )
}

export default Widgets
