# Junglebeauty
![Screenshot of the home page](https://cdn.discordapp.com/attachments/874569364282679307/1137577184119234661/image.png)

This is the website of the Junglebeauty Bengal Cattery, replicating and building on the functionality of the [original site](https://bengalcats.ca/index.php). Customers can view available kittens, graduated cats, and cattery parents, with easy filtering of cats and navigation between kittens and parents. The site also contains cattery information, news, and ways of contacting the owners. Data is drawn from an external database, which is accessed by the owner using an administrative application. The website can be visited here: https://junglebeauty.livenlab.com/

# Details

- This application was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
- Routes are implemented using [React Router DOM](https://github.com/remix-run/react-router).
- Responsive UI elements are implemented using [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap).
- Cat and image carousels use [react-multi-carousel](https://github.com/YIZHUANG/react-multi-carousel).
- Cats data is stored in a Firestore database, and images are loaded from Firebase cloud storage. Both systems use the [Firebase Javascript SDK](https://github.com/firebase/firebase-js-sdk).
- Sending emails written in the contact form to the owner is accomplished using [EmailJS](https://www.emailjs.com/).
- Social media icons are implemented using [Font Awesome](https://github.com/FortAwesome/react-fontawesome).
- Contact form popups are implemented using [SweetAlert2](https://github.com/sweetalert2/sweetalert2).
