export const CardStyle = () => {
  const cardStyle = `
    .e {padding-bottom:  75% !important; border-radius: 4px;}
    .body {box-shadow: none !important;}
    .__wc {border: none; background-color: transparent;}
    .wc {position: relative; border-bottom-right-radius: 20%;} 
    .c::before {content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('/images/texture_card.webp'); mix-blend-mode: overlay; opacity: 0.75;}
  `
  return cardStyle
} 
