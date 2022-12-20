import './../App.css';

const BuySellAgreement = () => {
    return (
      <div className='page-background'>
        <h1>AGREEMENT to BUY \ SALE</h1>
        <p className='paragraph-variant'>
        <h3 className='paragraph-variant-heading'>I. Date and Parties</h3>
          <p>THIS AGREEMENT made on the _______________________________ , between:</p>
          <p>Name: ______________________________ Address: ____________________________________________________________</p>
          <p>Contacts: email_______________________________________________________phone#___________________________</p>
          <p>(Hereinafter known as the “Buyer”)</p>
          <p>and</p>
          <p>Name: ______________________________ Address: ____________________________________________________________</p>
          <p>Contacts: email_______________________________________________________phone#___________________________</p>
          <p>Email for e-transfer: ______________________________</p>
          <p>(Hereinafter known as the “Seller”).</p>
        <h3 className='paragraph-variant-heading'>II. Purchase Price & Description</h3>
          <p>The Buyer agrees to purchase, for the sum of CAD 1200 - 2600. , the following Kitten from the Seller:</p>
          <p>Name (if any): ___________________________</p>
          <p>Breed: Bengal (purebred, from TICA registered litter)</p>
          <p>Date of Birth: ____________________________</p>
          <p>Sex: Male/Female</p>
          <p>Color: Brown/Silver Spotted Tabby</p>
          <p>State of Health: Healthy</p>
        <h3 className='paragraph-variant-heading'>III. Date of Sale</h3>
          <p>The sale of the Kitten shall occur on the age from 12 to 16 weeks old, __________________________________________ (but not earlier than notified by breeder).</p>
          <p>☐ - A deposit (from the Buyer to the Seller) is being made in the amount of CAD 400 (towards the spay/neutering) on the date of this agreement. Seller will do the spay/neutering in one of the available clinics and the deposit will be used for that, certificate/proof will be provided. Having this deposit paid means the Buyer agrees to sign this agreement. Should the Buyer, after having paid the deposit, decide against purchasing the Kitten, the Buyer forfeits the deposit. If the Seller fails to provide the Kitten within the specified range of dates (or on the agreed time), the deposit must be returned.</p>
          <p>On the date of sale, the full monetary funds shall be delivered to the Seller and the Kitten shall transfer possession to the Buyer.</p>
          <p>Buyer Signature ____________________ Date _________________ Printed Name _________________________________</p>
          <p>Seller Signature ____________________ Date _________________ Printed Name__________________________________</p>
        </p>
      </div>
    );
  };

export default BuySellAgreement;