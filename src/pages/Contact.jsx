import EmailForm from '../components/EmailForm';
import './../App.css';

const Contact = () => {
    return (
      <>
        <div className='page-background'>
          <h1 className='page-header padded-header'>JungleBeauty Bengals: vivid piece of jungle beauty in your home</h1>
          <h2 className='page-subheader padded-header'>Please contact us by email:</h2>
          
          <EmailForm />
          
          <p>
            Start chatting on Skype:
            <br />
            <a className='text-link' href={'skype:JungleBeautyBengals?chat'}>
              JungleBeautyBengals
            </a>
          </p>
          <p>
            Find us on Instagram:
            <br />
            <a className='text-link' href={'https://www.instagram.com/junglebeautybengals/'}>
              junglebeautybengals
            </a>  
          </p>
        </div>
      </>
    );
  };

export default Contact;