export const CardStyle = () => {
  const cardStyle = `
    .e {padding-bottom:  75% !important; border-radius: 4px;}
    .body {box-shadow: none !important;}
    .__wc {border: none; background-color: transparent;}
    .wc {position: relative; border-bottom-right-radius: 20%; filter: grayscale(20%); opacity: 0.8;} 
    .body:hover .wc {filter: grayscale(0%); opacity: 1; transition: 0.3s;}
    .c::before {content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;}
  `
  return cardStyle
} 
