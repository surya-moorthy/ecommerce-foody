import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";


export default function Home() {
  return (
     <div className="">
               <Navbar/>
              <div className="py-10">
                  <div className="flex flex-row px-16 py-10 space-x-10">
                      <Card itemName="Biriyani" itemImage="/Hyderabadi-Biryani.webp" itemDescription="Hydrebadi Biriyani" rate="Rs.130/-"/>
                      <Card itemName="Biriyani" itemImage="/Hyderabadi-Biryani.webp" itemDescription="Hydrebadi Biriyani" rate="Rs.130/-"/>
                      <Card itemName="Biriyani" itemImage="/Hyderabadi-Biryani.webp" itemDescription="Hydrebadi Biriyani" rate="Rs.130/-"/>
                      <Card itemName="Biriyani" itemImage="/Hyderabadi-Biryani.webp" itemDescription="Hydrebadi Biriyani" rate="Rs.130/-"/>
                  </div>
                  <div className="flex flex-row px-16 py-10 space-x-10">
                      <Card itemName="Biriyani" itemImage="/Hyderabadi-Biryani.webp" itemDescription="Hydrebadi Biriyani" rate="Rs.130/-"/>
                      <Card itemName="Biriyani" itemImage="/Hyderabadi-Biryani.webp" itemDescription="Hydrebadi Biriyani" rate="Rs.130/-"/>
                      <Card itemName="Biriyani" itemImage="/Hyderabadi-Biryani.webp" itemDescription="Hydrebadi Biriyani" rate="Rs.130/-"/>
                      <Card itemName="Biriyani" itemImage="/Hyderabadi-Biryani.webp" itemDescription="Hydrebadi Biriyani" rate="Rs.130/-"/>
                  </div>
                  <div className="flex flex-row px-16 py-10 space-x-10">
                      <Card itemName="Biriyani" itemImage="/Hyderabadi-Biryani.webp" itemDescription="Hydrebadi Biriyani" rate="Rs.130/-"/>
                      <Card itemName="Biriyani" itemImage="/Hyderabadi-Biryani.webp" itemDescription="Hydrebadi Biriyani" rate="Rs.130/-"/>
                      <Card itemName="Biriyani" itemImage="/Hyderabadi-Biryani.webp" itemDescription="Hydrebadi Biriyani" rate="Rs.130/-"/>
                      <Card itemName="Biriyani" itemImage="/Hyderabadi-Biryani.webp" itemDescription="Hydrebadi Biriyani" rate="Rs.130/-"/>
                  </div>
              </div>
     </div>
  
  );
}
