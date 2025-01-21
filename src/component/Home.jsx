import Card from "./cardDesign/Card";
import Navbar from "./navbar/Navbar";
import SubmitButton from "./Submitbtn";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <h3>WELCOME</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <Card />
      <SubmitButton />
    </>
  );
}
