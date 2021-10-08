import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Other%2FMain%20page%20header2.png?alt=media&token=cdc0bb0c-d2c2-4923-be06-7109b73399e1"
          alt=""
        />

        {/* <h1 className="home_categories">
          <h1>Fruits</h1>
        </h1> */}
        <div className="home_row">
          <Product
            id="12346"
            title="Orange Imported 6 pcs (Pack) (Approx 750g - 950g)"
            price={179}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FFruits%2Forange-imported-1-kg-0-20201118.jpg?alt=media&token=30e62b1d-99dd-40ab-a969-a94861f7fdd4"
          />
          <Product
            id="49564"
            title="Banana Yellaki 12 pcs (Approx 750g - 1000g)"
            price={85}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FFruits%2Fbanana-yellaki-12-pcs-0-20200928.jpg?alt=media&token=ce005b65-5c30-4eaf-a971-a142a9b52672"
          />

          <Product
            id="11123"
            title="Apple Indian 6 pcs (Pack) (Approx 750g - 950g)"
            price={90}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FFruits%2Fapple-indian-6-pcs-pack-0-20200806.jpg?alt=media&token=305554cc-308e-4872-ba15-5dc43b7f07bb"
          />

          <Product
            id="43466"
            title="Watermelon Kiran 1 pc (Approx 2300g - 3000g)"
            price={45}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FFruits%2Fwatermelon-kiran-1-pc-0-20201009.jpg?alt=media&token=d5413f0e-db5a-4dfa-8f05-861419481cee"
          />

          <Product
            id="36346"
            title="Papaya (Each) (Approx 800g - 1600g)"
            price={54}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FFruits%2Fpapaya-each-0-20201118.jpg?alt=media&token=9751d401-68f8-4661-a182-d7864fa4ac72"
          />
        </div>

        <div className="home_row">
          <Product
            id="13656"
            title="Nashik's Fresh Onion Purple Brown 1kg"
            price={34}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FVegetables%2Fonion-1-kg-0-20200710.jpg?alt=media&token=3efb4032-87ef-49da-8003-4d9c3dfd5314"
          />
          <Product
            id="35632"
            title="Sweet Corn 1 pc (Approx 250g - 450g)"
            price={11}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FVegetables%2Fsweet-corn-1-pc-0-20201118.jpg?alt=media&token=dd71ef6b-b7a2-4b88-97fc-4f0d3922beba"
          />

          <Product
            id="34634"
            title="Fresh Golden Brown Potato Baby 500g"
            price={19}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FVegetables%2Fpotato-baby-500-g-0-20200731.jpg?alt=media&token=2cfbfda0-66c6-4d3f-b983-e27b93f71839"
          />

          <Product
            id="23463"
            title="Beetroot 2-3 pieces (Approx 800-1000g)"
            price={19}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FVegetables%2Fbeetroot-500-g-0-20200710.jpg?alt=media&token=dba864c8-1d34-42b6-b88c-713cf7cbf82d"
          />

          <Product
            id="34634"
            title="Cucumber regular 2-3 pieces (Approx 800-1000g)"
            price={19}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FVegetables%2Fcucumber-regular-500-g-0-20200902.jpg?alt=media&token=1b2c6f0e-8de9-4c5f-84f5-5590fdab8719"
          />
        </div>

        <div className="home_row">
          <Product
            id="24535"
            title="Good Life Moong Dal 500g"
            price={61}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FDal%2Fgood-life-chilka-moong-dal-500-g-0-20210316.jpg?alt=media&token=9cdc0ea4-f9cb-4166-a9ba-9c30e778ca7f"
          />

          <Product
            id="65334"
            title="Tur/Arhar Dal 2kg"
            price={200}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FDal%2Fplain-tur-arhar-dal-2-kg-0-20210709.jpg?alt=media&token=d77fd85b-8675-4c40-a55d-09f158943fe9"
          />
          <Product
            id="34634"
            title="Good Life Raw Peanuts 500g"
            price={75}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FDal%2Fgood-life-raw-peanuts-500-g-0-20210316.jpg?alt=media&token=f999b18b-ef75-49b6-9d61-362f3da55d04"
          />
          <Product
            id="13463"
            title="Good Life Chana Dal 500g"
            price={48}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FDal%2Fgood-life-chana-dal-500-g-0-20210316.jpg?alt=media&token=d03c94e8-170f-45c7-b811-48238af28376"
          />
          <Product
            id="34634"
            title="Good Life Chilka Urad Dal 500g"
            price={65}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FDal%2Fgood-life-chilka-moong-dal-500-g-0-20210316.jpg?alt=media&token=9cdc0ea4-f9cb-4166-a9ba-9c30e778ca7f"
          />
        </div>

        <div className="home_row">
          <Product
            id="12357"
            title="Jubilee Regular Long Grain Rice 1kg"
            price={50}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FRice%2Fjubilee-regular-long-grain-rice-1-kg-0-20210922.jpg?alt=media&token=832bc9fc-6b78-4124-bea2-1360f5997772"
          />
          <Product
            id="35675"
            title="Fortune Everyday Rozana Basmati Rice 1kg"
            price={70}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FRice%2Ffortune-everyday-rozana-basmati-rice-1-kg-0-20210219.jpg?alt=media&token=ca637a30-f192-4356-b726-9d4cc6f81632"
          />
          <Product
            id="46734"
            title="Fortune Biryani Special Basmati Rice 1kg"
            price={110}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FRice%2Ffortune-biryani-special-basmati-rice-1-kg-0-20210414.jpg?alt=media&token=c5f2ca91-9ef2-4727-b1fd-080175f9f2ef"
          />
          <Product
            id="78455"
            title="Fortune Super Duper Basmati Rice 1kg"
            price={110}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FRice%2Ffortune-super-basmati-rice-1-kg-0-20210922.jpg?alt=media&token=4cafabcd-93b5-4c0c-ba3c-b1a83d356389"
          />
          <Product
            id="67345"
            title="Tata Sampann Ghar ka White Poha 500g"
            price={30}
            rating={5}
            image="https://firebasestorage.googleapis.com/v0/b/kwikmart-fc235.appspot.com/o/Products%2FRice%2Ftata-sampann-white-poha-500-g-0-20210422.jpg?alt=media&token=cf05ff4d-4128-4ce2-8f3b-7c158c8ede16"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
