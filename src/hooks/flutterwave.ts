import { Toast } from "../components/toast";
import nite from '../../public/nite.jpg';
import { isOn, setIsOn } from "./overlayState";

// Extend the Window interface to include FlutterwaveCheckout
declare global {
    interface Window {
      FlutterwaveCheckout: any; // You can use a more specific type if available
    }
  }
  
  // Utility function to dynamically load the Flutterwave Checkout script
  function loadFlutterwaveCheckoutScript(callback: () => void): void {
    const script = document.createElement('script');
    script.src = 'https://checkout.flutterwave.com/v3.js';
    script.onload = callback;
    script.onerror = () => {
      console.error("Failed to load Flutterwave script.");
    };
    document.body.appendChild(script);
  }
  
  // Interface for Flutterwave payment options
  interface FlutterwavePaymentOptions {
    public_key: any;
    tx_ref: string;
    amount: number;
    currency: string;
    payment_options: string;
    //redirect_url: string;
    customer: {
      email: string;
      phonenumber: string;
      name: string;
    };
    customizations: {
      title: string;
      description: string;
      logo: string;
    };
    callback?: (response: any) => void;
    onclose?: () => void;
  }
  interface make{
    price:number,
    name:string,
    phone:string,
    email:string
  }
  
  // Function to trigger payment
  export function makePayment({
    price,
    name,
    phone,
    email
  }:make): void {
    loadFlutterwaveCheckoutScript(() => {
      if (window.FlutterwaveCheckout) {
        const paymentOptions: FlutterwavePaymentOptions = {
          public_key: process.env.FLUTTER_WAVE_API_KEY,
          tx_ref: "TX_" + Date.now(),
          amount: price,
          currency: "NGN",
          payment_options: "card,banktransfer,ussd",
          //redirect_url: "https://nite-documentation.vercel.app",
          customer: {
            email: email,
            phonenumber: phone,
            name: name,
          },
          customizations: {
            title: "Nite support",
            description: "Payment for coffee",
            logo: nite,
          },
          callback: (response) => {
            Toast({text:'Thank you very much😊',type:'success',page:document.body,duration:10000});
            setIsOn(!isOn());
          },
          onclose: () => {
            console.log("Payment modal closed");
          }
        };
  
        window.FlutterwaveCheckout(paymentOptions);
      } else {
        Toast({text:'Oops',type:'warning',page:document.body,})
        
      }
    });
  }