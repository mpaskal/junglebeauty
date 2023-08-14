import { Link } from "react-router-dom";

const ReasonsList = [
    {
        title: `Choice`,
        body:
            <>
                <p>
                    You can choose a kitten that was born for you among other beautiful Bengal kittens.
                </p>
                <p>
                    Due to the regular litters from our various queens, you have a chance to see different patterns and characteristics and choose the kitten that resonates with you most, whether it is a pattern on their back, the glow in their eyes or the spring in their step!
                </p>
            </>
    }, {
        title: `Predictability`,
        body:
            <>
                <p>
                    You will get a kitten that exemplifies what you want in a companion.
                </p>
                <p>
                    You can see the kitten's parents and siblings.
                </p>
                <p>
                    You will know what to expect in the future after 1-2 years, like size, patterns, appearance, temperament, health, etc.
                </p>
            </>
    }, {
        title: `Health`,
        body:
            <>
                <p>
                    Buying a kitten from Junglebeauty Cattery means you know the parents' history, their health and genes, and their temperament.
                </p>
                <p>
                    You will get a <Link className='text-link' to='/price'>health warranty</Link> for the Kitten.
                </p>
                <p>
                    Your furry friend is guaranteed against congenital disorders for the first 2 years.
                </p>
            </>
    }, {
        title: `Desexing`,
        body: 
            <>
                <p>
                    All our kittens go to their forever home after spaying/neutering procedures.
                </p>
                <p>
                    We do it at respectful vet clinics when the kitten's age is 11-14 weeks old. It is a very safe and painless surgery.
                </p>
                <p>
                    Then our kittens grow without any sexual behaviour or unpleasant actions like yelling, marking territory, and illnesses specific to Bengal female cats like pyometra.
                </p>
            </>
    }, {
        title: `Our support`,
        body: 
            <>
                <p>
                    We stay in touch with our customers after they take home a kitten and are ready to answer any questions.
                </p>
                <p>
                    We know the breed and want only the best for the kitten and you.
                </p>
            </>
    }

    /*
    {
        title: ``,
        body:
            <>
                <p>

                </p>
            </>
    }
    */
];

export default ReasonsList;