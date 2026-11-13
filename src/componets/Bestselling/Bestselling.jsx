import './bestSelling.css';
import BestSellingCard from './ui/BestSellingCard';
import selling1 from '../../img/MaskGroup';
import selling2 from '../../img/selling';
import selling3 from '../../img/selling';  

export default function BestSelling() {
  return (
    <section className="container best_selling">
      <h2>Best selling</h2>
      <p className="best_desc">Get in on the trend with our curated selection of best-selling styles.</p>

      <div className="selling_cards">
        <BestSellingCard img={selling1} title='Regular Fit Long Sleeve Top' price='62.99' rating='5.0' bc="#746990" />
        <BestSellingCard img={selling2} title="Black Crop Tailored Jacket" price="62.99" rating="4.9" bc="#908799" />
        <BestSellingCard img={selling3} title="Textured Sunset Shirt" price="49.99" rating="5.0" bc="#908799" />
      </div>
    </section>
  )
}
