import './../App.css';

const Price = () => {
    return (
      <div>
        <div className='page-background'>
          <h2>The price for a kitten is 1200 - 2600 CAD.</h2>
          <h2>What the price includes:</h2>
          <ul className='list-container'>
            <li>Two sets of vaccines</li>
            <li>Spay/neuter surgery</li>
            <li>Microchips</li>
            <li>Deworming at least two times, more if needed</li>
            <li>72 hour general health guarantee</li>
            <li>2 year genetic health guarantee</li>
            <li>Litter training</li>
            <li>Legal and binding contract</li>
            <li>TICA papers (after proof of spay)</li>
            <li>Food samples</li>
            <li>Royal Canin kit for new owners</li>
            <li>Favourite toy</li>
            <li>Blanket with a scent of home</li>
            <li>Instructions and support</li>
            <li>30 days free pet insurance with Trupanion</li>
          </ul>
        </div>
        <div className='page-background'>
          <h2>General health guarantee</h2>
          <p>
            The Seller will provide Purchaser with documented vaccinations, deworming, and veterinarian records.
          </p><p>
            The Seller guarantees the Kitten to be in good health at the time of purchase for a period of 72 hours.
          </p><p>
            It will be the responsibility of the Purchaser to have the Kitten examined by a veterinarian within 72 hours.
          </p><p>
            Within that 72 hours period, if found to be seriously ill, the Seller will take the Kitten back and refund payment, minus the deposit, under the following conditions: the Seller is provided with proper documentation, from a licensed veterinarian, stating the medical issue and that the Kitten is seriously medically deficient; a second examination by a veterinarian of the Seller’s choice confirms these claims.
          </p><p>
            This Kitten is not guaranteed against respiratory disease, fleas, ringworms or any parasitic disease, environmental stress (such as diarrhea etc.) and disease caused by dietary changes.
          </p><p>
            After the 72 hour period, the Seller can no longer guarantee the Kitten’s health, except for birth defects.
          </p>
        </div>
        <div className='page-background'>
          <h2>Genetic health guarantee</h2>
          <p>
            The Seller guarantees the Kitten against lethal genetic or congenital defects for 24 months following the date of purchase.
          </p><p>
            If, during these 24 months, the Kitten should die or have to be put down due to a genetic or congenital defect, the Seller will replace the Kitten with a Kitten at the Seller’s earliest convenience, should the following conditions be met: the Purchaser provides the Seller with a necropsy by a licensed impartial Veterinary Pathologist, at the Purchaser’s expense, stating that the cause of death is unquestionably a genetic or congenital defect; a second examination by a veterinarian of the Seller’s choice confirms these claims.
          </p>
        </div>
      </div>
    );
  };

export default Price;