import EmailForm from '../components/EmailForm';
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
            <EmailForm />
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