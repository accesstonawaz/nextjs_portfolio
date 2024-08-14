import { TypeAnimation } from 'react-type-animation';

function Typing (){

  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Next.js',
        500, 
        'Typescript',
        500,
        'Tailwind CSS',
        500,
        'React.js',
        500
      ]}
      wrapper="span"
      speed={10}
      preRenderFirstString={true}
      style={{ marginLeft: '5px', fontSize: '1em', textAlign: 'left', color: "#1320d1", fontWeight: 'bold', display: 'inline-block', width: '43.5%'}}
      repeat={2}
    />
  );
};

export default Typing;