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
      speed={40}
      preRenderFirstString={true}
      style={{ marginLeft: '5px', fontSize: '1em', textAlign: 'left', color: "#fa8a28", fontWeight: 'bolder', display: 'inline-block', width: '44.5%'}}
      repeat={Infinity}
    />
  );
};

export default Typing;