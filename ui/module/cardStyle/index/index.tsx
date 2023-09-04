export const CardStyle = () => {
  const cardStyle = `
    .e {padding-bottom:  75% !important; border-radius: 4px;}
    .body {box-shadow: none !important;}
    .__wc {border: none; background-color: transparent;}
    .wc {position: relative; z-index: 10; border-bottom-right-radius: 20%; filter: grayscale(20%); opacity: 0.8; transition: 0.3s;} 
    .body:hover .wc {filter: grayscale(0%); opacity: 1; transition: 0.3s;}
  `
  return cardStyle
} 
