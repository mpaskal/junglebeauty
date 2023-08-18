import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './../App.css';

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const BuySellAgreement = () => {
    return (
      /*
      <div className='pdf-container'>
          <Document file='/assets/Buy_Sell Agreement.pdf'>
            <Page pageNumber={1} />
          </Document>
      </div>
      */
     <>
      <div className='page-background'>
        Below is an example of the contract which you will sign if you choose to purchase one of our kittens.
      </div>

      <div className='page-background'>
        <h1>AGREEMENT to BUY \ SALE</h1>
        <p className='contract-paragraph'>
          <h3 className='contract-heading'>I. Date and Parties</h3>
          THIS AGREEMENT made on the _______________________________ , between:
          <br />
          Name: ______________________________ Address: _______________________________________________________
          <br />
          Contacts: email: _______________________________________________________ phone#: ___________________________
          <br />
          (Hereinafter known as the “Buyer”)
          <br />
          and
          <br />
          Name: ______________________________ Address: _______________________________________________________
          <br />
          Contacts: email: _______________________________________________________ phone#: ___________________________
          <br />
          Email for e-transfer: ______________________________
          <br />
          (Hereinafter known as the “Seller”).
          <h3 className='contract-heading'>II. Purchase Price & Description</h3>
          The Buyer agrees to purchase, for the sum of CAD 1200 - 2600. , the following Kitten from the Seller:
          <br />
          Name (if any): ___________________________
          <br />
          Breed: Bengal (purebred, from TICA registered litter)
          <br />
          Date of Birth: ____________________________
          <br />
          Sex: Male/Female
          <br />
          Color: Brown/Silver Spotted Tabby
          <br />
          State of Health: Healthy
          <h3 className='contract-heading'>III. Date of Sale</h3>
          The sale of the Kitten shall occur on the age from 12 to 16 weeks old, __________________________________________ (but not earlier than notified by breeder).
          <br />
          ☐ - A deposit (from the Buyer to the Seller) is being made in the amount of CAD 400 (towards the spay/neutering) on the date of this agreement. Seller will do the spay/neutering in one of the available clinics and the deposit will be used for that, certificate/proof will be provided. Having this deposit paid means the Buyer agrees to sign this agreement. Should the Buyer, after having paid the deposit, decide against purchasing the Kitten, the Buyer forfeits the deposit. If the Seller fails to provide the Kitten within the specified range of dates (or on the agreed time), the deposit must be returned.
          <br />
          On the date of sale, the full monetary funds shall be delivered to the Seller and the Kitten shall transfer possession to the Buyer.
          <br />
          Buyer Signature ____________________ Date _________________ Printed Name _________________________________
          <br />
          Seller Signature ____________________ Date _________________ Printed Name__________________________________
        </p>
      </div>
      </>
    );
  };

export default BuySellAgreement;