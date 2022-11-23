import './../App.css';

const Contact = () => {
    return (
      <>
        <div className='page-background'>
        <h1>JungleBeauty Bengals: vivid piece of jungle beauty in your home</h1>
        <br/>
        <p>
          Please contact us by email:
          <br/>
          <a className='text-link' href={'mailto:junglebeautybengals@gmail.com'}>
            junglebeautybengals@gmail.com
          </a>
        </p>
        
        <p>
          Start chatting on Skype:
          <br/>
          <a className='text-link' href={'skype:JungleBeautyBengals?chat'}>
            JungleBeautyBengals
          </a>
        </p>
        <p>
          Find us on Instagram:
          <br/>
          <a className='text-link' href={'https://www.instagram.com/junglebeautybengals/'}>
            junglebeautybengals
          </a>  
        </p>
      </div>
      </>
    );
  };

export default Contact;